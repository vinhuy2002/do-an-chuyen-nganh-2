import { Button, Form, Input } from "antd";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { UserProfile } from "../../../../interfaces/interfaces";
import instance from "../../../../axios/instance";
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    email?: string;
};

interface UpdateProfile {
    name: string,
    email: string,
    phone_number: string,
    home_address: string,
    birthday: string
}

const UpdateUser = ({ Action }: { Action: (value: string) => void }) => {
    const token = useAppSelector((state) => state.login.access_token);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [updateProfile, setUpdateProfile] = useState<UpdateProfile>({
        name:  '',
        email: '',
        phone_number: '',
        home_address: '',
        birthday: '',
    });
    const [img, setImg] = useState<any>();

    useEffect(() => {
        const getProfile = async () => {
            try {
                const data = await instance.get('user/profile', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                setProfile(data.data);
                if (data.data) {
                    setUpdateProfile({
                        name: data.data.name,
                        email: data.data.email,
                        phone_number: data.data.phone_number,
                        home_address: data.data.userProfile?.home_address || '',
                        birthday: data.data.userProfile?.birthday || '',
                    });
                }
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
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== null) {
            setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
        }

    };
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', updateProfile.name);
            formData.append('email', updateProfile.email);
            formData.append('phone_number', updateProfile.phone_number);
            formData.append('home_address', updateProfile.home_address);
            formData.append('birthday', updateProfile.birthday);

            const response = await instance.post(`/user/update-profile`, formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data',
                    'Authorization': 'Bearer ' + token,
                }
            });
            if (response.data) {
                Action('');
            }
        } catch (error) {

        }
    }
    
    return (
        <div>
            <h4 className="text-center">Cập nhật thông tin người dùng</h4>
            <div style={{ margin: 'auto', width: '100%' }}>
                <div style={{ margin: 'auto', width: '65%' }}>
                    <form onSubmit={onSubmit} encType="multipart/form-data">
                        <div className="row">
                            <div className="col-3">
                                <label>Tên người dùng</label>
                            </div>
                            <div className="col">
                                <input type="text" name="name"
                                    className="form-control" value={updateProfile?.name} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Email</label>
                            </div>
                            <div className="col">
                                <input type="text" name="email"
                                    className="form-control" value={updateProfile.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Số điện thoại</label>
                            </div>
                            <div className="col">
                                <input type="text" name="phone_number"
                                    className="form-control" value={updateProfile.phone_number} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Địa chỉ</label>
                            </div>
                            <div className="col">
                                <input type="text" name="home_address"
                                    className="form-control" value={updateProfile.home_address} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Ngày sinh</label>
                            </div>
                            <div className="col">
                                <input type="text" name="birthday"
                                    className="form-control" value={updateProfile.birthday} onChange={handleChange} />
                            </div>
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <button className="btn btn-primary" type="submit" style={{ marginRight: '20px' }}>
                                Cập nhật
                            </button>
                            <button className="btn btn-light" onClick={() => { Action('') }}
                                style={{ marginRight: '20px', border: '0.5px solid gray' }}>
                                Hủy
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UpdateUser;