import NavBar from './components/NavBar'
import './styles.css'
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <main>
          <ItemListContainer mensaje="Aqui se despegara la lista de productos"/>
      </main>
    </>
  )
}

export default App
