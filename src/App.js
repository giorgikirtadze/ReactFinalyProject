// import './App.css';
// import Header from './Component/Header/Header';
// import Home from './Component/Home/Home';
// import {Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Route exact path='/' Component={Home}/>
//         <Route exact path='/header' Component={Header}/>
//       </Switch>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Header from './Component/Header/Header';
// import Home from './Component/Home/Home';
// import { Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Route exact path='/' component={Home} />
//         <Route exact path='/header' component={Header} />
//       </Switch>
//     </div>
//   );
// }
// export default App;




import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { Routes, Route } from 'react-router-dom';
import SpecificProduct from './Component/SpecificProduct/Specificproduct';
import Cart from './Component/Cart/Cart';
import AboutMe from './Component/Aboutme/AboutMe';
import Contact from './Component/Contactus/Contact';


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<Cart />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path='/SpecificProduct/:id' element={<SpecificProduct />}/>
        </Routes>
    </div>
  );
}

export default App;

