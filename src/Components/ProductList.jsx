import ProductItem from "./ProductItem"
function ProductList({productList})
{
    return(
        <>
          <section className="d-flex flex-column gap-15 flex-1">
            <div className="d-flex flex-column">
                <p className="text-title ">Danh sach cac san pham</p>
                <p className="text-des ">Danh sach cac san pham hien thi tu he thong</p>
            </div>
            <table className="employee-table" >
                <thead>
                    <th>STT</th>
                    <th>Ten san pham</th>
                    <th>Danh muc</th>
                    <th>Gia</th>
                    <th>Trang thai</th>
                </thead>
                <tbody>
                    {
                        productList.map((product,index)=>
                        <ProductItem 
                        key={product.id}
                        product={product}
                        stt={index+1}
                        />
                        )
                    }
                </tbody>
            </table>
        </section>
        </>
    )
}
export default ProductList