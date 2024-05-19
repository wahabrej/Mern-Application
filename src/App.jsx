import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function App() {
  const [users,setUsers]=useState([]);
   const [name,setName]=useState([]);
    const [age,setAge]=useState([]);

    const [product,setProduct]=useState([]);
    const [productname,setProductname]=useState([]);
    const [productprice,setProductprice]=useState([]);

    // product

    useEffect(()=>{
      axios.get("http://localhost:3001/getProduct")
      .then((product)=>{
        setProduct(product.data)
      }).catch((err)=>{
        console.log(ErrorEvent)

      })
    })

    // user 
  useEffect(()=>{
    axios.get("http://localhost:3001/getUsers")
    .then((users)=>{
      setUsers(users.data)
    }).catch((err)=>{
      console.log(err)
    })

  })
  const Submit =()=>{
    axios.post("http://localhost:3001/createUser",{name,age})
    .then((users)=>{
      console.log(users)
    }).catch((err)=>{
      console.log(err)
    })

  }
  return (
   
    <div>
      <div className="underline text-center">
        {
          product.map((item,index)=>(
            <h1>{item.name}</h1>
          ))
        }
        <br />
{
  users.map((user,index)=>(
    <h1>{user.name}</h1>
  ))
}
<input type="text" placeholder='Enter name' className='border-gray' onChange={(e)=>setName(e.target.value)} />
<input type="text" placeholder='Enter age' onChange={(e)=>setAge(e.target.value)} />
<button onClick={Submit}>Create User</button>
      </div>
    </div>
  )
}
