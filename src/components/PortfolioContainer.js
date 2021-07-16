import React, { useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
//import { hashToIndex } from './utils';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';

const PortfolioContainer = () => {
  useEffect(() => {setCurrentPage(hashToIndex(pageData))}, []);
  
  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  const Page = pageData[currentPage];
  return (
 
    <BrowserRouter>
      <NavTabs {...data} />
      <Route path="/"exact component={Home} />
      <Route path="/about"exact component={About} />
      <Route path="/blog"exact component={Blog} />
      <Route path="/contact"exact component={Contact} />
     
      </BrowserRouter>
   
  );
}

export default PortfolioContainer;
