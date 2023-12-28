import { Button, Space, Table } from "antd";


const DetailCart = ({Action, data} : {Action:(value:string) => void, data: any}) => {

    const dataSource = data?.cart || [];
    console.log(dataSource[0].items.item_name);
    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: ['items', 'item_name'],
            key: 'name',
        },
        {
            title: 'Hình ảnh',
            dataIndex: ['items', 'image_name', 0],
            key: 'productImg',
            render: (img: string) => {
                const imgURL = `https://firebasestorage.googleapis.com/v0/b/dacn-2.appspot.com/o/${img}?alt=media`;
                return(
                    <img src={imgURL} alt="product" style={{ width: '50px' }} />
                )
            },
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'count',
        },
        {
            title: 'Đơn giá',
            dataIndex: ['items', 'price'],
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