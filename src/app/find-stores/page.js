'use client'

import React, { useEffect } from 'react'
import MainPage from '../components/MainPage'
import FindStoresList from './FindStoresList'

import findStoresHeader from '../../img/storefront.jpg'


export default function FindStores() {
	
  useEffect(() => {
  	document.title = "Find A Store | The Fresh Grocer"
  }, [])


  return (
		<MainPage
			title="Find A Store" 
			headerImg={findStoresHeader}>

			<section className="container">
				<h2>
					Come visit us at one of the following locations:
				</h2>

				<FindStoresList />
			</section>
				
		</MainPage>
  );
  
}




