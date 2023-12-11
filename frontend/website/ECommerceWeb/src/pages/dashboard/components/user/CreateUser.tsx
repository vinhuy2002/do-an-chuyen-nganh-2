import { Button, Form, Input} from "antd";

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

const CreateUser = ({ Action }: { Action: (value: string) => void }) => {

    return (
        <div>
            <h4 className="text-center">Tạo người dùng mới</h4>
            <div style={{margin: 'auto', width: '100%'}}>
                <Form
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Tên đăng nhập"
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                        <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>
                            Tạo tài khoản
                        </Button>
                        <Button type="default" danger onClick={() => Action('')}>
                            <span>Quay về</span>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default CreateUser;