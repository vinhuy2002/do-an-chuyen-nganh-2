import { Button, Form, Input } from "antd";

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

const UpdateUser = ({ Action }: { Action: (value: string) => void }) => {
    return (
        <div>
            <h4 className="text-center">Cập nhật thông tin người dùng</h4>
            <div style={{ margin: 'auto', width: '100%' }}>
                <div style={{ margin: 'auto', width: '65%' }}>
                    <form>
                        <div className="row">
                            <div className="col-3">
                                <label>Tên người dùng</label>
                            </div>
                            <div className="col">
                                <input type="text" name="name"
                                    className="form-control" value={'Quang Hải'} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Email</label>
                            </div>
                            <div className="col">
                                <input type="text" name="email"
                                    className="form-control" value={'quanghai@gmail.com'} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Số điện thoại</label>
                            </div>
                            <div className="col">
                                <input type="text" name="phone"
                                    className="form-control" value={'0123456789'} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Địa chỉ</label>
                            </div>
                            <div className="col">
                                <input type="text" name="address"
                                    className="form-control" value={'Đà Nẵng'} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Ngày sinh</label>
                            </div>
                            <div className="col">
                                <input type="text" name="address"
                                    className="form-control" value={'07-12-2002'} />
                            </div>
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <button className="btn btn-primary" type="submit" style={{ marginRight: '20px' }}>
                                Cập nhật
                            </button>
                            <button className="btn btn-light" onClick={() => { Action('') }} 
                                style={{ marginRight: '20px', border:'0.5px solid gray' }}>
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