import img from '../../img/logo-black.png'
function Menu(){
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
  export default Menu 