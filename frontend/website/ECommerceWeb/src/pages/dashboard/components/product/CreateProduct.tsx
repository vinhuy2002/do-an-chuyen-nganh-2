import { ChangeEvent, useEffect, useState } from "react";
import instance from "../../../../axios/instance";
import { useAppSelector } from "../../../../app/hooks";
interface NewProduct {
    category_id: number,
    item_name: string,
    description: string,
    price: number,
    quantity: number,
    photos?: string[],
}
const CreateProduct = ({ Action }: { Action: (value: string) => void }) => {
    const token = useAppSelector(state => state.login.access_token);
    const [category, setCategory] = useState<string[]>();
    const [product, setProduct] = useState<NewProduct>({
        category_id: 0,
        item_name: '',
        description: '',
        price: 0,
        quantity: 0,
    });
    useEffect(() => {
        const getCategory = async() => {
            try {
                const response = await instance.get(`/category/`);
                setCategory(response.data);
            } catch (error) {
                
            }
        }
        getCategory();
    }, []);
    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const categoryID = parseInt(e.target.value);
        setProduct({ ...product, category_id: categoryID });
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== null) {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }

    };
    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const descriptionValue = event.target.value;
        setProduct({...product, description: descriptionValue });
    };
    const submitAction = async() => {
        try {
            const formData = new FormData();
            formData.append('category_id', String(product.category_id));
            formData.append('item_name', product.item_name);
            formData.append('description', product.description);
            formData.append('price', String(product.price));
            formData.append('quantity', String(product.quantity));
            console.log(product);
            const response = await instance.post(`item/add-item`, formData, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
        } catch (error) {
            
        }
    }
     return (
        <div>
            <h4 className="text-center">Tạo sản phẩm mới</h4>
            <div style={{ margin: 'auto', width: '65%' }}>
                <form onSubmit={submitAction}>
                    <div className="row">
                        <div className="col-3">
                            <label htmlFor="category">Danh mục</label>
                        </div>
                        <div className="col">
                            <select className="form-select" onChange={handleCategoryChange}>
                                <option selected>Lựa chọn danh mục sản phẩm phù hợp</option>
                                {category ? category.map((item:any) => {
                                    return(
                                        <option value={item.id} key={item.id}>{item.category_name}</option>
                                    )
                                }): <option>...</option>}
                            </select>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="category">Tên sản phẩm</label>
                        </div>
                        <div className="col">
                            <input type="text" name="item_name"
                                placeholder="Nhập tên sản phẩm" className="form-control" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="category">Mô tả sản phẩm</label>
                        </div>
                        <div className="col">
                            <textarea className="form-control" placeholder="Mô tả sản phẩm"
                                id="floatingTextarea" name="description" onChange={handleDescriptionChange}></textarea>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="category">Số lượng</label>
                        </div>
                        <div className="col">
                            <input type="text" name="quantity"
                                placeholder="Nhập số lượng" className="form-control" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="category">Giá sản phẩm</label>
                        </div>
                        <div className="col">
                            <input type="text" name="price"
                                placeholder="Nhập giá sản phẩm" className="form-control" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3">
                            <label htmlFor="category">Hình ảnh sản phẩm</label>
                        </div>
                        <div className="col">
                            <input className="form-control" type="file" 
                            id="formFile" name="image"/>
                        </div>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <button className="btn btn-primary" type="submit" style={{ marginRight: '20px' }}>
                            Tạo sản phẩm
                        </button>
                        <button className="btn btn-light" style={{ border: '0.5px solid gray' }}
                            onClick={() => Action('')}>
                            <span>Quay về</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateProduct;