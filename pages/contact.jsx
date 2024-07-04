import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <div className="font-extrabold text-2xl text-red-500">
        Ritista Shrestha
      </div>
      <div className="flex px-10 py-20">
      <div className="col py-20">
        <div className="flex px-10"><FaFacebook/><h1 className="flex font-bold text-xl px-10">Hi,</h1></div>
        <div className="flex px-10"><FaInstagram/><h1 className="flex font-bold text-xl px-10">I'm Ritista Shrestha</h1></div>
        <div className="flex px-10"><FaGithub/><p className="flex w-3/6 px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellendus, minus maiores in quas quasi explicabo voluptate consectetur adipisci delectus ex molestias assumenda optio quam, ad, error perferendis quia sit</p></div>
        <div className="flex px-10"><FaLinkedin/><button className=" font-bold text-xl bg-red-500 border-black border-2 rounded px-3 py-1 hover:bg-green-300">Contact Us</button>
      </div>
      </div>
      <div className=" px-20 py-20">
        <img className="container w-5/6 " src="https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Contact
