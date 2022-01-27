import Navbar from './Components/Navbar';
import './App.css';
import AppForm from './Components/AppForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';


function App() {
        const [mode, setMode] = useState('light');
        const [alert, setAlert] = useState(null);

        const showAlert = (message,type) =>{
            setAlert ({
              msg : message,
              type : type
            })
            setTimeout(() =>{
              setAlert(null);
            },1200)
        }

        const toggleMode = ()=>{
          if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#343434';
            showAlert("Dark mode has been enabled", "success");
          }
          else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
          }
  }
  return (
    <>
    <div>
        <Navbar title = "Text-Editor" nav1 = "Home"  mode={mode}  toggleMode={toggleMode}/>
        <Alert alert ={alert}/>
        <div className="container my-3">
                 <AppForm showAlert={showAlert} heading = "Enter the text " mode={mode} />
       </div>   
    </div>     
    </>
  );
  }

export default App;

