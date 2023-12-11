import { Button, Space, Table } from "antd";
import { Button, Space, Table } from "antd";
import { Button, Space, Table } from "antd";
import { Button, Space, Table } from "antd";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import TopbarIndex from "../../topbar/TopbarIndex";
import TopbarIndex from "../../topbar/TopbarIndex";
import TopbarIndex from "../../topbar/TopbarIndex";
import TopbarIndex from "../../topbar/TopbarIndex";

import { useState } from "react";


export const Home = ({ Toggle }: { Toggle: string; }) => {
    const [action, setAction] = useState("");
    const Action = (value: string) => {
        setAction(value);
    };
    //table
    const dataSource = [
        {
            id: 1,
            name: 'Gary Porter',
            username: 'garyporter',
            email: 'porter@gmail.com',
            phone: '0913123123',
            createTime: 'string',
        },
        {
            id: 2,
            name: 'Jude Collin',
            username: 'judecollin',
            email: 'collin@gmail.com',
            phone: '0913123123',
            createTime: 'string',
        },
        {
            id: 3,
            name: 'Brendan Owen',
            username: 'brendanowen',
            email: 'owen@gmail.com',
            phone: '0913123123',
            createTime: 'string',
        },
        {
            id: 4,
            name: 'Yousef Pittman',
            username: 'yousefpittman',
            email: 'pittman@gmail.com',
            phone: '0913123123',
            createTime: 'string',
        },
        {
            id: 5,
            name: 'Mason Ayala',
            username: 'masonayala',
            email: 'ayala@gmail.com',
            phone: '0913123123',
            createTime: 'string',
        },
        {
            id: 6,
            name: 'Veronica Bernard',
            username: 'veronicabernard',
            email: 'bernard@gmail.com',
            phone: '0913123123',
            createTime: 'string',
        },
    ];

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên người dùng',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tên đăng nhập',
            dataIndex: 'username',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'id',
        },
        {
            title: 'Action',
            key: 'id',
            render: () => (
                <Space size="middle">
                    <Button type="primary" onClick={() => Action('updateUser')}>Cập nhật</Button>
                    <Button type="primary" onClick={() => Action('deleteUser')} danger>Xóa</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <TopbarIndex Toggle={Toggle} />
            <h2>Quản lý người dùng</h2>
            {"" === action ? (
                <div className="container-fluid">
                    <h4 className="text-center">Danh sách người dùng</h4>
                    <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />

                    <Button type="primary" onClick={() => Action('createUser')}>
                        <span>Tạo người dùng mới</span>
                    </Button>
                </div>
            )
                : "createUser" === action ?
                    (
                        <CreateUser />
                    )
                    : "updateUser" === action ?
                        (
                            <p>hihi</p>
                        )
                        : (<p>delete</p>)}

        </div>
    );
};
