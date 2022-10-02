import logo from './logo.png';
import './App.css';
import LoginPage from "./MyComponents/LoginPage";

function App() {
  return (
   <>
   
    <div>
      <img src={logo}></img>
      <LoginPage/>
    </div>
   </>
  );
}

export default App;
