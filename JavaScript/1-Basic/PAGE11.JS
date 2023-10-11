
//SWITCH case Example
/*
the if use to check exact condition
the if use to check range condition
where
the switch use to check only exact condition but not the range condition 
*/

let input = "Mumbai";
switch(input){
    
    case "Pune":
    console.log("Display",input,"SErvice");
    break;//to stop executing of next line and exit

    case "Bangalore":
        console.log("Display",input,"SErvice");
        break;//to stop executing of next line and exit

        case "Mumbai":
        case "Delhi":
            console.log("Display",input,"SErvice");
            break;
                
    

    default:
        console.log("Sorry,The Service are not available in -" ,input);


}