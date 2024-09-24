import ProductItem from "./components/product-item";



// App -> product list -> product item -> button component -> some other component


function ProductList({ name, city, dummyProductData }) {


  return (
    <div>
      <h3>Ecommerce Project</h3>
      {/* <ProductItem /> */}
      <h4>Name is {name}, he/she is belongs to this city {city}</h4>

      <ul>
        {
          dummyProductData.map((item, index) => {
            <li key={index}>{item}</li>
          })
        }
      </ul>


    </div>
  );
}

export default ProductList;