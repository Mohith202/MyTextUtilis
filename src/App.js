import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, MyStyle] = useState("light")
  const modeChange = () => {
    if (mode === "light") {
      MyStyle("dark")
      document.body.style.backgroundColor = "black";
      showAlert("success", "Changed to dark Mode")
    }
    else {
      MyStyle("light")
      document.body.style.backgroundColor = "white";
      showAlert("Success", "Normal mode");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const style1 = {
    backgroundColor: "black",
  }
  const style2 = {
    backgroundColor: "white"
  }


  return (
 
      <div style={mode === "dark" ? style1 : style2} >
        <Alert alert={alert} ></Alert>
     <BrowserRouter>
        <Navbar mode={mode} modeChange={modeChange} />
        <TextForm heading=" ENTER THE TEXT " mode={mode}/>
     
      </div>
  );
}

export default App;
