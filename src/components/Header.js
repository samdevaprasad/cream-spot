import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

class Header extends Component {
    state = {
    isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
    return (
        <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">Cream Jacket Leaderboard</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
            <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="">Pricing</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="">
                <a href='https://twitter.com/creamjacket69'>
                <MDBIcon fab icon="twitter" />
                </a>
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="https://twitter.com/creamjacket69">
                <MDBIcon fab icon="google-plus-g" />
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="https://venmo.com/sammydollabills">Notifications</MDBDropdownItem>
                    <MDBDropdownItem href="https://venmo.com/sammydollabills">History</MDBDropdownItem>
                    <MDBDropdownItem href="https://venmo.com/sammydollabills">Settings</MDBDropdownItem>
                    <MDBDropdownItem href="https://venmo.com/sammydollabills">Logout</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
        );
    }
}

export default Header;
