import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    console.log(albumData);

  return (
    <>
      <NavBar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row items-end'>
        <img src={albumData.image} alt="" />
      </div>
    </>
  )
}

export default DisplayAlbum
