import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import './styles.css';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import instance from '../../axios/instance';
import { UserProfile } from '../../interfaces/interfaces';
// import { Link, useNavigate } from 'react-router-dom';
function Header() {
    const [profile, setProfile] = useState<UserProfile>();
    const [img, setImg] = useState<any>();
    // const [user, setUser] = useState(false);
    const token = useAppSelector((state) => state.login.access_token);
    useEffect(() => {
        const getProfile = async () => {
            try {
                const data = await instance.get('user/profile', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                setProfile(data.data);
                await getImg();
            } catch (error) {

            }
        }
        const getImg = async () => {
            try {
                const img = await instance.get(`/item/image/${profile?.userProfile?.profile_img}`);
                setImg(img.data);
            } catch (error) {

            }
        }
        getProfile();
    }, []);
    return (
        <Navbar expand="lg" className='background'>
            <Container>
                <Navbar.Brand href="#home" className='textStyle'>UH Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home" className='textStyle'>Trang chủ</Nav.Link> */}
                        <Nav.Item className='my-auto mx-3'><Link to="../" className='textStyleLink'>Trang chủ</Link></Nav.Item>
                        <Nav.Item className='my-auto mx-3'><Link to="../" className='textStyleLink'>Sản phẩm</Link></Nav.Item>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink} style={{ color: 'white' }}>Danh mục</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href='#'>1</Dropdown.Item>
                                <Dropdown.Item>2</Dropdown.Item>
                                <Dropdown.Item>3</Dropdown.Item>
                                <Dropdown.Item>4</Dropdown.Item>
                                <Dropdown.Item>5</Dropdown.Item>
                                <Dropdown.Item>6</Dropdown.Item>
                                <Dropdown.Item>7</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    {!profile ? <Nav className='ms-auto'>
                        <Nav.Item className='mx-3'><Link to="../login" className='textStyleLink'>Đăng nhập</Link></Nav.Item>
                        <Nav.Item className='mx-3'><Link to="../register" className='textStyleLink'>Đăng ký</Link></Nav.Item>
                    </Nav> : <Dropdown as={NavItem} className='ms-auto'>
                        <Dropdown.Toggle as={NavLink} style={{ color: 'white' }}>{profile.name}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item><Link to="../dashboard" >Dashboard</Link></Dropdown.Item>
                            <Dropdown.Item>Đăng xuất</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;