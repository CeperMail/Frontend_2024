import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Movies from "./components/Movies/Movies"
import Form from "./components/Form/Form"



function App(){
  return (
    <div>
    <Navbar />
      <main>
        <Hero />
        <Movies />
        <Form/>
      </main>
    <Footer />
    </div>
  )
}

export default App
