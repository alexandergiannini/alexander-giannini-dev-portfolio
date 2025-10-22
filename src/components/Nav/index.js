import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    currentPage,
    setCurrentPage,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/alexander-giannini-dev-portfolio">
        <span role="img" aria-label="camera" onClick={() => setCurrentPage('Home')}></span> Alex Giannini
        </a>
         
        
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
          <span className="nav-links" onClick={() => setCurrentPage('About')}>About Me</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span className="nav-links" onClick={() => setCurrentPage('Contact')}>Contact</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span className="nav-links" onClick={() => setCurrentPage('Resume')}>Resume</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span className="nav-links" onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Nav;