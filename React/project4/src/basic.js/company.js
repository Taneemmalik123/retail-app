
function Mycompany(){
    let allcompany=['apple','motorola','vivo','samsaung','oneplus','relaiance','jio'];

    return(
      <div className="container">
        <h1> Total company : {allcompany.length}</h1>
     {
     allcompany.map((company,index)=>{
         return(
            <p className="four" key={index}> {company} </p>
         )
     })
    }
     
     
      </div>
    )
}


export default Mycompany;