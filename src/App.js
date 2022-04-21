import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {
  //categories for the top of the Nav bar
  const [categories] = useState([
    {
      name: "About Us",
      description: "Meet the crew you will be working with"
    },
    {
      name: "Testimonials",
      description: "Read some of our client stories"
    },
    {
      name: "Contact Us",
      description: "Reeach out to us for an inquiry"
    },
    {

    }
  ]);

  const renderPage = () => {
    console.log(currentCategory.name)
    if (currentCategory.name === 'About Us') {
      return <About currentCategory={currentCategory} />;
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
