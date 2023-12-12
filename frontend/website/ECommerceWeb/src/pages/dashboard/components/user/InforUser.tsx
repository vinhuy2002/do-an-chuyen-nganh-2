import { Button } from "antd";


const InforUser = ({ Action }: { Action: (value: string) => void }) => {

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
                                    className="form-control" value={'Quang Hải'} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Email</label>
                            </div>
                            <div className="col">
                                <input type="text" name="email" readOnly
                                    className="form-control" value={'quanghai@gmail.com'} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Số điện thoại</label>
                            </div>
                            <div className="col">
                                <input type="text" name="phone" readOnly
                                    className="form-control" value={'0123456789'} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Địa chỉ</label>
                            </div>
                            <div className="col">
                                <input type="text" name="address" readOnly
                                    className="form-control" value={'Đà Nẵng'} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3">
                                <label>Ngày sinh</label>
                            </div>
                            <div className="col">
                                <input type="text" name="address" readOnly
                                    className="form-control" value={'07-12-2002'} />
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