import { useState } from "react";
import Card from "../component/card";
import SinglePage from "../component/single";
const Home = () => {
    const [count, Setcount] = useState(10);
  return (
    <>
     <Card />
    <SinglePage />
    <h1 className="mb-4">{count}</h1>
    <button onClick={()=> Setcount(count + 1)} className="block my-3 py-3 px-6 bg-red-500 border-green-500 border-2 border-solid rounded hover:bg-green-500 ">add</button>
    <button onClick={()=> Setcount(count - 1)} className="block my-3 py-3 px-6 bg-red-500 border-green-500 border-2 border-solid rounded hover:bg-green-500 ">sub</button>
    <button onClick={()=> Setcount(0)} className="block my-3 py-3 px-6 bg-red-500 border-green-500 border-2 border-solid rounded hover:bg-green-500 ">reset</button>
    <a href=""  className="block my-3 w-1/6 py-3 px-6 bg-red-500 border-green-500 border-2 border-solid rounded hover:bg-green-500 ">Click ME</a>
    </>
  )
}

export default Home
