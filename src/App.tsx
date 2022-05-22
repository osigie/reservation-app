import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "./pages/home/Home"
import {List} from "./pages/List/List"
import {Hotel} from "./pages/Hotel/Hotel"
// import {Navbar} from"./components/navbar/Navbar"

function App() {
  return (
   <BrowserRouter>
    {/* <Navbar/> */}
   <Routes> 
    
     <Route path="/" element={<Home/>}></Route>
     <Route path="/hotels" element={<List/>}></Route>
     <Route path="/hotels/:id" element={<Hotel/>}></Route>
     


   </Routes>
   </BrowserRouter> 
  );
}





export default App;


// import React from 'react'

// interface AppProps {

// }

// export const App: React.FC<AppProps> = ({}) => {
//     return ();
// }
