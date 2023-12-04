import { Link  } from 'react-router-dom';
const Login = () => {
    return (
        <section>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12 col-sm-7 col-md-6 m-auto">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h3 className="text-center">Đăng nhập</h3>
                                <form action="">
                                    <div className="mt-4">
                                        <label htmlFor="username">Tên người dùng</label>
                                        <input type="text" name="username" id="username" className="form-control my-2 py-2" placeholder="Tên người dùng" />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="password">Mật khẩu</label>
                                        <input type="password" name="password" id="password" className="form-control my-2 py-2" placeholder="Mật khẩu" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <button className="btn btn-primary">Đăng nhập</button>
                                    </div>
                                </form>
                                <div className="text-center mt-3">
                                    <p>Chưa có tài khoản? <Link to = "../register">Đăng ký ngay</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Login;