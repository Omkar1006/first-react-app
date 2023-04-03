// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


// let name = 'Omkar'
function App() {

  const [mode, setMode] = useState('light');//checks if dark mode is enabled or not
  const [alert, setAlert] = useState(null)

const showAlert = (message,type) =>{

  setAlert({
    msg:message,
    type :type

  })

  setTimeout(() => {
    setAlert(null)
  }, 1000);
}

  const toggleMode = () =>{
    
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been Enabled",'success')
      document.title = 'Text Utils - Dark Mode'
    }
   else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled",'primary')
      document.title = 'Text Utils - Light Mode'
    }
  }
  return (
    <>
   

  <Navbar title = "TextUtils" aboutText = "About" mode={mode} toggleMode ={toggleMode}/>
  <div className="container my-3">

    <Alert alert = {alert}/>

<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>

  </div>

</>

);
}

export default App;
