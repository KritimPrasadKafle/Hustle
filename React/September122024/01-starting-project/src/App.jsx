import { useState } from 'react';

import componentsImg from './assets/components.png';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';

import CoreConcept from './components/CoreConcept.jsx';

import TabButton from './components/TabButton.jsx';



function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    // selectedButton => 'components, 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);



    console.log(tabContent);


  }

  return (
    <div>
      <Header />

      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />

            {/* <CORE_CONCEPTS {...CORE_CONCEPTS[1]} />
            <CORE_CONCEPTS {...CORE_CONCEPTS[2]} />
            <CORE_CONCEPTS {...CORE_CONCEPTS[3]} /> */}

            <CoreConcept title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image} />
            <CoreConcept title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image} />
            <CoreConcept title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image} />

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>

            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;