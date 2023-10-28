import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { Home } from '../page';

const Navbar = () => (
  <header className=''>
    <Router>
        <div className="">
          <nav>
            <ul className='flex justify-between'>
              <li>Support</li>
              <div className="flex gap-[32px]">
                <li>Support</li>
                <li>About us</li>
                <li>Sign up</li>
              </div>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between gap-[32px]">
          <Link to="/">Kwando</Link>
          <nav>
            <ul>
              <li>
                <Link to="/about">О нас</Link>
              </li>
            </ul>
          </nav>
        </div>

         <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
         </Routes>
     </Router>
  </header>

)

export default Navbar