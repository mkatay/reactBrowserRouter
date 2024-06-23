import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'react-bootstrap/Image'
import avatar from '../assets/react.svg'

const navItems=[
  {path:'/',name:'Home'},
  {path:'/tours',name:'Tours'},
  {path:'/sport',name:'Sport'},
  /*{path:'/dashboard',name:'Admin'}, */
]

export const NavBar=()=> {
  const {admin,setAdmin,setUser,user}=useContext(UserContext)
  const [items,setItems]=useState(navItems)

  useEffect(()=>{
      admin ? setItems(prev=>[...prev,{path:'/dashboard',name:'Admin'}]) : setItems(navItems)
  },[admin])

  const handleLogout=()=>{
    admin && setAdmin(false)
    setUser('')
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {items.map(obj=>
              <Link className='nav-link' key={obj.name} to={obj.path}>{obj.name}</Link>
          )}
          </Nav>
          {!user ? <Nav> 
                        <Link className='nav-link' to='login'>Login</Link>
                    </Nav>
                  : <Nav> 
                      <Link className='nav-link' to='/' onClick={handleLogout}>Logout</Link>
                      <Link className='nav-link' to='/' ><Image src={avatar} roundedCircle={true} alt={user} title={user}></Image></Link>                  
                  </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  );
}
