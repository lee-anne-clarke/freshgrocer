'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import MainPage from '../components/MainPage'
import onSaleData from './onSaleData'

import onSaleHeader from '../../img/onsale/fruitsveggies2.jpg'


export default function OnSale() {
	
  useEffect(() => {
  	document.title = "Items On Sale | The Fresh Grocer"
	}, [])

	const [data] = useState(onSaleData);


  return (
		<MainPage
			title="On Sale" 
			headerImg={onSaleHeader}>

      <section className="container">
      	<h2>Check out this week's featured items on sale:</h2>

        <div className="onsale-items u-clearfix">

	      	{data.map(({ imgSrc, imgAlt }) => (
					  <div className="onsale-item" key={uuidv4()}>
					    <div className="onsale-item-inner">
					      <Image className="onsale-item-img" src={imgSrc} alt={imgAlt} />
					      <div className="onsale-item-innertext">
					        <h3>Vestibulum laoreet gravida pretium</h3>
					        <p>Ut purus nulla, hendrerit eget blandit sit amet 
					          <span className="onsale-deal">
					          	<i className="fa fa-tags"></i> 20% off
					          </span>
									</p>
					      </div>
					    </div>
					  </div>
	      	))}
          
        </div>
      </section>
			
		</MainPage>
  );
  
}




