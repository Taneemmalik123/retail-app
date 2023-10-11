import UserModule from "./user/userapp";
import SellerModule from "./seller/sellerapp";

function App() {
  let login = false;
  localStorage.setItem("sellerid", 1);

  if(login)
    return ( <SellerModule/> )

  else 
    return ( <UserModule/> )

}

export default App;
