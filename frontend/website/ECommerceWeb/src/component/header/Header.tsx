import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import './styles.css';
import { Link } from 'react-router-dom';

function Header() {
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
                    <Nav className='ms-auto'>
                        <Nav.Item className='mx-3'><Link to="../login" className='textStyleLink'>Đăng nhập</Link></Nav.Item>
                        <Nav.Item className='mx-3'><Link to="../register" className='textStyleLink'>Đăng ký</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;