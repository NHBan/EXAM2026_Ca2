function ProductForm()
{
    return(<>
     <section action="" class="d-flex flex-column gap-15 flex-1">
            <div className="d-flex flex-column">
                <p className="text-title ">Them san pham moi</p>
                <p className="text-des ">Nhap day du thong tin nha</p>
            </div>
            <div className="d-flex flex-column gap-10">
                <p className="label">Ten san pham</p>
                <input type="text" placeholder="Nhap ten san pham" className="input"/>
            </div>
            <div className="d-flex flex-column gap-10">
                <p className="label">Danh muc</p>
                <select value="" className="input">
                    <option value="May tinh bang" checked>--Chon danh muc--</option>
                    <option value="May tinh bang">May tinh bang</option>
                    <option value="May tinh bang">Dien thoai</option>
                </select>
            </div>
            <div className="d-flex flex-column gap-10">
                <p className="label">Gia</p>
                <input type="number" placeholder="Nhap ten san pham" className="input"/>
            </div>
            <div className="d-flex flex-column gap-10">
                <p className="label">Trang thai</p>
                <select value="" className="input">
                    <option value="May tinh bang">Het hang</option>
                    <option value="May tinh bang">Con hang</option>
                </select>
            </div>
            <div className="d-flex">
                <div><button className="bg-primary color-light btn">Them san pham</button></div>
                <div><button className=" bg-light btn">Lam moi form</button></div>
            </div>
        </section>
    </>)
}
export default ProductForm