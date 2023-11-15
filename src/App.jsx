import './App.css'
import Menu from './menu/menu'
import Hero from './Hero/Hero'
import About from './About/About'
import Skill from './Skill/Skill'
import Project from './assets/Project/Project'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Contact from './Contact/Contact'
// ..
AOS.init();


function App() {
  

  return (
    <>
      <Menu></Menu>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
    </>
  )
}
export default App
