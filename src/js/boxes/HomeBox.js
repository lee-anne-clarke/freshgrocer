import React from 'react'
import { NavLink } from 'react-router-dom'


function HomeBox(props) {
	const style = {
		backgroundImage: `url(${props.bgImage})`
	}

	return (
    <section className="homebox" style={style}>
      <div className="homebox__inner" ref={props.reference}> 
        <h1>{props.headline}</h1>
        <h2>{props.subheadline}</h2>
        <p>
        	<NavLink className="btn" to={`/${props.btnUrl}`} activeClassName="active">
        		{props.btnText}
        	</NavLink>
        </p>
      </div>
    </section>
	);
}


export default HomeBox