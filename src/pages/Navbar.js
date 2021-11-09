import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "./css/Navbar.css";
import { useTranslation } from "react-i18next";


const Navbar = ({
    selectLanguage,
    isAuthenticated
}) => {
    const navigate = useNavigate();
    const navTo = (url) => {
        navigate(url);
    }
    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-light bg-light justify-content-between px-3">
            <Button className="navbar-brand pointer" onClick={() => navTo('/')}>Home</Button>
            {
                isAuthenticated ?
                    (
                        <div className="d-flex">
                            <Button type="button" id="car-button" className="btn btn-light mr-2 btn-success" onClick={() => navTo('/cars')}>{t("navbarCars")}</Button>
                            <DropdownButton id="dropdown-basic-button" title={t("navbarLanguages")}>
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
