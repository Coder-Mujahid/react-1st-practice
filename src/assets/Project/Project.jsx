import img1 from '../../../img/portfolio.png'
import img2 from '../../../img/samsung shop API.png'
import img3 from '../../../img/REST country API.png'
import img4 from '../../../img/calculator with js.png'


export default function Project() {
  return (
    <div className='w-11/12 mx-auto bg-gradient-to-r from-slate-50 to-slate-300 p-5'>
        <h2 className='text-5xl text-blue-900 font-semibold uppercase text-center mb-10'>my projects</h2>
            <div className='grid grid-cols-3 gap-4'>
            <Projectdata img={img1} name={'Portfolio 02'} bio={'Hello there! I am Md Mujahidul islam, a passionate frontend developer'} link={'https://coder-mujahid.github.io/portfolio_02/'}></Projectdata>

            <Projectdata img={img2} name={'samsung shop API'} bio={' Hello there! Hear is now Brand no 1 phone shop SAMSUNG '} link={'https://coder-mujahid.github.io/I_Phone_Api/'}></Projectdata>
            
            <Projectdata img={img3} name={'REST country API'} bio={' Hello there! Hear is Rest api projects to find your destination country and show details '} link={'https://coder-mujahid.github.io/REST_API_with_Modal/'}></Projectdata>

            <Projectdata img={img4} name={'calculator_with_js'} bio={' Hello there! Hear is calculator_with_js projects to caculate your number '} link={'https://coder-mujahid.github.io/calculator_with_js/'}></Projectdata>
            </div>
    </div>
  )
}
function Projectdata({img,name,bio,link}) {
  return (
    <div>
        <div className="card glass mb-3 shadow-lg shadow-black min-h-full">
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
