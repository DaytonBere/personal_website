import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Dayton Berezoski</h2>
        <p><a href="mailto:daytonbere@gmail.com">daytonbere@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <p>
        Howdy, I&apos;m Dayton. I like building projects, such as this one!
      </p>
      <p>
        I am currently working to prepare myself for the tech industry as a software engineer.
        &nbsp;If you like what you see here, please feel free to <a href="../pages/Contact">contact me</a>!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
