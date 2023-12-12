import React from 'react';

const BlogSection = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-slate-50 to-slate-300 w-11/12 mx-auto">
        <h2 className='text-5xl text-blue-900 font-semibold pt-10 uppercase text-center'>my blogs</h2>

      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap -m-4">
          {/* Blog 1 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="../../img/tailwind.png" alt="blog" />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">tailwind css</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className='flex justify-between'>
                <a href="#" className="text-indigo-500 inline-flex items-center ">Learn More</a>

                <div className='flex gap-2 w-auto'>
                    <span className='flex items-center'><i className='bx bxs-user-circle' ></i>  30</span>
                    <span className='flex items-center'><i className='bx bx-message-rounded-dots' ></i>  30</span>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="../../img/CSS3.png" alt="blog" />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Css 3</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className='flex justify-between'>
                <a href="#" className="text-indigo-500 inline-flex items-center ">Learn More</a>

                <div className='flex gap-2 w-auto'>
                    <span className='flex items-center'><i className='bx bxs-user-circle' ></i>  30</span>
                    <span className='flex items-center'><i className='bx bx-message-rounded-dots' ></i>  30</span>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="../../img/html.png" alt="blog" />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">HTML 5</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className='flex justify-between'>
                <a href="#" className="text-indigo-500 inline-flex items-center ">Learn More</a>

                <div className='flex gap-2 w-auto'>
                    <span className='flex items-center'><i className='bx bxs-user-circle' ></i>  30</span>
                    <span className='flex items-center'><i className='bx bx-message-rounded-dots' ></i>  30</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
