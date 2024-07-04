import { useState, useRef, useCallback } from "react";
import Header from "./component/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Error from "./pages/error";
import Single from "./pages/single";
import DeletePage from "./pages/delete";
import EditBlog from "./pages/blogs/edit";
import SingleBlog from "./pages/blogs/single";
import Blogy from "./pages/blogs/blogs";
import Todos from "./component/todos";
export default function App() {
  const a = useState();
  // useState(bool, number, array, object, null)
  const b = useRef(null);
  console.log(b.current);
  const gobacktotop = useCallback(() =>{
    if(b.current){
      b.current.scrollIntoView({behavior: "smooth"});
    }
  },[])
  console.log(a);
  return (
    <>
    <Header />
    <div ref={b}></div>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todos />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} >
      <Route path="edit" element={<EditBlog />} />
      <Route path="singles" element={<SingleBlog />} />
      <Route index element={<Blogy />} />
    </Route>
      <Route path="*" element={<Error />} />
      <Route path="/product/:id" element={<Single />} />
      <Route path="/delete" element={<DeletePage />} />
    </Routes>  
    <div className="absolute bottom-0 right-0 md:fixed">
      <button onClick={gobacktotop} className="py-2 px-5 bg-red-500 text-white
       hover:bg-green-500 text-xl font-bold">Go Back To Top</button>
    </div>
    </>
  )
}
