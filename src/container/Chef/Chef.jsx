import React from 'react';

import { SubHeading } from '../../components';
import{ images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='Words from the Chef'/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
    
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>Slow down and enjoy yourself.</p>
        </div>
        <p className='p__opensans'>"Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.” — Lao-Tze</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Head Chef</p>
        <img src={images.sign} alt='sign'/>
      </div>
    
    </div>
  </div>
);

export default Chef;
