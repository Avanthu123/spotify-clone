import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {

    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);

    const handleAddSongClick = () => {
      setShowForm(true);  
    }

    const handelCancelClick = () => {
      setShowForm(false);
    }

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden overflow-auto lg:flex'>
        <div className='bg-[#121212] h-[20%] rounded flex flex-col justify-around'>
            <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt=''/>
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt=''/>
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[80%] rounded'>
          <div className='p-5 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-8'src={assets.stack_icon} alt="" />
              <p className='font-semi-bold'>Your library</p>
            </div>
            <div className='flex items-center gap-3'>
              <img className='w-5' src={assets.arrow_icon} alt="" />
              <img className='w-5' src={assets.plus_icon} alt="" />
            </div>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Create your first playlist</h1>
            <p className='font-light'>It's easy, we'll help you</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
          </div>
          <div className='p-4 bg-[#242424] m-2 mt-4 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Let's find some podcasts to follow</h1>
            <p className='font-light'>We'll keep you updated on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
          </div>

          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <button onClick={handleAddSongClick} className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
              Add your own song
            </button>
            {showForm && (
              <div className='p-4 bg-[#242424] text-[15px] m-2 mt-4 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <form action="">
                  <input type='text' placeholder='Song title' className='w-full p-2 mb-4' />
                  <input type='text' placeholder='Song artist' className='w-full p-2 mb-4' />
                  <input type='file' className='w-full flex flex-row mb-4' />
                  <button type='submit' className='px-4 py-1.5 m-1 inline-flex bg-white text-[15px] text-black rounded-full mt-4'>
                    Add song
                  </button>
                  <button onClick={handelCancelClick} className='px-4 py-1.5 m-1 inline-flex bg-white text-[15px] text-black rounded-full mt-4'>
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default SideBar
