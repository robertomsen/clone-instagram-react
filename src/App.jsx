import NavbarBottom from './components/NavbarBottom/NavbarBottom'
import NavbarTop from './components/NavbarTop/NavbarTop'
import Publication from './pages/Home/components/Publication/Publication'
import Stories from './pages/Home/components/Stories/Stories'

const FETCH_PUBLICATIONS = [
  {
    id: 1, 
    profile: {
      name: 'robertomsen',
      image: 'https://picsum.photos/id/51/200/300',
    },
    image: 'https://picsum.photos/id/90/200/300',
    title: 'Las imagenes molan',
    comments: [
      {
        id: 123123,
        comment: 'Como mola esta imagen',
        profile: {
          name: 'randomXass',
          image: 'https://picsum.photos/id/122/200/300',
        },
        date: 2022-23-23,
      },
      {
        id: 123123,
        comment: 'Como mola esta imagen',
        profile: {
          name: 'randomXass',
          image: 'https://picsum.photos/id/122/200/300',
        },
        date: 2022-23-23,
      },
    ],
    likes: 965
  }
]

function App() {

  return (
    <div className="App">
      <NavbarTop />
      <Stories />
      {FETCH_PUBLICATIONS.map((publication) => (
        <Publication key={publication.id} data={publication} />
      ))}
      <NavbarBottom />
    </div>
  )
}

export default App
