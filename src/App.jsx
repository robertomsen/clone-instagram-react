import NavbarBottom from './components/NavbarBottom/NavbarBottom'
import NavbarTop from './components/NavbarTop/NavbarTop'
import Stories from './pages/Home/components/Stories/Stories'

function App() {

  return (
    <div className="App">
      <NavbarTop />
      <Stories />
      <NavbarBottom />
    </div>
  )
}

export default App
