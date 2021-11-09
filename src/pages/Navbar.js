import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "./css/Navbar.css";


const Navbar = ({
    selectLanguage,
    isAuthenticated
}) => {
    const navigate = useNavigate();
    const navTo = (url) => {
        navigate(url);
    }
    

    return (
        <nav className="navbar navbar-light bg-light justify-content-between px-3">
            <Button className="navbar-brand pointer" onClick={() => navTo('/')}>Home</Button>
            {
                isAuthenticated ?
                    (
                        <div className="d-flex">
                            <Button type="button" id="car-button" className="btn btn-light mr-2 btn-success" onClick={() => navTo('/cars')}>Cars</Button>
                            <DropdownButton id="dropdown-basic-button" title="Languages">
                                <Dropdown.Item onClick={() => { selectLanguage('en'); navTo('/cars') }}>English</Dropdown.Item>
                                <Dropdown.Item onClick={() => { selectLanguage('de'); navTo('/cars/de') }}>German</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    )
                    : <Button type="button" class="btn btn-dark" onClick={() => navTo('/login')}>Login</Button>
            }
        </nav>
    )
}

export default Navbar
