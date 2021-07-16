import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const {pathname} =useLocation()
const NavLink = ({ currentPage, handlePageChange, page }) => {
  const to =`${process.env.PUBLIC_URL}/`  + (page === 'Home' ? '' : page.toLowerCase());
  const onClick = () =>{ 
    handlePageChange(to);
  }
  console.log('CURR', currentPage)
  console.log('PATH', pathname)
    const className = currentPage === pathname ? 'nav-link active' : 'nav-link';
  const data = { onClick, to, className };

  return (
    <li className="nav-item">
      <a {...data}>{page}</a>
    </li>
  );
};

const NavLinks = ({ currentPage, handlePageChange, pages }) => {
  return pages.map(page => {
    const data = { page, currentPage, handlePageChange }; 
    return <NavLink key={page} {...data} />;
  }); 
};


export default NavLinks;