
function Mycity(){
let allcity=['Pune','Bangalore','Chennai','Gujrat','Hyderabad','Pondicherry']
    return(
        <div className="container">
         <h1> Display City : {allcity.length}</h1>
         
         {
            allcity.map((city,index)=>{
                return(
                   <div className="four" key={index}>
                   <p> {city} </p>
                   
                    </div>
                )
            })
         }
         </div>
    )
}

export default Mycity;