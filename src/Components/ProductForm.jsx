import { useState } from "react"
import ProductList from "./ProductList"
function ProductForm({ onAdd }) {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState("Còn hàng")
    const [error,setError]=useState({})

    function handleAdd() {
        const newError={}
        if(name.trim()==="")
            newError.name="Vui long khong dc de trong"
        if(category.trim()==="")
            newError.category="Vui long chon danh muc"
        if(price.trim()==="")
            newError.price="Vui long khong dc de trong"
        setError(newError)
        if(Object.keys(newError).length>0)
            return

        const newProduct = {
            id: Date.now(), 
            productName: name,
            category: category,
            price: +price, 
            status: status
        }
        
        onAdd(newProduct); 
        setName("");
        setCategory("");
        setPrice("");
        setStatus("Còn hàng");
    }

    return (
       <>
        <section className="d-flex flex-column gap-15 flex-1">
            <div className="d-flex flex-column">
                <p className="text-title">Thêm sản phẩm mới</p>
                <p className="text-des">Nhập đầy đủ thông tin nha</p>
            </div>
            
            <div className="d-flex flex-column gap-10">
                <p className="label">Tên sản phẩm</p>
                <input 
                    type="text" 
                    placeholder="Nhập tên sản phẩm" 
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {error.name && <p class="text-error">{error.name}</p>}
            </div>
            
            <div className="d-flex flex-column gap-10">
                <p className="label">Danh mục</p>
                <select 
                    className="input" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">--Chọn danh mục--</option>
                    <option value="Máy tính bảng">Máy tính bảng</option>
                    <option value="Điện thoại">Điện thoại</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Phụ kiện">Phụ kiện</option>
                </select>
                {error.category && <p class="text-error">{error.category}</p>}
            </div>
            
            <div className="d-flex flex-column gap-10">
                <p className="label">Giá</p>
                <input 
                    type="number" 
                    placeholder="Nhập giá sản phẩm" 
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                {error.price && <p class="text-error">{error.price}</p>}
            </div>
            
            <div className="d-flex flex-column gap-10">
                <p className="label">Trạng thái</p>
                <select 
                    className="input"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Còn hàng">Còn hàng</option>
                    <option value="Hết hàng">Hết hàng</option>
                </select>
            </div>
            
            <div className="d-flex gap-10">
                <div>
                    <button className="bg-primary color-light btn" onClick={handleAdd}>
                        Thêm sản phẩm
                    </button>
                </div>
                <div>
                    <button 
                        className="bg-light btn" 
                        onClick={() => { setName(""); setCategory(""); setPrice(""); setStatus("Còn hàng");setError({}) }}
                    >
                        Làm mới form
                    </button>
                </div>
            </div>
        </section>
       </>
    )
}

export default ProductForm;