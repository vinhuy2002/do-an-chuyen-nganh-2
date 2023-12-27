import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import instance from '../../axios/instance';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { userLogin } from './loginSlice';
import { TokenState } from '../../interfaces/interfaces';
import { store } from '../../app/store';
import { Provider } from 'react-redux';
interface Login {
    username: string,
    password: string
}

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Login>({
        username: '',
        password: ''
    });
    // const [user, setUser] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await instance.post(`/auth/login`, {
                username: formData.username,
                password: formData.password
            });
            const token: TokenState = {
                access_token: response.data.AccessToken,
                refresh_token: response.data.RefreshToken
            }
            if (token.access_token != undefined) {
                dispatch(userLogin(token));
                navigate('../');
            }
        } catch (error) {

        }
    }
    return (
        <Provider store={store}>
            <section>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-12 col-sm-7 col-md-6 m-auto">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <h3 className="text-center">Đăng nhập</h3>
                                    <form onSubmit={onSubmit}>
                                        <div className="mt-4">
                                            <label htmlFor="username">Tên người dùng</label>
                                            <input type="text" name="username" id="username" className="form-control my-2 py-2" placeholder="Tên người dùng" value={formData?.username} onChange={handleChange} />
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="password">Mật khẩu</label>
                                            <input type="password" name="password" id="password" className="form-control my-2 py-2" placeholder="Mật khẩu" value={formData?.password} onChange={handleChange} />
                                        </div>
                                        <div className="text-center mt-3">
                                            <button className="btn btn-primary" type='submit'>Đăng nhập</button>
                                        </div>
                                    </form>
                                    <div className="text-center mt-3">
                                        <p>Chưa có tài khoản? <Link to="../register">Đăng ký ngay</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Provider>
    );
}
export default Login;