import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    console.log(albumData);

  return (
    <>
      <NavBar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row items-end'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b> Spotify </b>
                • 13245 likes
                • <b>50 songs, </b> 
                about 3hr 45min
            </p>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 mt-10 mb-4 pl-2 pt-1 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        {/* <p className='hidden sm:block'>Date added</p> */}
        <img className='m-auto w-4 hidden sm:block' src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {
        songsData.map((item, index)=>(
            <div key={index} className='grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white mt-1 inline-flex'>
                    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt="" />
                    <p className='flex items-center'>{item.name}</p>
                </p>
                <p className='text-[15px] flex items-center'>{albumData.name}</p>
                {/* <p className='text-[15px] hidden sm:block'>5 days ago</p> */}
                <p className='text-[15px] text-center hidden sm:block'>{item.duration}</p>
            </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
