"use client";
// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          CnatorAcademia
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isOpen ? styles.bar1 : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar2 : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar3 : ''}`}></div>
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Departments">Departments</Link></li>
          <li><Link href="/About">About Us</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          <li><Link href="/WorkWithUs">Work With Us</Link></li>
          <li><Link href="/Services">Our Services</Link></li>
          <li><Link href="/Hire">Hire a Writer</Link></li>
          <li><Link href="/Payment">Payment</Link></li>
          <li><Link href="/Faq">FAQ</Link></li>
          <li><Link href="/Order" className={styles.orderNow}>Order Now</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
