import React from 'react'
import video1 from'../assets/video1.mp4'
import video2 from'../assets/video2.mp4'
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text6xl lg:text-7xl text-center tracking-wide">
            VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to bg-red-800 text-transparent bg-clip-text'>for <br />Developers</span>
        </h1>
        <p className="mt-10 text-l text-center text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque officia eos, iusto hic laboriosam aliquam distinctio delectus magnam tempora enim eius porro molestias dolorum tenetur reprehenderit quasi quia accusantium.
        </p>

        <div className="flex justify-center items-center my-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to bg-orange-800 px-4 py-3 mx-3 rounded-md'>Start for free</a>
            <a href="#" className=' px-4 py-3 mx-3 rounded-md border-2'>Documentation</a>
        </div>

        <div className="flex mt-10 justify-between">

            <video autoPlay loop muted className='rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'><source src={video1} type='video/mp4'/>
                This Video Component could not be rendered by your browser 
            </video>
             <video autoPlay loop muted className='rounded-md w-1/2  border border-orange-700 shadow-orange-400 mx-2 my-4'><source src={video2} type='video/mp4'/>
                This Video Component could not be rendered by your browser 
            </video>
        </div>
    </div>
  )
}

export default HeroSection