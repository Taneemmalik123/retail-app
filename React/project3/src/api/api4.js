import { useState,useEffect } from "react";

const Myapi4 = () => {
    const [commentlist,updateComment]=useState([]);
      const getcomment=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then (response=>response.json())
        .then (commentArray=>{
            updateComment(commentArray)
        })
      }


      useEffect(()=>{
         getcomment();
      },[1])

    return(
        <div className="container">
            <h1 align="center"> API4 </h1>
            <p> Total comment : {commentlist.length}</p>
       {
        commentlist.map((comment,index)=>{
            return(
                <div className="two" key={index}>
                  <h3> {comment.title} </h3>
                  <p> {comment.completed}</p>
                </div>
            )
        })
       }
       
       
        </div>
    )
}


export default Myapi4;