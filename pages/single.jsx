import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Single = () => {
    const {id} = useParams();
    const [product, Setpost] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          let data = await axios.get(`https://fakestoreapi.com/products/${id}`);
          console.log(data);
          Setpost(data.data);
        } catch (e) {
          console.log(e.message);
        }
      };
      fetchData();
    }, [id]);
  return (
    <div className="md:container mx:auto flex justify-between items-centre h-[80vh]">
        <div className="md:w-1/2">

        <img className="w-1/2" src={product.image} alt={product.title}/>
        </div>
        <div className="md:w-1/2">
         <h1 className="text-3xl font-bond text-red-500">{product.title}</h1>
         <p>{product.description}</p>
         <p>price:<span>{product.price}</span></p>
         <p>category: <span>{product.category}</span></p>
      </div>
        
    </div>
  )
}

export default Single
