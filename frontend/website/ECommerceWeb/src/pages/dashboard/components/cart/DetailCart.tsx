import { Button, Space, Table } from "antd";


const DetailCart = ({Action} : {Action:(value:string) => void}) => {

    const dataSource = [
        {
            productName: 'Đèn Led thông minh Sakura',
            productImg: 'img',
            count: '4',
            price: '36 $',
        },
        {
            productName: 'TV Panasonic',
            productImg: 'img',
            count: '1',
            price: '50 $',
        },
    ];

    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'productImg',
            key: 'productImg',
        },
        {
            title: 'Số lượng',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: 'Đơn giá',
            dataIndex: 'price',
            key: 'price',
        },
    ];

    return (
        <div>
           <div className="container-fluid" style={{marginBottom:'20px'}}>
                <h4 className="text-center">Chi tiết hóa đơn</h4>
                <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
                <button className="btn btn-light" style={{ border: '0.5px solid gray' }}
                    onClick={() => Action('')}>
                    <span>Quay về</span>
                </button>
            </div>
        </div>
    )
}
export default DetailCart;