import React from 'react'


function FGAddress(props) {
 return (
		<li className="findstores-li" key={props.keyNum}>
			<b>The Fresh Grocer #{props.storeNum}</b><br /><br />
			123 Avenue Lane<br />
			Philadelphia, Pennsylvania 19122<br /><br />
			Phone: (215) 555-5555<br /><br />
			<a className="btn" href="#">Driving Directions</a>
		</li>
 	)
}


export default FGAddress