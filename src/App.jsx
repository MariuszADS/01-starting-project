import componentsImg from './assets/components.png';
import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton.jsx';



function App() {
	return (
		<div>
			<Header />

			<main>
				<section id='core-concepts'>
					<h2>Core concepts</h2>
					<ul>
						<CoreConcept
							title='Components'
							description='The core UI builgind blocks.'
							image={componentsImg}
						/>
						<CoreConcept
							title={CORE_CONCEPTS[1].title}
							description={CORE_CONCEPTS[1].description}
							image={CORE_CONCEPTS[1].image}
						/>

						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id='examples'></section>
				<h2>Examples</h2>
				<menu>
					<TabButton></TabButton>
				</menu>
			</main>
		</div>
	);
}

export default App;
