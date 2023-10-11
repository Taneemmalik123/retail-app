
let item = ["Mouse" ,
 "Keyboard" ,
"Laptop" ,
"Printer" ,
"Scanner" ,
"Paper" ,
"Ink" ,
"Keyboard" ,
"Pen"
] ;

console.log(item.indexOf("Scanner"));
//console.log(item.indexOf("Apple"));

for(let i=0; i<item.length; i++)
{
    console.log(i ,     item[i]);
}

console.log("-------Using While Loop----");

let i=0;
while( i<item.length ){
    console.log(i, item[i]);
    i++;
}

let item2 = ["Mouse" ,
 "Keyboard" ,
"Laptop" ,
"Printer" ,
"Scanner" ,
"Paper" ,
"Ink" ,
"Keyboard" ,
"Pen"
] ;

console.log("\n----Using Map()----\n")
/*
arrayName.map((value, index)=>{
    console.log(value);
})

*/

item.map((itemname, position )=>{
    console.log( position , itemname  );
})


console.log("\n----Using forEach()----\n")

item.forEach((itemname, position )=>{
    console.log( position , itemname  );
})
