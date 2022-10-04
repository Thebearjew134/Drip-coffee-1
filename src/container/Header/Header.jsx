import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Where coffee is art"/>
      <h1 className='app__header-h1'>Expresso Yourself</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>As roasters, we deeply respect farmers’ dedication to excellence and sustainability, and we strive to honor their hard work by carefully developing each harvest’s optimal flavors. As baristas, we are invested in brewing coffee that showcases nature’s genius and in sharing it meticulously and enthusiastically with you.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header_img'/>
    </div>
  </div>
);

export default Header;
