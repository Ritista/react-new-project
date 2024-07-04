import {useState, useEffect} from 'react'
import axios from 'axios';
const CustomHooks = (url) => {
    const [post, Setpost] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
      try {
        let cachePost = localStorage.getItem("post");
        if(cachePost){
            Setpost(JSON.parse(cachePost));
        }else{
          let data = await axios.get(url);
          console.log(data);
          Setpost(data.data);
          localStorage.setItem("post", JSON.stringify(data.data));
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [url]);
  return {post}
}

export default CustomHooks
