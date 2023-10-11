import { useState, useEffect } from "react"

const Myapi3 = () => {
    const [commentlist, updateComment] = useState([]);
    const getcomment = () => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(commentArray => {
                updateComment(commentArray);
            })
    }

    useEffect(()=>{
        getcomment();
    },[1]);



return (
    <div className="container">
        <h1 align="center"> Api-3 </h1>
        <p> Total Comment from Server : {commentlist.length} </p>
   {
     commentlist.map((comment,index)=>{
        return(
            <div className="two" key={index}>
                <p> {comment.title} </p>
            </div>
        )
     })
   } 
   
   </div>
)
}



export default Myapi3;