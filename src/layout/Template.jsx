import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router";

export default function Template(){
    const [scrolled, setScrolled] = useState(false)
    const navBar = useRef()

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })
    
    return(
        <>
            <header ref={navBar} className={`border-black grid grid-cols-4 grid-rows-1 gap-4 w-full fixed top-0 px-10.5 h-15 bg-white z-999 ${scrolled ? 'border-b' : 'border-none'}`}>
                <div className="flex items-center">
                    <h1 className="font-bold font-instrument text-xl text-black">Mannabe<sup>&reg;</sup></h1>
                </div>
                <nav className="col-span-2 flex justify-center items-center">
                    <NavLink className={'flex items-center px-4 h-full hover:bg-black hover:text-white'} to='/'>Home</NavLink>
                    <NavLink className={'flex items-center px-4 h-full hover:bg-black hover:text-white'} to='/courses'>Courses</NavLink>
                    <NavLink className={'flex items-center px-4 h-full hover:bg-black hover:text-white'} to='/about'>About</NavLink>
                </nav>
                <div className="flex justify-end items-center">
                    <button className="cursor-pointer flex items-center px-4 h-full hover:bg-black hover:text-white">Log In</button>
                </div>
            </header>
            <main className="min-h-screen">
                <Outlet/>
            </main>
            <footer className="border-black border-t px-10.5 w-full flex justify-between items-end h-40">
                <div className="h-full flex flex-col justify-center">
                    <h1 className="font-instrument text-5xl font-bold">Mannabe</h1>
                    <p>&copy; 2026 Mannabe Education Ltd.</p>
                </div>
                <nav className="h-15 col-span-2 flex justify-center items-center">
                    <NavLink className={'flex items-center px-4 h-full hover:bg-black hover:text-white'} to='/'>Home</NavLink>
                    <NavLink className={'flex items-center px-4 h-full hover:bg-black hover:text-white'} to='/courses'>Courses</NavLink>
                    <NavLink className={'flex items-center px-4 h-full hover:bg-black hover:text-white'} to='/about'>About</NavLink>
                </nav>
            </footer>
        </>
    )
}