import { Table } from "antd";

const ListCart = ({ Action }: { Action: (value: string) => void }) => {
    //table
    const dataSource = [
        {
            id: 1,
            createTime: '07-12-2023',
            finished: 'Chưa hoàn thành',
            finishedTime: '',
            totalPrice: '36 $',
        },
        {
            id: 15123,
            createTime: '01-01-2023',
            finished: 'Đã hoàn thành',
            finishedTime: '20-01-2023',
            totalPrice: '100 $',
        },
        {
            id: 20581,
            createTime: '07-12-2023',
            finished: 'Đã hoàn thành',
            finishedTime: '11-12-2023',
            totalPrice: '80 $',
        },
        {
            id: 52321,
            createTime: '05-07-2023',
            finished: 'Đã hoàn thành',
            finishedTime: '15-07-2023',
            totalPrice: '20 $',
        },
        {
            id: 71209,
            createTime: '12-12-2023',
            finished: 'Chưa hoàn thành',
            finishedTime: '',
            totalPrice: '136 $',
        },
    ];

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createTime',
            key: 'createTime',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'finished',
            key: 'finished',
        },
        {
            title: 'Ngày hoàn thành',
            dataIndex: 'finishedTime',
            key: 'finishedTime',
        },
        {
            title: 'Tổng giá',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
        },
        // {
        //     title: 'Action',
        //     key: 'id',
        //     render: () => (
        //         <Space size="middle">
        //             <Button type="primary" onClick={() => Action('updateProduct')}>Cập nhật</Button>
        //             <Button type="primary" onClick={() => Action('deleteProduct')} danger>Xóa</Button>
        //         </Space>
        //     ),
        // },
    ];

    return (
        <div>
           <div className="container-fluid" style={{marginBottom:'20px'}}>
                <h4 className="text-center">Danh sách hóa đơn</h4>
                <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
            </div>

        </div>
    )
}
export default ListCart;