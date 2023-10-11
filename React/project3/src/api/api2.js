import { useState, useEffect } from 'react';
 
const Myapi2=()=>{

    let [userlist,updateuser]= useState([]);
    const getuser =()=>{
        fetch("http://localhost:1234/user")
        .then(response=>response.json())
        .then(userArray=>{
             updateuser(userArray);
        })
    }

    useEffect(()=>{
        getuser();
  },[1]);

  return(
    <section className='container'>
        <h1 align="center"> Available Api Users : (userlist.length)</h1>
        <tbody>
            <tr align="left" cellpadding="10"> 
                <td> Full Name</td>
                <td> <input type="text"/></td>
            </tr>
            <tr> 
                <td> Mobile No </td>
                <td> <input type='number'/></td>
            </tr>
            <tr>
                <td> Education </td>
                <td> <input type='text'/></td>
            </tr>
            <tr>
                <td> City </td>
                <td> <input type='text'/></td>
            </tr>
            <tr>
                <th colSpan="2">
                    <button> Save User</button>
                </th>
            </tr>

        </tbody>
        <table align="right" cellpadding="12">
            <thead>
                <tr>
                    <th> User Id</th>
                    <th> Full Name </th>
                    <th> Age </th>
                    <th> Education </th>
                    <th> City </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>

            <tbody>
                {
                    userlist.map((user,index)=>{
                        return(
                            <tr>
                            <td> {user.id }</td>
                            <td> {user.fullname }</td>
                            <td> {user.age }</td>
                            <td> {user.edu }</td>
                            <td> {user.city }</td>
                            <td> <button>Edit</button></td>
                            <td> <button> Delete</button></td>

                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    </section>
  )
}
export default Myapi2;