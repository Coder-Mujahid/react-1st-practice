import bg from '../../img/Blue Artistic Instagram Profile Picture.png'

function Hero(){
    return(
        <div className='w-11/12 mx-auto min-h-screen bg-gradient-to-r from-slate-50 to-slate-300 items-center rounded shadow md:grid grid-cols-3 gap-5'>
            <div className='col-span-2 p-5'>
                <p className="text-lg pb-2 font-medium text-black capitalize">Hello, Welcome my self</p>
                <h2 className="text-4xl font-bold capitalize pb-2 text-lime-500">md mujahid islam</h2>
                <h2 className="text-2xl font-bold capitalize pb-2 text-orange-500">I am frontend developer</h2>
                <p className="pb-2 text-sm font-semibold">Hello there! I am Md Mujahidul islam, a passionate frontend developer with a love for creating stunning and user-friendly web experiences. I believe in the power of well-crafted code to transform ideas into captivating digital realities.</p>
                <ul className='flex gap-4 pb-5'>
                    <li><a target='_blank' href="https://www.linkedin.com/"><i className='bx bxl-linkedin-square text-4xl text-blue-700 hover:text-blue-600 '></i></a></li>
                    <li><a target='_blank' href="https://www.instagram.com/"><i className='bx bxl-instagram-alt text-4xl text-[purple] hover:text-[#e467e4]' ></i></a></li>
                    <li><a target='_blank' href="https://github.com/"><i className='bx bxl-github text-4xl text-slate-700 hover:text-slate-600' ></i></a></li>
                    <li><a target='_blank' href="https://www.facebook.com/"><i className='bx bxl-facebook-square text-4xl text-blue-600 hover:text-blue-500' ></i></a></li>
                </ul>
                <button className="btn-ghost w-28 bg-slate-400 pb-2 text-base font-semibold text-black py-2 rounded duration-75 hover:bg-slate-300">contact</button>
                
            </div>

            <div>
                <aside className='w-auto p-5'>
                    <img className='w-full' src={bg} alt="" />
                </aside>
            </div>
        </div>
    )
}
export default Hero 