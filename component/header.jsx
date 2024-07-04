import { HiMiniBars3 } from "react-icons/hi2";
import { useState } from "react";
import {Link} from "react-router-dom";
function Header(){
    const [open, Setopen] = useState(false);
    function menu(){
        Setopen(!open);
    }
    /*npm install react-icons --save*/ 
    return(
    <>
        <nav className="container mx-auto h-[70px] flex justify-between items-center text-red-500">
            <div><h1 className="text-xl font-extrabold">Logo</h1></div>
            <ul className="hidden md:flex gap-11 text-xl">
                <li className="hover:text-black hover:text-2xl"><Link to="/">Home</Link></li>
                <li className="hover:text-black hover:text-2xl"><Link to="/about">About Us</Link></li>
                <li className="hover:text-black hover:text-2xl"><Link to="/blog">Blogs</Link></li>
                <li className="hover:text-black hover:text-2xl"><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="md:hidden">
                <HiMiniBars3 onClick={menu} className="hover:text-black hover:text-2xl text-xl"/>
            </div>
        </nav>
        {
            open && (
                <ul className="md:hidden flex flex-col gap-2 text-xl text-center">
                <li className="hover:text-black hover:text-2xl"><a href="">Home</a></li>
                <li className="hover:text-black hover:text-2xl"><a href="">About Us</a></li>
                <li className="hover:text-black hover:text-2xl"><a href="">Blogs</a></li>
                <li className="hover:text-black hover:text-2xl"><a href="">Contact Us</a></li>
            </ul>
            )
        }
    </>
)}
export default Header
