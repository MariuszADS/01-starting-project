export default function TabButton({children,onSelect}) {
	// document.querySelector('button').addEventListener('click',()=>{ })

		console.log('APP COMPONENT EXECUTING')

	return (
		<li>
			<button onClick={onSelect}>{children}</button>
		</li>
	);
}
