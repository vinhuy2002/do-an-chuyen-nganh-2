import './styles.css';
const Body = () => {
    return (
        <div className='bodyStyle mt-3'>
            <div className="container">
                <div className='row'>
                    <div className='backgroundImg'>
                        <div className='textStyleTitle'>
                            <p>Chào mừng đến với cửa hàng thiết bị điện tử</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <h3>Danh mục</h3>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>Máy tính</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>Điện thoại</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>Thiết bị âm thanh</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>Thiết bị chụp ảnh</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>Màn hình</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='catDisplay'>
                            <p>Thiết bị khác</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <h3>Sản phẩm</h3>
                </div>
                <div className='row mt-3 row-cols-6'>
                    <div className="col catDisplay ms-3 me-3 mb-3 ">Column</div>
                    <div className="col catDisplay ms-3 me-3 mb-3 ">Column</div>
                    <div className="col catDisplay ms-3 me-3 mb-3 ">Column</div>
                    <div className="col catDisplay ms-3 me-3 mb-3 ">Column</div>
                    <div className="col catDisplay ms-3 me-3 mb-3 ">Column</div>
                    <div className="col catDisplay ms-3 me-3 mb-3 ">Column</div>
                    <div className="col catDisplay ms-3 me-3 mb-3 ">Column</div>
                    <div className="col catDisplay ms-3 me-3 mb-3 ">Column</div>
                </div>
            </div>
        </div>
    )
}

export default Body;