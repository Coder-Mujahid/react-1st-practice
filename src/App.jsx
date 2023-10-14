import './App.css'
import img from '../img/logo-black.png'

function App() {
  

  return (
    <>
      <Details/>
      <h2 className='text-4xl uppercase font-semibold py-5 text-red-500 bg-slate-300 rounded-md'>my first react app</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, blanditiis atque ullam, sint illum corporis dolorem rerum soluta nobis quis iure inventore quas aperiam perferendis dolorum dignissimos libero magnam veniam. Accusantium, nostrum id. Odio quidem, assumenda iusto eveniet necessitatibus voluptatem voluptas nobis corporis officia maiores enim nostrum id quod debitis optio possimus libero laudantium ad atque impedit nam est magni. Cumque nam fugiat consectetur amet hic maxime nobis reiciendis alias eveniet molestias rem, qui ea non doloribus! Magni dolores maxime natus? Quam quae eius, eligendi accusamus inventore fugiat molestiae expedita omnis fugit exercitationem sapiente nam autem odit possimus recusandae vel?</p>
    </>
  )
}
export default App



function Details(){
  return(
    <nav>
      <ul className="w-11/12 mx-auto items-center flex justify-between">
        <li>
          <img className='w-16 p-3' src={img} alt="" />
        </li>

        <li>
          <ul className='flex justify-center gap-5 text-base uppercase font-semibold '>
            <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">home</a></li>
            <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">about</a></li>
            <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">service</a></li>
            <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">blogs</a></li>
            <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">utpal er nanir heda</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

