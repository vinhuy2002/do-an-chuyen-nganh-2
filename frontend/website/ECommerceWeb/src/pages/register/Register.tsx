import { Link } from 'react-router-dom';
import instance from '../../axios/instance';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
interface Register {
    name: string,
    username: string,
    password: string,
    repassword: string,
    email: string,
    phone_number: string
}

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Register>({
        name: '',
        username: '',
        password: '',
        repassword: '',
        email: '',
        phone_number: ''
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.repassword) {
            return;
        }
        try {
            const response = await instance.post(`/auth/register`, {
                name: formData.name,
                username: formData.username,
                password: formData.password,
                email: formData.email,
                phone_number: formData.phone_number
            });
            if(response.data !== null) {
                navigate('../login')
            }
        } catch (error) {

        }
    }

    return (
        <section>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12 col-sm-7 col-md-6 m-auto">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h3 className="text-center">Đăng ký</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className='container'>
                                        <div className="mt-4">
                                            <div className='row row-cols-1'>
                                                <div className='col'>
                                                    <label htmlFor="name">Họ và tên</label>
                                                    <input type="text" name="name" id="name" className="form-control my-2 py-2" placeholder="Họ và tên" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className='row row-cols-1'>
                                                <div className='col'>
                                                    <label htmlFor="username">Tên người dùng</label>
                                                    <input type="text" name="username" id="username" className="form-control my-2 py-2" placeholder="Tên người dùng" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className='row row-cols-2'>
                                                <div className='col'>
                                                    <label htmlFor="password">Mật khẩu</label>
                                                    <input type="password" name="password" id="password" className="form-control my-2 py-2" placeholder="Mật khẩu" onChange={handleChange} />
                                                </div>
                                                <div className='col'>
                                                    <label htmlFor="repassword">Nhập lại mật khẩu</label>
                                                    <input type="password" name="repassword" id="repassword" className="form-control my-2 py-2" placeholder="Nhập lại mật khẩu" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className='row row-cols-1'>
                                                <div className='col'>
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" name="email" id="email" className="form-control my-2 py-2" placeholder="Email" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className='row row-cols-1'>
                                                <div className='col'>
                                                    <label htmlFor="phone_number">Số điện thoại</label>
                                                    <input type="text" name="phone_number" id="phone_number" className="form-control my-2 py-2" placeholder="Số điện thoại" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-3">
                                            <button className="btn btn-primary" type='submit'>Đăng ký</button>
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