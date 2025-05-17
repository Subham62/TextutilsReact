// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Dashboard from './components/Dashboard';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
const [mode,setMode] = useState('light');
const [alert,setAlert]= useState(null);

const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 1500)
}
const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#17193e';
    document.body.style.color = 'white';
    showAlert("Dark mode has been enabled","Success")
    // document.title = 'TextUtil - Dark Mode';
    //  This type of concept do not use --> b/c user do not like this
    // setInterval(()=>{
    //   document.title = 'TextUtils is amazing mode';
    // },2000)
    // setInterval(()=>{
    //   document.title = 'Install TextUtils Now';
    // },1500)
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = '#17193e';
    showAlert("Light mode has been enabled","Success")
    // document.title = 'TextUtil - Light Mode';
  }
}
  return (
    <>
    <Router>
    <Navbar dashboard="Dashboard" team="Functionality" mode={mode} toggleMode={toggleMode} />
    {/* <Navbar /> */}
    <Alert alert={alert}/>
    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    <div className='container my-3'>
    <Routes>
          <Route path="/about" element = {<About mode={mode} />}/>
          <Route path="/dashboard" element = {<Dashboard />}/>
            
          
          
          <Route path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze:"/>}/>
            
          
      </Routes>
    
      {/* <About/> */}
    </div>
    </Router> 
    </> 
  );

  // return(
  //   <>
  //   <Navbar dashboard="DASHBOARD" team="Functionality" mode={mode} toggleMode={toggleMode}/>
  //   <Alert alert={alert}/>
  //   <TextForm showAlert={showAlert} heading="Enter the text to analyze:"/>
  //   </>
  // );
}

export default App;

