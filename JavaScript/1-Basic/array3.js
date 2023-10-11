
console.log("Array of Object ?");

let user = {fullname:"Ganesh" , mobile: 45748894, edu:"BE",year:2015};
console.log(user.fullname);
console.log(user.mobile);
console.log(user.edu);
console.log(user.year);

let userlist = [ 
{fullname:"Ganesh" , mobile: 45748894, edu:"BE",year:2015},
{fullname:"Alex" , mobile: 89748894, edu:"BE",year:2016},
{fullname:"Tasha" , mobile: 7890748894, edu:"BE",year:2017},
{fullname:"inni" , mobile: 898748894, edu:"BE",year:2018},
];

console.log("The Total Users : " , userlist.length);

for(let i=0; i<userlist.length; i++)
{
    console.log(userlist[i].fullname, userlist[i].mobile,userlist[i].edu, userlist[i].year);
    console.log("-------------------------")
}

console.log("\n Using Map() \n");
userlist.map((user,index)=>{
    console.log(user.fullname,user.mobile,user.edu,user.year);
    console.log("-----------------------------------------")
    });


    console.log("\n Using forEach() \n");
    userlist.forEach((user,index)=>{
        console.log(index ,user.fullname,user.mobile,user.edu,user.year);
        console.log("-----------------------------------------")
        });
    