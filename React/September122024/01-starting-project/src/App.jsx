import Header from './components/Header/Header.jsx';

import CoreConcept from './components/CoreConcept.jsx';

import Examples from './components/Examples.jsx';

import CoreConcepts from './components/CoreConcepts.jsx'



function App() {

  return (

    <>
      <Header />

      <main>
        <CoreConcepts />
        <Examples />

      </main >
    </>

  );
}

export default App;





















{/* <CoreConcept title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />

            {/* <CORE_CONCEPTS {...CORE_CONCEPTS[1]} />
            <CORE_CONCEPTS {...CORE_CONCEPTS[2]} />
            <CORE_CONCEPTS {...CORE_CONCEPTS[3]} /> 

            <CoreConcept title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image} />
            <CoreConcept title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image} />
            <CoreConcept title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image} /> */}