import { Button } from "antd";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import instance from "../../../../axios/instance";
import { UserProfile } from "../../../../interfaces/interfaces";
const InforUser = ({ Action }: { Action: (value: string) => void }) => {
    const token = useAppSelector((state) => state.login.access_token);
    const [profile, setProfile] = useState<UserProfile>();
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
    })
    return (
        <div>
            <div className="container-fluid" style={{ marginBottom: '20px' }}>
                <h4 className="text-center">Thông tin người dùng</h4>
                <div style={{ margin: 'auto', width: '65%' }}>
                    <form>
                        <div className="row">
                            <div className="col-3">
                                <label>Tên người dùng</label>
                            </div>
                            <div className="col">
                                <input type="text" name="name" readOnly
                                    className="form-control" value={profile?.name} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Email</label>
                            </div>
                            <div className="col">
                                <input type="text" name="email" readOnly
                                    className="form-control" value={profile?.email} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Số điện thoại</label>
                            </div>
                            <div className="col">
                                <input type="text" name="phone" readOnly
                                    className="form-control" value={profile?.phone_number} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Địa chỉ</label>
                            </div>
                            <div className="col">
                                <input type="text" name="address" readOnly
                                    className="form-control" value={profile?.userProfile?.home_address} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Ngày sinh</label>
                            </div>
                            <div className="col">
                                <input type="text" name="address" readOnly
                                    className="form-control" value={profile?.userProfile?.birthday} />
                            </div>
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <button className="btn btn-primary" onClick={() => { Action('updateUser') }} style={{ marginRight: '20px' }}>
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default InforUser;