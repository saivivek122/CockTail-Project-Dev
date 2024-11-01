// import './App.css';
// import AllRoutes from './components/AllRoutes';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';
// import { useEffect } from 'react';

// function App() {
//   useEffect(() => {
//     console.log("run")
//     window.scrollTo(0,0)
   
//   }, [])
//   return (
//     <div>

//       <NavBar />

//       {/* <SearchContent/> */}

//       <AllRoutes />
//       <Footer />



//     </div>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import NewsSettler from '../src/pages/NewsSettler'
import SinglePage from '../src/pages/SinglePage'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './pages/Cart';


function App() {
  useEffect(() => {
    console.log("run");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>


      <NavBar />
      
      {/* Define your routes directly here */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/newssettler' element={<NewsSettler />} />
        <Route path='/single/:id' element={<SinglePage />} />
        <Route path='/:id/:id' element={<Cart/>}></Route>
      </Routes>
    
    
    </div>
  );
}

export default App;
