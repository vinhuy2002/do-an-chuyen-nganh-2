import { Button, Space, Table } from "antd";
import { useEffect, useState } from "react";
import instance from "../../../../axios/instance";
import { useAppSelector } from "../../../../app/hooks";

const ListCart = ({ Action }: { Action: (value: string, data?: any) => void }) => {
    const [data, setData] = useState<any[]>();
    const token = useAppSelector(state => state.login.access_token);
    useEffect(() => {
        const getData = async() => {
            try {
                const response = await instance.get(`receipt/user`, {headers: 
                    {
                        Authorization: "Bearer " + token
                    }
                });
                setData(response.data);

            } catch (error) {
                
            }
        }
        getData();
    }, []);
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
    console.log(data);
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_time',
            key: 'created_time',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'check_finished',
            key: 'check_finished',
            render: (check_finished) => {
                if (check_finished === true) {
                    return (
                        <p>Đã hoàn thành</p>
                    )
                }
                return (
                    <p>Chưa hoàn thành</p>
                )
            }
        },
        {
            title: 'Ngày hoàn thành',
            dataIndex: 'finished_time',
            key: 'finished_time',
        },
        {
            title: 'Tổng giá',
            dataIndex: 'cart',
            key: 'cart',
            render: (cart) => {
                let value: number = 0;
                cart.map((item) => {
                    value += (item.quantity * item.items.price); 
                });
                return (
                    <p>{value} VNĐ</p>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: 'cart',
            key: 'id',
            render: (cart: any, record: any) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => Action('detailCart', { cart, record })}>Chi tiết</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
           <div className="container-fluid" style={{marginBottom:'20px'}}>
                <h4 className="text-center">Danh sách hóa đơn</h4>
                <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
            </div>

        </div>
    )
}
export default ListCart;