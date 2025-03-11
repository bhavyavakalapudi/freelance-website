import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    const [isOpen,setOpen] = useState(false)

    return <div>
        <nav class="bg-pink-300 border-pink-200 dark:bg-pink-300">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/race Lee.png" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-pink-300 md:dark:bg-pink-300 dark:border-pink-300">
                        <li>
                            <NavLink to='/'
                                style={({ isActive }) => ({
                                    color: isActive ? "black" : "white",
                                    textDecoration: "none",
                                })}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'
                                style={({ isActive }) => ({
                                    color: isActive ? "black" : "white",
                                    textDecoration: "none",
                                })}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/portfolio'
                                style={({ isActive }) => ({
                                    color: isActive ? "black" : "white",
                                    textDecoration: "none",
                                })}>
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/services'
                                style={({ isActive }) => ({
                                    color: isActive ? "black" : "white",
                                    textDecoration: "none",
                                })}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/testimonial'
                                style={({ isActive }) => ({
                                    color: isActive ? "black" : "white",
                                    textDecoration: "none",
                                })}>
                                Testimonials
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center 
                p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
                focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black dark:hover:bg-orange-300
                 dark:focus:ring-orange-300" aria-controls="navbar-default" aria-expanded="false" onClick={()=>{
                    setOpen(!isOpen)
                 }}>
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <NavLink to="/" className="block p-1" style={({ isActive }) => ({
                        color: isActive ? "black" : "white",
                        textDecoration: "none",
                    })}>
                    Home
                </NavLink>
                <NavLink to="/about" className="block p-1" style={({ isActive }) => ({
                        color: isActive ? "black" : "white",
                        textDecoration: "none",
                    })}>
                    About
                </NavLink>
                <NavLink to="/portfolio" className="block p-1" style={({ isActive }) => ({
                        color: isActive ? "black" : "white",
                        textDecoration: "none",
                    })}>
                    Portfolio
                </NavLink>
                <NavLink to="/services" className="block p-1" style={({ isActive }) => ({
                        color: isActive ? "black" : "white",
                        textDecoration: "none",
                    })}>
                    Services
                </NavLink>
                <NavLink to="/testimonial" className="block p-1" style={({ isActive }) => ({
                        color: isActive ? "black" : "white",
                        textDecoration: "none",
                    })}>
                    Testimonials
                </NavLink>
            </div>
        </nav>
    </div>
}