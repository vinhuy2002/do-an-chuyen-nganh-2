import { Button, Space, Table } from "antd";
import { useEffect, useState } from "react";
import instance from "../../../../axios/instance";
import { useAppSelector } from "../../../../app/hooks";
import Modal from 'react-bootstrap/Modal';

const ListProduct = ({ Action }: { Action: (value: string) => void }) => {
    //table
    const token = useAppSelector((state) => state.login.access_token);
    const [data, setData] = useState<any[]>();
    const [show, setShow] = useState<number | null>(null);
    const handleClose = () => setShow(null);
    const handleShow = (id: number) => setShow(id);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await instance.get(`/item/user/token`, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
                setData(response.data);
            } catch (error) {

            }
        }
        getData();
    }, []);
    const showModal = (id: number) => {
        handleShow(id);
    }
    const deleteProduct = async (id: number) => {
        try {
            const response = await instance.delete(`/item/delete/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            console.log(response);
            handleClose();
        } catch (error) {

        }
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Danh mục',
            dataIndex: 'category',
            key: 'category',
            render: ((category: { category_name: string }) => {
                return (
                    <span>
                        {category.category_name}
                    </span>
                )
            })
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'item_name',
            key: 'item_name',
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
            dataIndex: 'id',
            key: 'id',
            render: (id) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => Action('updateProduct')}>Cập nhật</Button>
                    <Button type="primary" onClick={() => showModal(id)} danger>Xóa</Button>
                    <Modal show={show === id} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Xoá sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Bạn có chắc muốn xoá sản phẩm số {id} này không? Bạn không thể khôi phục này một khi đã xoá</Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose}>
                                Đóng
                            </Button>
                            <Button onClick={() => deleteProduct(id)} danger>
                                Xoá
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div className="container-fluid" style={{ marginBottom: '20px' }}>
                <h4 className="text-center">Danh sách sản phẩm</h4>
                <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />

                <Button type="primary" onClick={() => Action('createProduct')} style={{ marginRight: '20px' }}>
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