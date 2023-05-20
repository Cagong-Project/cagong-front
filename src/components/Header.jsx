import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { getUser, removeUser } from '../util/localstorage';

function Header() {
  const userInfo = getUser();
  const navigate = useNavigate();

  const handleSignoutClick = (e) => {
    e.preventDefault();
    alert('로그아웃 하시겠습니까?');
    removeUser();
    navigate('/');
  };

  return (
    <Nav variant="pills" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link href="/" eventKey="link-0">
          Home
        </Nav.Link>
      </Nav.Item>
      {userInfo ? (
        <Nav.Item>
          <Nav.Link href="#" eventKey="link-1" onClick={(e) => handleSignoutClick(e)}>
            Signout
          </Nav.Link>
        </Nav.Item>
      ) : (
        <Nav.Item>
          <Nav.Link href="/signin" eventKey="link-1">
            Signin
          </Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
}
export default Header;
