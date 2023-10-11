import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Mybasic from './basic';


function App() {
  return (
    <HashRouter>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <h1 className="text-center text-danger"> Assignment React Redux</h1>
          </div>
          <div className='col-lg-12 text-center mt-4'>
            <div className='btn-group text-center '>
            <Link className="btn btn-primary" to ="/basic"> Basic </Link>
              <Link className="btn btn-primary" to ="/contact"> Contact </Link>
              <Link className="btn btn-primary"to ="/experience"> Experice </Link>
              <Link className="btn btn-primary" to ="/"> View All </Link>

            </div>
          </div>
        </div>
      </div>
      <Routes>
          <Route exact path="/basic" element={ <Mybasic/> }/>

          </Routes>
    </HashRouter>
  );
}

export default App;
