import React from 'react'
import logo from '../assets/logo.png'
import {Menu, X} from 'lucide-react'
import {useState} from 'react'

import { navItems } from '../Constants'
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <div>
        {/* <h1 className="flex justify-center items-center border-b-2px border neutral-700/80">Hello navbar</h1> */}

        <nav className="sticky top-0 z-50-py-3 backdop-blur-lg border-b border-neutral-700/80">
            <div className="container mx-auto px-4 relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} className='h=10 w-10 mr-2' alt="Logo"/>
                        <span className="text-xl tracking-tight">VirtualR</span>

                        
                    </div>

                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index)=>(
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="hidden lg:flex justfy-center space-x-12 uetms-center"> 
                        <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                        <a href="#"className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create Account</a>
                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <X />:<Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col items-center lg:hidden">
                        <ul>
                           {navItems.map((item, index) => (
                            
                            <li key={index} className='py-4 text-l font-bold'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                           ))}
                        </ul>
                        <div className="flex space-x-6">
                             <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                        <a href="#"className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create Account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>

    </div>
  )
}

export default Navbar