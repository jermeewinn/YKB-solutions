import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  //categories to appear in the Navbar at the top
  // const [categories] = useState([
  //   {
  //     name: "Home"
  //   },
  //   {
  //     name: "About Us",
  //     description: "Meet the crew you will be working with"
  //   },
  //   {
  //     name: "Services",
  //     description: "Here's a summary of our services"
  //   },
  //   {
  //     name: "Testimonials",
  //     description: "Read some of our client stories"
  //   },
  //   {
  //     name: "Contact Us",
  //     description: "Reeach out to us for an inquiry"
  //   },
   
  // ]);

  // const renderPage = () => {
  //   console.log(currentCategory.name)
  //   if (currentCategory.name === 'Home') {
  //     return <Home currentCategory={currentCategory} />;
  //   }
  //   if (currentCategory.name === 'About Us') {
  //     return <About currentCategory={currentCategory} />;
  //   }
  //   if (currentCategory.name === 'Services') {
  //     return <Services currentCategory={currentCategory} />;
  //   }
  //   if (currentCategory.name === 'Testimonials') {
  //     return <Testimonials currentCategory={currentCategory} />;
  //   }
  //   if (currentCategory.name === 'Contact Us') {
  //     return <Contact currentCategory={currentCategory} />;
  //   }
  // };

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    
    <div className="App">
      <Navigation />
      <Footer />  
    </div>
    
  );
};

export default App;
