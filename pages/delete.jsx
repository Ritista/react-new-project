import {useState, useEffect} from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const DeletePage = () => {
    const [deletes, SetDeletes] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get("https://fakestoreapi.com/products");
                SetDeletes(response.data);
            }catch(e){
                console.log(e.message)
            }
        }
        fetchData();
    },[])

    const handleDelete = async(deleteId)=>{
        try{
            await axios.delete(`https://fakestoreapi.com/products/${deleteId}`);
            SetDeletes(deletes.filter( deleteId=> deleteId.id !== deleteId ));
            console.log("product delete sucessfully" + deleteId);
        }catch(e){
            console.log(e.message);
        }
    }
return (
    <>
            <div>
                <div>
                    {deletes.map( a => (
                        <div key={a.id}>
                            <div className="container mx-auto flex justify-between">
                                <img src={a.image} alt={a.title} className="w-1/3"/>
                                <div className="w-1/3">
                                    <h1>{a.title}</h1>
                                    <h1>{a.description}</h1>
                                    <h1>{a.price}</h1>
                                </div>
                                <div className="w-1/3">
                                    <MdDelete onClick={()=> handleDelete(a.id)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </>
  )
}

export default DeletePage
