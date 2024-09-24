
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'


const dummyProductData = ["Product 1", "Product 2", "product3"];


function App() {

  return (
    <div>
      <h1>React JS concept</h1>
      <ClassBasedComponent />
      <FunctionalComponent />
      <ProductList dummyProductData={dummyProductData} name="Sargam" city="ABC" />
    </div>

  )
}

export default App
