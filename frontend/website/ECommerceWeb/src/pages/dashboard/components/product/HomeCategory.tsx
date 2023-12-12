import { Button, Space, Table } from "antd";

const HomeCategory = ({ Action }: { Action: (value: string) => void }) => {
    const dataSource = [
        {
            id: 1,
            categoryName: 'Đèn',
            description: 'Danh mục đèn'
        },
        {
            id: 2,
            categoryName: 'TV',
            description: 'Danh mục TV'
        },
        {
            id: 3,
            categoryName: 'Camera',
            description: 'Danh mục camera'
        },
        {
            id: 4,
            categoryName: 'Camera',
        },
    ];
    
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên danh mục',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'id',
            render: () => (
                <Space size="middle">
                    <Button type="primary" onClick={() => Action('updateCategory')}>Cập nhật</Button>
                    <Button type="primary" onClick={() => Action('deleteCategory')} danger>Xóa</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <h4 className="text-center">Tạo danh mục mới</h4>
            <div style={{ margin: 'auto', width: '65%' }}>
                <form>
                    <div className="row">
                        <div className="col-3">
                            <label htmlFor="category">Tên danh mục</label>
                        </div>
                        <div className="col">
                            <input type="text" name="category"
                                placeholder="Nhập tên danh mục" className="form-control" />
                        </div>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <button className="btn btn-primary" type="submit" style={{ marginRight: '20px' }}>
                            Tạo danh mục
                        </button>
                        <button className="btn btn-light" style={{ border: '0.5px solid gray' }}
                            onClick={() => Action('')}>
                            <span>Quay về trang sản phẩm</span>
                        </button>
                    </div>
                </form>
            </div>
            
            <hr />
            
            <h4 className="text-center">Danh sách danh mục</h4>
            <div style={{ margin: 'auto', width: '90%' }}>
                <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 3 }} />
            </div>
        </div>
    )
}
export default HomeCategory;