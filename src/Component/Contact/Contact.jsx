import React from 'react'

export default function Contact() {
  return (
    
    <>
    <div className='flex flex-col items-center justify-center mt-14 mx-auto pt-20'>
    <h1 className='text-2xl font-bold text-sky-900 uppercase'>Contact Section</h1>

    <div className="lines mt-6 flex items-center justify-center gap-10">
        <div className="linee bg-sky-900 h-1 w-20"></div>
        <i className="fa-solid fa-star mb-7 text-sky-900 text-xl"></i>
        <div className="linee bg-sky-900 h-1 w-20"></div>
    </div>
</div>

<div className='flex items-center justify-center min-h-screen pb-20'>
    <div className="container w-full max-w-md mx-auto p-10 rounded-lg shadow-md">
        <form className="space-y-4">
            <div>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="User Name"
                    className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="age"
                    name="age"
                    placeholder="User Age"
                    className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="User Email"
                    className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="User Password"
                    className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="w-1/4 py-3 bg-blue-600 text-white rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>

    </>
    )}
   
{/* <div className='flex items-center  justify-center min-h-screen'>
    <div className=" mx-auto p-8 rounded-lg shadow-md w-full max-w-md">
      <form className="space-y-4 w-full">
        <div>
          <input type="text" id="name" name="name" placeholder="User Name" className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <input type="text" id="age" name="age" placeholder="User Age" className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="User Email" className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <input type="password" id="password" name="password" placeholder="User Password" className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </form>
    </div>
</div> */}

   