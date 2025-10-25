// import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

// function Nav(props) {
//   const {
//     categories = [],
//     currentPage,
//     setCurrentPage,
//     contactSelected,
//     setContactSelected
//   } = props;

//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentPage);
//   }, [currentPage]);

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a href="/alexander-giannini-dev-portfolio">
//         <span role="img" aria-label="camera" onClick={() => setCurrentPage('Home')}></span> Alex Giannini
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//           <span className="nav-links" onClick={() => setCurrentPage('About')}>About Me</span>
//           </li>
//           <li className={`mx-2 ${contactSelected && 'navActive'}`}>
//             <span className="nav-links" onClick={() => setCurrentPage('Contact')}>Contact</span>
//           </li>
//           <li className={`mx-2 ${contactSelected && 'navActive'}`}>
//           <span className="nav-links" onClick={() => setCurrentPage('Resume')}>Resume</span>
//           </li>
//           <li className={`mx-2 ${contactSelected && 'navActive'}`}>
//           <span className="nav-links" onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
//           </li>
          
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;

import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    currentPage,
    setCurrentPage,
  } = props;

  const [open, setOpen] = React.useState(false);
  const btnRef = React.useRef(null);

    useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  // Close on Esc and lock body scroll
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header flex-row px-1">
      <h2 className="brand">
        <a href="/alexander-giannini-dev-portfolio" onClick={() => setCurrentPage('Home')}>
          Alex Giannini
        </a>
      </h2>

      {/* Desktop nav (hidden on mobile via CSS) */}
      <nav className="nav-desktop">
        <ul className="flex-row">
          <li className={`mx-2 ${currentPage==='About' ? 'navActive' : ''}`}>
            <span className="nav-links" onClick={() => setCurrentPage('About')}>About Me</span>
          </li>
          <li className={`mx-2 ${currentPage==='Contact' ? 'navActive' : ''}`}>
            <span className="nav-links" onClick={() => setCurrentPage('Contact')}>Contact</span>
          </li>
          <li className={`mx-2 ${currentPage==='Resume' ? 'navActive' : ''}`}>
            <span className="nav-links" onClick={() => setCurrentPage('Resume')}>Resume</span>
          </li>
          <li className={`mx-2 ${currentPage==='Portfolio' ? 'navActive' : ''}`}>
            <span className="nav-links" onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
          </li>
        </ul>
      </nav>

      {/* Hamburger (shown on mobile via CSS) */}
      <button
        ref={btnRef}
        className="nav-toggle"
        aria-label="Open menu"
        aria-controls="mobile-drawer"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Overlay */}
      <div className={`nav-overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        className={`nav-drawer ${open ? 'open' : ''}`}
      >
        <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        <nav>
          <ul className="drawer-list">
            {['About','Contact','Resume','Portfolio'].map((p) => (
              <li key={p}>
                <button
                  className={`drawer-link ${currentPage===p ? 'navActive' : ''}`}
                  onClick={() => { setCurrentPage(p); setOpen(false); }}
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export default Nav;
