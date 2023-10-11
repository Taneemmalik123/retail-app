console.log("Nested Array on Object");

let userlist=[
    {city:"Bangalore" , account:['ganesh','saurav']},
    {city:"Mumbai" , account:['Alex','suresh' , 'Hala']},
    {city:"Chennai" , account:['samshu']},
    {city:"Bangalore" , account:['harsh','shandar']},

];

console.log("Total User : ", userlist.length);

userlist.map((user,index)=>{
    console.log(index , "#" ,user.city , user.account.length);

    for(let i=0; i<user.account.length;i++){
        console.log(user.account[i]);
    }
    console.log("-----------------------");
})