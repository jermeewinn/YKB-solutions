import React, { useState } from 'react';

import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  //categories to appear in the Navbar at the top
  const [categories] = useState([
    {
      name: "Who We Are",
      description: "Meet the crew you will be working with"
    },
    {
      name: "What We Do",
      description: "Here's a summary of our services"
    },
    {
      name: "Testimonials",
      description: "Read some of our client stories"
    },
    {
      name: "Contact Us",
      description: "Reeach out to us for an inquiry"
    },
   
  ]);

  const renderPage = () => {
    console.log(currentCategory.name)
    if (currentCategory.name === 'Who We Are') {
      return <About currentCategory={currentCategory} />;
    }
    if (currentCategory.name === 'What We Do') {
      return <Services currentCategory={currentCategory} />;
    }
    if (currentCategory.name === 'Testimonials') {
      return <Testimonials currentCategory={currentCategory} />;
    }
    if (currentCategory.name === 'Contact Us') {
      return <Contact currentCategory={currentCategory} />;
    }
  };

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
