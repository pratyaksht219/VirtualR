import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImage from '../assets/code.jpg'
import { checklistItems } from '../Constants'
const WorkFlow = () => {
  return (
    <div className="mt-20 border-b border-neutral-800 pb-10">
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-10 mb-10 tracking-wide'>
            Accelerate your <span className='bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'>Coding Workflow</span>
        </h2>

        <div className='flex flex-wrap justify-center'>
            <div className="w-full lg:w-1/2 p-2">
                <img src={codeImage} alt="codeImage" />
            </div>
            <div className="w-full lg:w-1/2 pt-12  ">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                    <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                        <CheckCircle2 />
                    </div>
                    <div>
                        <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                        <p className="text-md text-neutral-500">{item.description}</p>
                    </div>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default WorkFlow