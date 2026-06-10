import ProductForm from "./ProductForm"
import ProductList from "./ProductList"
function Main({productList})
{

    return(<>
        <main class=" container d-flex">
        <ProductForm/>
        <ProductList productList={productList}/>

        </main>
    </>)
}
export default Main