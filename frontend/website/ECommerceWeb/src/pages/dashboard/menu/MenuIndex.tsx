const MenuIndex = ({HandleClick}:{HandleClick:(value:string) => void}) => {
    return (
        <div className="bg-white p-2">
            <div>
                <p className="brand-name fs-4 text-center">Dashboard</p>
            </div>
            <hr className="text-dark" />
            <div className="list-group list-group-flush">
                <button className="list-group-item list-group-item-action my-2"
                    onClick={() => HandleClick("home")}>
                    <i className="bi bi-speedometer2 fs-6 me-2"></i>
                    <span>Trang chủ</span>
                </button>
                <button className="list-group-item list-group-item-action my-2"
                    onClick={() => HandleClick("user")}>
                    <i className="bi bi-speedometer2 fs-6 me-2"></i>
                    <span>Người dùng</span>
                </button>
                <button className="list-group-item list-group-item-action my-2"
                    onClick={() => HandleClick("product")}>
                    <i className="bi bi-speedometer2 fs-6 me-2"></i>
                    <span>Sản phẩm</span>
                </button>
                <button className="list-group-item list-group-item-action my-2"
                    onClick={() => HandleClick("cart")}>
                    <i className="bi bi-speedometer2 fs-6 me-2"></i>
                    <span>Hóa đơn</span>
                </button>
            </div>
        </div>
    );
}

export default MenuIndex;