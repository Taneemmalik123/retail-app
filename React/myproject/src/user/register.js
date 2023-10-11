
const Myregister = () =>{
    return(
        <div className="container mt-4">
<div className="row">
    <div className="col-lg-4"></div>
    <div className="col-lg-4">
        <div className="border rounded p-4">
            <h3><i className="fa fa-user-plus"></i>
            Create New Account</h3>
            <div className="mb-3">
                <label> Seller Name</label>
                <input type="text"className="form-control"/>
           </div>
           <div className="mb-3">
           <label> e-Mail Id</label>
                <input type="e-mail"className="form-control"/>
           </div>
           <div className="mb-3">
           <label> password</label>
                <input type="password"className="form-control"/>
           </div>
           <div className="text-center">
           <button className="btn btn-primary"> Create Account </button>
           </div>
        </div>
    </div>
    <div className="col-lg-4"></div>

</div>
        </div>
    )
}

export default Myregister;