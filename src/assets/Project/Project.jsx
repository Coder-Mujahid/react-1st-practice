import img1 from '../../../img/portfolio.png'
import img2 from '../../../img/samsung shop API.png'
import img3 from '../../../img/REST country API.png'
import img4 from '../../../img/calculator with js.png'
import img5 from '../../../img/Simple bank function.png'
import img6 from '../../../img/Responsive bike shop .png'


export default function Project() {
  return (
    <div className='w-11/12 mx-auto bg-gradient-to-r from-slate-50 to-slate-300 p-5'>
        <h2 className='md:text-5xl text-2xl text-blue-900 font-semibold uppercase text-center mb-10'>my projects</h2>
            <div className='md:grid grid-cols-3 lg:grid-cols-3 gap-4'>
            <Projectdata img={img1} name={'Portfolio 02'} bio={'Hello there! I am Md Mujahidul islam, a passionate frontend developer'} link={'https://coder-mujahid.github.io/portfolio_02/'}></Projectdata>

            <Projectdata img={img2} name={'samsung shop API'} bio={' Hello there! Hear is now Brand no 1 phone shop SAMSUNG '} link={'https://coder-mujahid.github.io/I_Phone_Api/'}></Projectdata>
            
            <Projectdata img={img3} name={'REST country API'} bio={' Hello there! Hear is Rest api projects to find your destination country and show details '} link={'https://coder-mujahid.github.io/REST_API_with_Modal/'}></Projectdata>

            <Projectdata img={img4} name={'calculator_with_js'} bio={' Hello there! Hear is calculator_with_js projects to caculate your number '} link={'https://coder-mujahid.github.io/calculator_with_js/'}></Projectdata>

            <Projectdata img={img5} name={'Simple bank function'} bio={' Hello there! Hear is Simple bank function projects to use some banking fecilites '} link={'https://coder-mujahid.github.io/bank_counter/'}></Projectdata>

            <Projectdata img={img6} name={'Responsive bike shop '} bio={' Hello there! Hear is Responsive bike shop projects to use some CSS framework Tailwind CSS '} link={'https://coder-mujahid.github.io/responsive_bike_shop_site/'}></Projectdata>
            </div>
    </div>
  )
}
function Projectdata({img,name,bio,link}) {
  return (
    <div>
        <div data-aos="fade-left" className="card glass mb-3 shadow-lg shadow-black min-h-full">
            <figure><img src={img} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='pb-2 text-sm font-semibold'>{bio}</p>
                <div className="card-actions justify-end">
                <a className='w-full' target="_blank" href={link}><button className="btn btn-primary w-full">See details !</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}
