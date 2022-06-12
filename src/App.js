import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  //categories to appear in the Navbar at the top
  const [categories] = useState([
    {
      name: "About Us",
      description: "Meet the crew you will be working with"
    },
    {
      name: "Services",
      description: "Here's a summary of our services"
    },
    {
      name: "Resources",
      description: "Our catalog of our resources to help you get started with your career transition"
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
    if (currentCategory.name === 'About Us') {
      return <About currentCategory={currentCategory} />;
    }
    if (currentCategory.name === 'Services') {
      return <Services currentCategory={currentCategory} />;
    }
    if (currentCategory.name === 'Resrouces') {
      return <Resources currentCategory={currentCategory} />;
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
