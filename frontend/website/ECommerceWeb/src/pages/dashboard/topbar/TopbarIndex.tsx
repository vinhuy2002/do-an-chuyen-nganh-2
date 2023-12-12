import 'bootstrap/js/dist/dropdown';
const TopbarIndex = ({Toggle}) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-white bg-white">
            <i className="bi bi-justify-left" onClick={Toggle} style={{ color: 'black' }}></i>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            ></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0 pe-3">
                    
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Xin chào, Quang Hải</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item pe-0" href="#">Đăng xuất</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
export default TopbarIndex;