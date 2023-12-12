import { Button, Space, Table } from "antd";


const ListProduct = ({Action} : {Action:(value:string) => void}) => {
    //table
    const dataSource = [
        {
            id: 1,
            categoryName: 'Đèn',
            productName: 'Đèn thông minh Sonic',
            description: 'Đèn thông minh',
            price: '3 $',
        },
        {
            id: 2,
            categoryName: 'TV',
            productName: 'TV Samsung',
            description: 'TV đến từ nhãn hàng Nhật Bản',
            price: '20 $',
        },
        {
            id: 3,
            categoryName: 'Camera',
            productName: 'Camera Sakuaya',
            description: 'Camera full HD, bắt được âm thanh',
            price: '15 $',
        },
        {
            id: 4,
            categoryName: 'Camera',
            productName: 'Camera Sakuaya',
            description: 'Camera full HD, bắt được âm thanh',
            price: '15 $',
        },
    ];

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Danh mục',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'id',
            render: () => (
                <Space size="middle">
                    <Button type="primary" onClick={() => Action('updateProduct')}>Cập nhật</Button>
                    <Button type="primary" onClick={() => Action('deleteProduct')} danger>Xóa</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div className="container-fluid" style={{marginBottom:'20px'}}>
                <h4 className="text-center">Danh sách sản phẩm</h4>
                <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 3 }} />

                <Button type="primary" onClick={() => Action('createProduct')}  style={{ marginRight: '20px' }}>
                    <span>Tạo sản phẩm mới</span>
                </Button>

                <Button type="default" onClick={() => Action('homeCategory')}>
                    <span>Quản lý danh mục sản phẩm</span>
                </Button>
            </div>
        </div>
    )
}
export default ListProduct;