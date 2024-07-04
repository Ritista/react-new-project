import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import CustomHooks from "./customhook"

const SinglePage = () => {
  const {post: post}= CustomHooks("https://fakestoreapi.com/products/")

  const Info = useMemo(()=>{
    return post.map(posts => (
          <div key={posts.id} className="shadow-md rounded-2xl p-4">
            <img src={posts.image} className="w-full h-48 object-cover rounded-t-2xl" alt={posts.title} />
            <div className="p-4">
              <h1 className="font-extrabold text-3xl text-red-600 my-3">{posts.title}</h1>
              <h1 className="my-2">
                Price{" "}
                <span className="font-bold text-xl text-red-600">${posts.price}</span>
              </h1>
              <h1 className="my-2">
                Category{" "}
                <span className="font-bold text-xl text-red-600">{posts.category}</span>
              </h1>
              <p className="text-sm text-gray-600 my-3">{posts.description}</p>
              <Link to={`/product/${posts.id}`} className="text-xl py-2 px-4 bg-red-500 text-white hover:text-red-600 hover:bg-green-300 w-full text-center rounded-xl">
                View Product
              </Link>
            </div>
          </div>
        ))
  },[post])



  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Info}
      </div>
    </div>
  );
};

export default SinglePage;
