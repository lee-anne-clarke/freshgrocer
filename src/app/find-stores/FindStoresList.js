import React, { useEffect } from 'react'


export default function FindStoresList() {
	useEffect(() => {
  		for (let i = 1; i < 9; i++) {
  			let fsList = document.getElementById("fsList")
			let fsListItem = document.createElement("li")
			fsListItem.className = "findstores-li"
			fsListItem.innerHTML = `
				<b>The Fresh Grocer</b><br /><br />
				123 Avenue Lane<br />
				Philadelphia, Pennsylvania 19122<br /><br />
				Phone: (215) 555-5555<br /><br />
				<button class="btn">Driving Directions</button>
			`
			fsList.appendChild(fsListItem);
		}
	})
  
	return (
		<ul className="findstores-list u-clearfix" id="fsList">
		</ul>
	);
	
}



