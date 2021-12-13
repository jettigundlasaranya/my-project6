import logo from './logo.svg';
import './App.css';
// import { BrowserRouter,Route,Link,Switch} from 'react-router-dom';
// import Registerform from './Registerform';
// import Loginform from './Loginform';
// import Resetpassword from './Resetpassword';
// import { Percentage } from './Percentage';
// import { Search } from './Search';
import { Reactapi } from './Reactapi';


function App() {
  return (
    // <BrowserRouter>
    <div className="App"> 
    {/* <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div class="container">
            <a class="navbar-brand" href="#page-top"> WELCOME  </a>
            <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-0 mx-lg-1"><Link style={{ color: "red" }} class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Home</Link></li>
                <li class="nav-item mx-0 mx-lg-1"><Link style={{ color: "red" }} class="nav-link py-3 px-0 px-lg-3 rounded" to="/Registerform">Register</Link></li>
                <li class="nav-item mx-0 mx-lg-1"><Link style={{ color: "red" }} class="nav-link py-3 px-0 px-lg-3 rounded" to="/Loginform">LOGIN</Link></li> */}

                {/* <li class="nav-item mx-0 mx-lg-1"><Link style={{ color: "red" }} class="nav-link py-3 px-0 px-lg-3 rounded" to="/Admin"> ADMIN </Link></li> */}
              {/* </ul>
            </div>
          </div>
        </nav>
        <Switch >
        <Route path="/Registerform" component = {Registerform} />
        <Route path= "/Loginform" component ={ Loginform }/>
        <Route path= "/Resetpassword" component = { Resetpassword }/> */}
        {/* <Route path="/Admin" component = { Admin } /> */}
        {/* <Route path="/dashboard" component = { Dashboard } /> */}
        {/* <Route path="/admincomp" component = { AdminComp } /> */}
        {/* </Switch> */}
     {/* <Percentage/> */}
     {/* <Search/> */}
     <Reactapi/>
    </div>
    // </BrowserRouter>
  );
}

export default App;
