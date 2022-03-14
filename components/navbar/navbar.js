import React from 'react'

import {Navbar,Nav} from 'react-bootstrap'


import {NavbarStyle,BarStyle, Logo} from './style'



export default function navbar() {
    return (
        <>
        <NavbarStyle>
            <Navbar expand="lg">
            <Logo>
            <i className="bi bi-emoji-smile"></i>
            </Logo>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button">
              <BarStyle>
                <i className="bi bi-list"></i>
              </BarStyle>
          </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
                <Nav.Link href="/inicio"  rel="noreferrer">Início</Nav.Link>

                <Nav.Link href="/conselhos" rel="noreferrer" >Conselhos</Nav.Link>
                <Nav.Link href="/links-uteis" rel="noreferrer">Links úteis</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </NavbarStyle>
    </>
    )
}
