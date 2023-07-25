import AltftYellaMaonty from '../components/Hymns/AltftYellaMaonty'
import ElikrfatAini from '../components/Hymns/ElikrfatAini'
import HaleloiaLLrbYaKolsElomm from '../components/Hymns/HaleloiaLLrbYaKolsElomm'
import HozaMaAhsn from '../components/Hymns/HozaMaAhsn'
import KtaaEltaniaNosEllil from '../components/Hymns/KtaaEltaniaNosEllil'
import TobaLLragol from '../components/Hymns/TobaLLragol'
import YastgibLkElrb from '../components/Hymns/YastgibLkElrb'

const hymns = [
  {
    txt: 'طوبى للرجل (باكر)',
    component: <TobaLLragol />,
    slug: 'طوبى-للرجل',
  },
  {
    txt: 'يستجيب لك الرب (التالته)',
    component: <YastgibLkElrb />,
    slug: 'يستجيب-لك-الرب',
  },
  {
    txt: 'اللهم التفت الى معونتي (التالته)',
    component: <AltftYellaMaonty />,
    slug: 'اللهم-التفت-الى-معونتي',
  },
  {
    txt: 'إليك رفعت عيني (الغروب)',
    component: <ElikrfatAini />,
    slug: 'اليك-رفعت-عيني-من-حيث-يأتي-عوني',
  },
  {
    txt: 'هوذا ما احسن (النوم)',
    component: <HozaMaAhsn />,
    slug: 'هوذا-ما-أحسن',
  },
  {
    txt: 'هللويا للرب يا كل الأرض (التاسعه)',
    component: <HaleloiaLLrbYaKolsElomm />,
    slug: 'هللويا-للرب-يا-كل-الأرض',
  },
  {
    txt: 'القطعه الثانيه من صلاة نصف الليل',
    component: <KtaaEltaniaNosEllil />,
    slug: 'القطعه-الثانيه-من-صلاه-نصف-الليل',
  },
]

export default hymns
