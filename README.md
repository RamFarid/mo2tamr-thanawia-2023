# Web App for St. Mary Church conference

This project is part of a series of conferences. These conferences are held over three days each year.
This is My first version of conference series

## `User roles`

There are two user roles in the website:

- Organizer: They can control the website data
- Member: They can see them results and interact with the things that the organizers selected

I have made three versions over two years for this conference series.
This project has were used by over **200 members**.
The conference takes you on a journey to deliver a specific topic over three days, The conference organizers do their best to convey the desired idea to the conference members, they decided to make the conference more interactive.

### [**The Score**](https://ben-elsama-w-elard-2023.vercel.app/score)

As I mentioned before the organizers strive to make the conference more fun. They make a virtual score completely controlled on the website each member strive to get the highest score.

> **The Score Page contains all the members that subscribed to the conference So It considered as the main Page of the Website**

|                       | Organizers                                                                                              | Members                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **Add/Remove Member** | Can completely Add a member and Remove any member from the score table                                  | Can not add or remove                             |
| **Score Up/Down**     | Can completely control [**The Score**](https://ben-elsama-w-elard-2023.vercel.app/score) of each Member | Only **SEE** and **can not** control their scores |
| **Edit a member**     | Full control on editing any member data                                                                 | **Can not** edit                                  |

There is [QR code page](https://ben-elsama-w-elard-2023.vercel.app/qrcode) this page available to moderators as to scan any added to the [Member List (Score page)](https://ben-elsama-w-elard-2023.vercel.app/score) member to easily increase as I mentioned

### About The QR code

Any conference member added by the moderators **A Unique id** is generated automatically to this member I use this ID to modify a specific member. So I put this ID inside the QR code for each member, The member should save its QR code image in a phone. And by helping of the QR code scanner on my page the scanner read the QR code then make a POST request to increase the decoded ID in the QR code.  
Therefore, I created a system that is able to improve, develop and speed up the Web app

In the server side I make authentication middleware by helping of `jwt` and cookies onlyHttp

> Any members added by moderator it appears on the [Score page](https://ben-elsama-w-elard-2023.vercel.app/score) and and by **Clicking** on the name of the member it shows the QR code of the member, The member should save his QR code to scan it by moderators If he does any action according to **_the score items of the conference members_**, he deserves to increase his score

> I made the backend using `express.js` used `MongoDB` as a database and firestore from Firebase to store the credentials of the `moderator user`

### Learning outcomes:

- Attach react-router-dom Link with MUI
- ResizeObserver constructor
- MUI Table component
- Set and WeakSet
- MutationObserver constructor

### Not related to front-end

- MongoDB
  - CRUD operations
  - Sort data
