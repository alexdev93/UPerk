'use client'
import React, { useState } from 'react'
import Navebar from '../header/Navebar';
import { Heading } from '../common/Heading';

const CaseStudies = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


  return (
    <div>
      <Navebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Heading level={2} className="text-center mt-14">
        case-study page
      </Heading>
      
    </div>
  );
}

export default CaseStudies