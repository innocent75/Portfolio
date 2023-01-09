import React from 'react'
import { AiOutlineDownload} from 'react-icons/ai';

const Main = () => {
  return (
    <div  name='home' className='w-full h-screen bg-black'>
         {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Salut, mon nom est</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Thomas Loril
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
           Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
         Je suis un développeur Full-stack spécialisé React 
        </p>
        <div>
          <a href="https://mega.nz/file/YngwCapI#K4AZ9nMhhzE4ZBCjQZ_XA9P2iYxuxXZJ3mdgsnJ08_k" className='w-[200px] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' target="_blank" >Télécharger mon CV ici 
            
            <span>
              <AiOutlineDownload className='ml-3 ' />
            </span>
            </a>
         
        </div>
      </div>
    </div>
  )
}

export default Main