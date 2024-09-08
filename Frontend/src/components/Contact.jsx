import React from 'react'
import list from '../../public/list.json'
function Contact() {
  return (
   <>
   <div className='mt-52'>
   <div className='max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md'>
    <h2 className='text-3xl text-center text-pink-600 font-bold md-6'>Contact Us</h2>
    <form action="">
        <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2'>Your Name</label>
            <input placeholder="omkar makhane" className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 ' required type="Name" />
        </div>
        <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2'>Your Email</label>
            <input placeholder="omkar@gmail.com" className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 ' required type="Email" />
        </div>
        <div className='mb-4'>
            <label className='block text-white text-sm font-semibold mb-2'>Your message</label>
            <textarea rows='4' placeholder="Enter Your message" className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 ' required type="text" />
        </div>
        <div className='flex justify-center'>
            <button type='submit' className='bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white'>
                send message
            </button>
        </div>
    </form>

   </div>
   </div>
   </>
  )
}

export default Contact;