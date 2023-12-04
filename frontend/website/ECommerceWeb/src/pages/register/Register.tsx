import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <section>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12 col-sm-7 col-md-6 m-auto">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h3 className="text-center">Đăng ký</h3>
                                <form action="">
                                    <div className='container'>
                                        <div className="mt-4">
                                            <div className='row row-cols-1'>
                                                <div className='col'>
                                                    <label htmlFor="username">Họ và tên</label>
                                                    <input type="text" name="username" id="username" className="form-control my-2 py-2" placeholder="Họ và tên" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className='row row-cols-1'>
                                                <div className='col'>
                                                    <label htmlFor="username">Tên người dùng</label>
                                                    <input type="text" name="username" id="username" className="form-control my-2 py-2" placeholder="Tên người dùng" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className='row row-cols-2'>
                                                <div className='col'>
                                                    <label htmlFor="password">Mật khẩu</label>
                                                    <input type="password" name="password" id="password" className="form-control my-2 py-2" placeholder="Mật khẩu" />
                                                </div>
                                                <div className='col'>
                                                    <label htmlFor="repassword">Nhập lại mật khẩu</label>
                                                    <input type="password" name="repassword" id="repassword" className="form-control my-2 py-2" placeholder="Nhập lại mật khẩu" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className='row row-cols-1'>
                                                <div className='col'>
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" name="password" id="password" className="form-control my-2 py-2" placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className='row row-cols-1'>
                                                <div className='col'>
                                                    <label htmlFor="phone">Số điện thoại</label>
                                                    <input type="text" name="phone" id="phone" className="form-control my-2 py-2" placeholder="Số điện thoại" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-3">
                                            <button className="btn btn-primary">Đăng ký</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="text-center mt-3">
                                    <p>Đã có tài khoản? <Link to="../login">Đăng nhập tại đây</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;