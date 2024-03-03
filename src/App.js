import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Home from './components/Home'
import Resume from './components/Resume'


function App() {

  const [contactSelected, setContactSelected] = useState(false);


  const [categories] = useState([
    { 
      ///removed some nav items here, and also the grid images won't show up
     name: 'Portfolio', description: 'Please see below for a few of my projects' },
    { name: 'Resume', description: 'Please see below for resume.' },
    {name: 'About', description: ''},
    {name: 'Contact', description: ''},
    {name: 'Home', description: 'Hi there testing home'}
  ]);

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
      return <Home/>

      case 'About':
      return <About/>

      case 'Portfolio':
      return <Portfolio/>

      case 'Contact':
      return <ContactForm/>

      case 'Resume':
      return <Resume/>
    }

  };

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {renderPage()}
        </div>
      </main>
      <footer>
       <div className="content has-text-centered mt-5">
         <div className="columns mt-2 my-footer">
         <div className="column footer-link" ><a href="https://github.com/alexandergiannini" target="_blank"><i className="fab fa-github"></i> GitHub Profile</a></div>
         <div className="column footer-link" ><a href="https://www.linkedin.com/in/alexander-giannini-004345141/" target="_blank"><i class="fab fa-github"></i> Linkedin Profile</a></div>
         <div className="column footer-link" ><a href="https://stackoverflow.com/users/14683781/alexgiannini" target="_blank"><i class="fab fa-github"></i> Stack Overflow Profile</a></div>
         </div>

       </div>
      </footer>
    </div>
  
  );
}

export default App;
