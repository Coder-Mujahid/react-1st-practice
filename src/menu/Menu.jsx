import img from '../../img/logo.png'
function Menu(){
    return(
      <nav className='py-2'>
        <ul className="w-11/12 mx-auto items-center md:flex justify-between">
          <li>
            <div className="dropdown">
              <label tabIndex={0}>
                <img className='w-28' src={img} alt="img"  />
              </label>
              <ul tabIndex={0} className="menu menu-sm md:hidden dropdown-content text-base capitalize font-medium mt-3 z-[1] p-2 shadow bg-slate-50 rounded-box w-52">
              <Menuitem></Menuitem>
              </ul>
            </div>
          </li>
          
          <li className='hidden md:block'>
            <ul className='flex justify-center gap-5 text-base uppercase font-semibold '>
            <Menuitem></Menuitem>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
  export default Menu 

  function Menuitem(){
    return(
      <>
              <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">home</a></li>
              <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">about</a></li>
              <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">service</a></li>
              <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">blogs</a></li>
              <li><a className='border-amber-300 hover:border-b-2 px-2 transition-all duration-200' href="#">content</a></li>
      </>
              
    )
  }