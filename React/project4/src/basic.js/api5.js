import { useState,useEffect } from "react";

const Myapi5 = () => {
    const [commentlist,updateComment]=useState([]);
      const getcomment=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
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
            <h1 align="center"> Display Users in API5 </h1>
            <p> Total comment : {commentlist.length}</p>
       {
        commentlist.map((comment,index)=>{
            return(
                <div className="two" key={index}>
                  <h3> {comment.name} </h3>
                  <p> {comment.usename}</p>
                  <p> {comment.email}</p>
                  <p> {comment.address.street}</p>
                  <p> {comment.address.suit}</p>
                  <p> {comment.address.city}</p>
                  <p> {comment.address.zipcode}</p>
                  <p> {comment.address.geo.let}</p>
                  <p> {comment.address.geo.lng}</p>
                  <p> {comment.phone}</p>
                  <p> {comment.website}</p>
                  <p> {comment.company.name}</p>
                  <p> {comment.company.catchphrase}</p>
                  <p> {comment.company.bs}</p>



                </div>
            )
        })
       }
       
       
        </div>
    )
}


export default Myapi5;