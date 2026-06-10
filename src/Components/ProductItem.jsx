function ProductItem({product,stt}) {
    return (<>
        <tr>
            <td>{stt}</td>
            <td>{product.productName}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td className={product.status==="Còn hàng"?"bg-green":"bg-high"}>{product.status}</td>
        </tr>
    </>)
}
export default ProductItem