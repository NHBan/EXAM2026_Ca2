function ProductRow({ product, stt }) {
    return (<>
        <tr>
            <td>{stt}</td>
            <td>{product.productName}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>
                <span className={`badge color-light ${product.status === "Còn hàng" ? "status-con" : "status-het"}`}>
                    {product.status}
                </span>
            </td>
        </tr>
    </>)
}
export default ProductRow