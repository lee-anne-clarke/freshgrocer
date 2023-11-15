import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function HomeBox(props) {
  const pathname = usePathname();

	return (
    <section className="homebox">

      <Image className="homebox-img" src={props.bgImage} alt="" priority={props.imgPriority} />

      <div className={props.classesList}> 
        <div>
            <h1>{props.headline}</h1>
            <h2>{props.subheadline}</h2>
            <p>
            	<Link className="btn" href={props.btnUrl}>
            		{props.btnText}
            	</Link>
            </p>
        </div>
      </div>

    </section>
	);
}


