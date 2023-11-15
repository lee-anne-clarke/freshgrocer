'use client'

import React, { useState, useEffect } from 'react'
import HomeBox from './components/HomeBox'

//images
import grapefruit1 from '../img/home/grapefruit1.jpg'
import pumpkins2 from '../img/home/pumpkins2.jpg'
import personholdingsb2 from '../img/home/personholdingsb2.jpg'
import cuttingboard from '../img/home/cuttingboard.jpg'


export default function Homepage() {

  const [activeBox1, setActiveBox1] = useState(false);
  const [activeBox2, setActiveBox2] = useState(false);
  const [activeBox3, setActiveBox3] = useState(false);
  const [activeBox4, setActiveBox4] = useState(false);

  useEffect(() => {
    setActiveBox1(true);

    const scrollStuff = () => {
      if (window.scrollY > 50) setActiveBox2(true);
      if (window.scrollY > 700) setActiveBox3(true);
      if (window.scrollY > 1300) setActiveBox4(true);
    }

    window.addEventListener('scroll', scrollStuff)

    return () => {
      window.removeEventListener("scroll", scrollStuff);
    };
    
  });


  return (
    <main className="homepage" id="page-wrap">

      <HomeBox 
        classesList={activeBox1 ? 'homebox__inner active' : 'homebox__inner'}
        bgImage={grapefruit1} 
        headline="Welcome to The Fresh Grocer"
        subheadline="Your friendly neighborhood grocery store"
        btnUrl="/find-stores/"
        btnText="Find a store near you"
        imgPriority={true}
      />
      
      <HomeBox 
        classesList={activeBox2 ? 'homebox__inner active' : 'homebox__inner'}
        bgImage={pumpkins2}
        headline="Get ready for Fall"
        subheadline="Find the best ingredients for your holiday meals"
        btnUrl="/on-sale/"
        btnText="Check out the latest deals"
      />

      <HomeBox 
        classesList={activeBox3 ? 'homebox__inner active' : 'homebox__inner'}
        bgImage={personholdingsb2} 
        headline="The freshest ingredients"
        subheadline="All of our products are of the highest quality"
        btnUrl="/about/"
        btnText="Read about our history"
      />

      <HomeBox 
        classesList={activeBox4 ? 'homebox__inner active' : 'homebox__inner'}
        bgImage={cuttingboard}
        headline="Recipe ideas"
        subheadline="Get expert cooking advice from the best chefs in the tri-state area"
        btnUrl="/recipes/"
        btnText="Find a great recipe"
      />

    </main>
  );
}




