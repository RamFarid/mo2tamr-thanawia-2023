import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import sortDesc from '../utils/sortDesc'
import { SERVER_URL, useUser } from './UserContext'

const ScoreContext = createContext()

export function useScore() {
  return useContext(ScoreContext)
}

function ScoreContextProvider({ children }) {
  const { online } = useUser()
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem('groups')) || []
  )
  const [persons, setPersons] = useState(
    JSON.parse(localStorage.getItem('persons')) || []
  )
  const [isLoading, setIsLoading] = useState(false)
  const [personError, setPersonError] = useState('')
  const [groupError, setGroupError] = useState('')

  const addNewPerson = (person) => {
    const updatedPersons = [...persons, person]
    const sortedUpdatedPersons = sortDesc(updatedPersons)
    setPersons(sortedUpdatedPersons)
  }

  const addNewGroup = (group) => {
    const updatedGroup = [...groups, group]
    const sortedUpdatedGroup = sortDesc(updatedGroup)
    setGroups(sortedUpdatedGroup)
  }

  const removeGroup = (group) => {
    const updatedGroup = groups.filter((g) => g._id !== group._id)
    const sortedUpdatedGroup = sortDesc(updatedGroup)
    setGroups(sortedUpdatedGroup)
  }

  const removePerson = (person) => {
    const updatedPerson = persons.filter((p) => p._id !== person._id)
    const sortedUpdatedPerson = sortDesc(updatedPerson)
    setPersons(sortedUpdatedPerson)
  }

  const updateGroup = (group) => {
    const removeGroup = groups.filter((g) => g._id !== group._id)
    const updatedGroup = sortDesc([...removeGroup, group])
    setGroups(updatedGroup)
  }

  const updatePerson = (person) => {
    const removePerson = persons.filter((p) => p._id !== person._id)
    const updatedPerson = sortDesc([...removePerson, person])
    setPersons(updatedPerson)
  }

  useEffect(() => {
    ;(async () => {
      if (!online) return
      const groupErrorMessage = 'في حاجه غلط حصلت و انا بجيب نقط المجاميع '
      const personErrorMessgae = 'في حاجه غلط حصلت و انا بجيب نقط المخدومين '
      try {
        setGroupError('')
        setPersonError('')
        setIsLoading(true)
        const groupsResponse = await fetch(`${SERVER_URL}/groups`).catch((er) =>
          setGroupError(groupErrorMessage + er.message)
        )
        if (groupsResponse) {
          const groups = await groupsResponse.json()
          if (groups.success) {
            setGroups(groups.data)
            localStorage.setItem('groups', JSON.stringify(groups.data))
          } else {
            setGroupError(`${groupErrorMessage}${groups.message}`)
          }
        }
        const personsResponse = await fetch(`${SERVER_URL}/persons`).catch(
          (er) => setPersonError(personErrorMessgae + er.message)
        )
        if (personsResponse) {
          const persons = await personsResponse.json()
          if (persons.success) {
            setPersons(persons.data)
            localStorage.setItem('persons', JSON.stringify(persons.data))
          } else {
            setPersonError(`${personErrorMessgae}${persons.message}`)
          }
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [online])
  return (
    <ScoreContext.Provider
      value={{
        groups,
        persons,
        isLoading,
        personError,
        groupError,
        addNewGroup,
        addNewPerson,
        removeGroup,
        removePerson,
        updateGroup,
        updatePerson,
      }}
    >
      {children}
    </ScoreContext.Provider>
  )
}

export default ScoreContextProvider
