import { useEffect, useState } from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';
import instance from '../../axios/instance';
import Item from 'antd/es/list/Item';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const ProductDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState<any>();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await instance.get(`/item/get-id/${id}`);
                setData(response.data);
            } catch (error) {

            }
        }
        getData();
    }, []);
    if (data) {
        console.log(data);
    }

    const DisplayImg = (data: any) => {

    }
    return (
        <>
            <Header />
            <div className='bodyStyle mt-3'>
                <div className="container">
                    <div className='row'>
                        <div className='backgroundImg'>
                            <div className='textStyleTitle'>
                                <p>Thông tin chi tiết sản phẩm</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <h3>Hình ảnh sản phẩm</h3>
                    </div>
                    <div className='row mt-3'>
                        <div className='col col-6'>
                            <div className='bigImg'>
                                {
                                    data ?
                                        <img src={`https://firebasestorage.googleapis.com/v0/b/dacn-2.appspot.com/o/${data.image_name[0]}?alt=media`} alt="" className='imgDisplay' />
                                        : null
                                }
                            </div>
                        </div>
                        <div className='col'>
                            {data ?
                                <div>
                                    <h4>{data.item_name}</h4>
                                    <p> <span style={{ fontWeight: 'bold' }}>Số lượng: </span>{data.quantity}</p>
                                    <p> <span style={{ fontWeight: 'bold' }}>Đơn giá: </span>{data.price} VNĐ</p>
                                    <hr />
                                    <h4>Thông tin về sản phẩm</h4>
                                    <p>{data.description}</p>
                                </div>
                                : null
                            }

                        </div>
                    </div>

                    <div className='row mt-3'>
                        {data ?
                            data.image_name.forEach((item: any) => {
                                return (
                                    <div className='col'>
                                        <div className='catDisplay'>
                                            <img src={`https://firebasestorage.googleapis.com/v0/b/dacn-2.appspot.com/o/${item}?alt=media`} alt="" />
                                            <p>{item}</p>
                                        </div>
                                    </div>
                                )
                            })
                            : null
                        }
                    </div>
                    <div style={{ margin: '30px 0 30px 0' }}>
                        <button className="btn btn-primary" style={{ marginRight: '20px' }}>
                            Thêm vào giỏ hàng
                        </button>
                        <button className="btn btn-light" style={{ border: '0.5px solid gray' }}>
                            <span>Quay về</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ProductDetail;