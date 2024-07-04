// import {useEffect, useState} from 'react'
// import axios from 'axios';
import CustomHooks from './customhook'
const Todos = () => {
    const {posts:todos}= CustomHooks("https://fakestoreapi.com/products/");
  return (
    <div>
        <div>
            {
                todos.map((todo)=>{
                    return(<ul key={todo.id}>
                        <li>{todo.title}</li>
                        <li>{todo.id}</li>
                    </ul>)
                })
            }
        </div>
    </div>
  )
}

export default Todos
