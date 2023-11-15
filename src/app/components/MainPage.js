import Image from 'next/image';


export default function MainPage(props) {
  return (
  	<main className="innerpage" id="page-wrap">
			<div className="innerpage__header">
				<Image 
					className="innerpage__largeImg" 
					src={props.headerImg} 
					alt="" 
					priority={true} 
				/>

				<div className="innerpage__title">
					<h1>{props.title}</h1>
				</div>
			</div>

			{props.children}
			
		</main>
  );
  
}

