import styled from 'styled-components'

// style made throught bootstrap's class

const NavbarStyle = styled.nav`

  nav.navbar{
    width:auto;
    padding:5px;
    background:#4D77FF; 
}

nav.navbar a.nav-link, a.nav-link.active{
    color:#FFF;
    letter-spacing:1px;
    font-size:1.13em;
    margin:5px;
    cursor:pointer;
    font-weight: bold;

    &:hover, &:active, &:focus{
        color:#FFF;
        font-weight:bold;
        font-size:1.2em;
        transition:.2s ease-in-out;
    }
}


.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
    color:#FFF;
}
  

// mobile button

.navbar-light .navbar-toggler {
    border-color:transparent;
    background:transparent;
}



// mobile version

div.navbar-nav a.nav-link{
    margin:0px 5px;
    padding:5px;
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center; 
    }
}
`
// toggle icon
const BarStyle = styled.i`
    color:#FFF;
    font-size:1.65em;
`
//logotype
const Logo = styled.i`
    font-size:26px;
    font-weight:800;
    color:#FFF;
    padding:0 10px;
    margin:0 10px;
`

export {NavbarStyle,BarStyle,Logo}