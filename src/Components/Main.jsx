import ProductForm from "./ProductForm"
import ProductList from "./ProductList"
function Main({productList,onAdd})
{

    return(<>
        <main class=" container d-flex">
        <ProductForm onAdd={onAdd}/>
        <ProductList productList={productList}/>

        </main>
    </>)
}
export default Main