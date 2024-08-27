import { useState } from 'react';
import componentsImg from './assets/components.png';
import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data';
// import handleClick from './handleClick.jsx';

function App() {
	const [selectedTopic, setSelectedTopic] = useState(null);

	function handleClick(selectedButton) {
		// selectedButton => "components",'jsx','props','state'
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
	}

	console.log('APP COMPONENT EXECUTING');

	return (
		<div>
			<Header />

			<main>
				<section id='core-concepts'>
					<h2>Core concepts</h2>
					<ul>
						{/* {CORE_CONCEPTS.map((itemConcept)=> <CoreConcept key ={itemConcept.title} {...itemConcept}/>)} */}

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
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === 'components'}onSelect={() => handleClick('components')}>Components</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => handleClick('jsx')}>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onSelect={() => handleClick('props')}>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onSelect={() => handleClick('state')}>
							State
						</TabButton>
					</menu>

					{!selectedTopic ? <p>Please select a topic.</p> : null}

					{selectedTopic ? (
						<div id='tab-content'>
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					) : null}
				</section>
			</main>
		</div>
	);
}

export default App;
