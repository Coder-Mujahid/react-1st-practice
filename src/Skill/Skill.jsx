import img from '../../img/skill logo.png'
import img1 from '../../img/html.png'
import img2 from '../../img/CSS3.png'
import img3 from '../../img/Bootstrap .png'
import img4 from '../../img/tailwind.png'
import img5 from '../../img/js.png'
import img6 from '../../img/code_1903496.png'

export default function Skill() {
  return (
    <div className='bg-gradient-to-r from-slate-50 to-slate-300 p-5 w-11/12 mx-auto'>
        <h2 className='text-5xl text-blue-900 font-semibold uppercase text-center'>skill</h2>
        <div className='lg:grid grid-cols-7 gap-5 min-h-screen items-center mx-auto'>
            <aside className='col-span-3'>
                <img className='w-full p-5' src={img} alt="image" />
            </aside>

            <div className='md:grid grid-cols-2 gap-3 col-span-4 w-full'>
                <Skilldata></Skilldata>
                <Skilldata></Skilldata>
                <Skilldata></Skilldata>
                <Skilldata></Skilldata>
                <Skilldata></Skilldata>
                <Skilldata></Skilldata>
            </div>
        </div>
    </div>
  )
}
function Skilldata() {
    return (
        <>
            <ul>
                <li className='flex w-auto py-2 px-5 border-2 border-slate-500 rounded-lg mb-2'>
                    <img className='w-20 pr-3' src={img1} alt="img" />
                <div className='w-full'>
                    <h3 className='text-xl text-black font-semibold'>HTML</h3>
                    <p className='text-sm mb-3 font-medium text-black capitalize'>hypertext markup language</p>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '95%' }}>95%</div>
                    </div>
                </div>
                </li>
            </ul>
        </>
    )        
}