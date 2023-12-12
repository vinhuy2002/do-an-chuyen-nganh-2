const UpdateProduct = ({ Action }: { Action: (value: string) => void }) => {

    return (
        <div>
            <h4 className="text-center">Cập nhật sản phẩm</h4>
            <div style={{ margin: 'auto', width: '65%' }}>
                <form>
                    <div className="row">
                        <div className="col-3">
                            <label htmlFor="category">Danh mục</label>
                        </div>
                        <div className="col">
                            <select className="form-select">
                                <option>Lựa chọn danh mục sản phẩm phù hợp</option>
                                <option value="1" selected>Đèn</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="category">Tên sản phẩm</label>
                        </div>
                        <div className="col">
                            <input type="text" name="productName"
                                placeholder="Nhập tên sản phẩm" className="form-control" 
                                value={'Đèn thông minh Sonic'} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="category">Mô tả sản phẩm</label>
                        </div>
                        <div className="col">
                            <textarea className="form-control" placeholder="Mô tả sản phẩm"
                                id="floatingTextarea" name="description">Đèn thông minh</textarea>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="category">Giá sản phẩm</label>
                        </div>
                        <div className="col">
                            <input type="text" name="price"
                                placeholder="Nhập giá sản phẩm" className="form-control"
                                value={'3'} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="category">Hình ảnh sản phẩm</label>
                        </div>
                        <div className="col">
                            <input className="form-control" type="file" 
                            id="formFile" name="image"/>
                        </div>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <button className="btn btn-primary" type="submit" style={{ marginRight: '20px' }}>
                            Cập nhật
                        </button>
                        <button className="btn btn-light" style={{ border: '0.5px solid gray' }}
                            onClick={() => Action('')}>
                            <span>Quay về</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdateProduct;