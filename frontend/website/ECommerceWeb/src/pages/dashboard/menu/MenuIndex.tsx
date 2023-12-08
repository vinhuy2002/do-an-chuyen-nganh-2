
const MenuIndex = () => {
    return (
        <div className="bg-white p-2">
            <div>
                <p className="brand-name fs-4 text-center">Dashboard</p>
            </div>
            <hr className="text-dark" />
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action my-2">
                    <i className="bi bi-speedometer2 fs-6 me-2"></i>
                    <span>Trang chủ</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-receipt fs-6 me-2"></i>
                    <span>Hoá đơn</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-cart fs-6 me-2"></i>
                    <span>Quản lý sản phẩm</span>
                </a>
            </div>
        </div>
    );
}

export default MenuIndex;