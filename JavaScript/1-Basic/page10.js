console.log("Nested is example... if inside is is called nested if");

let input="Bangalore";

/*isNaN()- is not a number
for string return true,
for number return false,
it use to check alpha or numeric
*/

if(isNaN (input))
 console.log("The -",input,"- is string Data Type.....");
 else{
 console.log("The -",input,"- is Number Data Type.....");
if(input %2 ==0)
    console.log(input, "- is even number");
    else
    console.log(input, "- is odd number");

}


/*one more example to chech the string even or odd*/
if (isNaN(input))
{
    console.log("The -",input,"- is string Data Type.....");
    if(input.length>5)
    console.log("The-",input,"Length is",input.length,"that is bigger than 5 chars");
    else
    console.log("The-",input,"Length is",input.length,"that is smaller than 5 chars");

}
else{
    console.log("The -",input,"- is Number Data Type.....");
   if(input%2==0)
       console.log(input, "- is even number");
       else
       console.log(input, "- is odd number");
   
   }
   
