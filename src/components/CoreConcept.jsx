import './CoreConcept.css'

export default function CoreConcept(props) {
	return (
		<li>
			<img src={props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			
			{/* // MUCH LESS CODE //without parameter
			{/* function CoreConcept({image,title,description}) */}
			{/* <img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p> * */}
		</li>
	);
}