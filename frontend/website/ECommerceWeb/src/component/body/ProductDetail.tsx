import './styles.css';
const ProductDetail = () => {
    return (
        <div className='bodyStyle mt-3'>
            <div className="container">
                <div className='row'>
                    <div className='backgroundImg'>
                        <div className='textStyleTitle'>
                            <p>Thông tin chi tiết sản phẩm</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <h3>Hình ảnh sản phẩm</h3>
                </div>
                <div className='row mt-3'>
                    <div className='col col-6'>
                        <div className='bigImg'>
                            note: hình ảnh hiển thị to nhất
                        </div>
                    </div>
                    <div className='col'>
                        <h4>Laptop Dell Inspiron 15 N3530 i5 1335U/16GB/512GB/15.6"FHD/NVIDIA MX550 2GB/Win11/Office HS21</h4>
                        <p> <span style={{fontWeight:'bold'}}>Số lượng: </span>10</p>
                        <p> <span style={{fontWeight:'bold'}}>Đơn giá: </span>20490000 VNĐ</p>
                        <hr />
                        <h4>Thông tin về sản phẩm</h4>
                        <p>Thông tin sản phẩm</p>
                    </div>
                </div>
                
                <div className='row mt-3'>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>các hình nhỏ phía dưới</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>các hình nhỏ phía dưới</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>các hình nhỏ phía dưới</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>các hình nhỏ phía dưới</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>các hình nhỏ phía dưới</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>các hình nhỏ phía dưới</p>
                        </div>
                    </div>
                </div>
                <div style={{ margin: '30px 0 30px 0' }}>
                        <button className="btn btn-primary" style={{ marginRight: '20px' }}>
                            Thêm vào giỏ hàng
                        </button>
                        <button className="btn btn-light" style={{ border: '0.5px solid gray' }}>
                            <span>Quay về</span>
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default ProductDetail;