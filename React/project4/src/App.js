import { HashRouter, Routes ,Route,Link } from "react-router-dom";

import Mycompany from "./basic.js/company";
import Mycity from "./basic.js/city";
import Mycustomer from "./basic.js/customer";
import Myemployee from "./basic.js/employee";
import Myproduct from "./basic.js/item";

function App() {
  return (
    
    <HashRouter>

      <ul id="topnav">
      <li> <Link to="/company-list" className="toplink"> Company </Link> </li>
      <li> <Link to="/city-list" className="toplink"> City </Link> </li>
      <li> <Link to="/cutomer-list" className="toplink"> Customer </Link> </li>
      <li> <Link to="/employee-list" className="toplink"> Employee </Link> </li>
      <li> <Link to="/product-list" className="toplink"> Product </Link> </li>
      </ul>
   
   <Routes>
   <Route exact path="/company-list" element={ <Mycompany/> }/>
   <Route exact path="/city-list" element={ <Mycity/> }/>
   <Route exact path="/customer-list" element={ <Mycustomer/> }/>
   <Route exact path="/employee-list" element={ <Myemployee/> }/>
   <Route exact path="/product-list" element={ <Myproduct/> }/>

   </Routes>
   
   
   
    </HashRouter>
  );
}

export default App;
