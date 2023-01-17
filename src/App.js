import { createContext, Fragment } from "react";
import "./App.css";
// import Main from "./components/Main";
import Counter from "./Basic/Counter/Counter";
// import NavBar from "./PlayGame/NavBar";
import FunProp from "./Basic/Props/FunProp";
import Details from "./Basic/Student/Details";
import Student from "./Basic/Student/Student";
import { HOCBlue, Likes } from "./Basic/ColorPick/HBD";
import ToDo from "./Basic/To-do/ToDo";
import PureCompon from "./Basic/PureCom/PureCompon";
import NavBar from "./Basic/ExportI/NavBar";
import Main from "./Basic/ExportI/Main";
import Properties from "./Props/Properties";
import Ap from "./Basic/Counte/Ap";
import List from "./ListRender/List";
import Effect from "./Useeffect/Effect";
import MainList from "./ListRender/MainList";
import UseHookAkash from "./CustomCounter/UseHookAkash";
import DisplayError from "./ErrorHandling/DisplayError";
import Comp1 from "./Context/Comp1";
import { Route, Routes } from "react-router-dom";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Service from "./Routing/Service";
import Contact from "./Routing/Contact";
import Navbar from "./Routing/Navbar";
import { TicGame } from "./TIC_TAC/TicGame";
import { TicTacGame } from "./TIC_TAC_TOC/TicTacGame";
import Signup from './Loginpage/Signup'

const fname = createContext();
const lname = createContext();

function App() {
  // let fname='Joy';
  // let rl=123;
  // let nm ='Rakhi';
  // let id=45;
  // let arr = [{name:'Akash', id:11},{name:'gupta',id:14}];

  return (

    <div className="App">
      {/* {arr.map((e,i)=>(
       <div key={i+''}>
        <h2>{e.id}</h2>
        <h3>{e.node_id}</h3>
        <h4><img src={e.avatar_url} alt="empty"/></h4>
        <h5>{e.type}</h5>
        <br/>
       </div>
      ))}
    <button onClick={addFun}>Add</button> */}
      {/* <Effect/> */}
      {/* <Display/> */}
      {/* <MainList/> */}
      {/* <UsedCounterHook/> */}
      {/* <UseHookAkash/> */}
       <DisplayError />
      {/* <div>Akash</div>
      <div>Gupta</div> */} 
      {/* <fname.Provider value={"Akash"}>
      <lname.Provider value={"Gupta"}>
      <Comp1/>
      </lname.Provider>
      </fname.Provider> */}
      {/* <h1>Here we have to learn Routing</h1> */}
      {/* <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} >
         <Route path='add' element={<h1>This is my add Button</h1>}/>
         <Route path='minus' element={<h1>This is my Minus Button</h1>}/>
         <Route path='plus' element={<h1>This is my plus Button</h1>}/>
        </Route>
        <Route path ='/signup' element={<Signup/>}/>
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="*" element={<div> Error Occurs</div>}/> 
      </Routes>  */}
       {/* <h1>Here we have to learn about Tic toc toe</h1>
      <TicGame/>
       <h1>We have to used another approach</h1>
      <TicTacGame/>  */}
    </div>
  );
}

export default App;
export { fname, lname };
