import 'bootstrap/js/dist/dropdown';
import { useAppSelector } from '../../../app/hooks';
import { useEffect, useState } from 'react';
import instance from '../../../axios/instance';
import { UserProfile } from '../../../interfaces/interfaces';
const TopbarIndex = ({Toggle}) => {
    const [profile, setProfile] = useState<UserProfile>();
    const [img, setImg] = useState<any>();
    // const [user, setUser] = useState(false);
    const token = useAppSelector((state) => state.login.access_token);
    useEffect(() => {
        const getProfile = async () => {
            try {
                const data = await instance.get('user/profile', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                setProfile(data.data);
                await getImg();
            } catch (error) {

            }
        }
        const getImg = async () => {
            try {
                const img = await instance.get(`/item/image/${profile?.userProfile?.profile_img}`);
                setImg(img.data);
            } catch (error) {

            }
        }
        getProfile();
    }, []);
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
                        >Xin chào, {profile?.name}</a>
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