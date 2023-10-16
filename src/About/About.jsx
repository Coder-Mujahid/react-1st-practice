import img from '../../img/person-learning-online-removebg-preview.png'

function About () {
    return (
        <div>
    <section className=" w-11/12 mx-auto bg-gradient-to-r from-slate-50 to-slate-300 body-font">
            <div className="container mx-auto md:grid grid-cols-3 px-5 gap-10 py-24 items-center">
                <div className='w-auto col-span-1'>
                <img className="w-full" alt="hero" src={img}/>
                </div>
            <div className="p-6 flex flex-col col-span-2 md:items-start items-start">
                <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-red-400 capitalize">my self mujahid islam
                </h1>
                <h1 className="title-font sm:text-3xl text-lg mb-4 font-medium text-blue-400 capitalize">frontend web developer
                </h1>
                <p className="mb-2 text-start">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <ul className='mb-2 flex flex-col gap-2'>
                    <li><a className='flex items-center text-sm md:text-lg text-black' href="#"><i className='bx bxs-envelope text-lg pr-2 text-red-500'></i>mujahidislam400301@gmail.com</a></li>
                    <li><a className='flex items-center text-sm md:text-lg text-black' href="#"><i className='bx bxs-phone text-lg pr-2 text-blue-400'></i>01737705511</a></li>
                    <li><a className='flex items-center text-sm md:text-lg text-black' href="#"><i className='bx bxs-map text-lg pr-2 text-red-400'></i>Aftabnagar, Badda, Dhaka</a></li>
                    <li><a className='flex items-center text-sm  md:text-lg text-black' href="#"><i className='bx bxs-institution text-lg pr-2 text-red-500'></i>Computer Science and Technology</a></li>
                </ul>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-medium capitalize"> <a href="file:///C:/Users/Mujahidul%20Islam/Desktop/Professional%20Resume.pdf">download CV</a></button>
                    
                </div>
                </div>
            </div>
    </section>
        </div>
    );
}

export default About;