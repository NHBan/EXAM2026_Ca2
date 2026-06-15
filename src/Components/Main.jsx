import ProductForm from "./ProductForm"
import ProductTable from "./ProductTable"
function Main({productList,onAdd})
{

    return(<>
        <main class=" container d-flex">
        <ProductForm onAdd={onAdd}/>
        <ProductTable productList={productList}/>

        </main>
    </>)
}
export default Main