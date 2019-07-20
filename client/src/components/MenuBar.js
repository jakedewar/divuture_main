import React, { useContext, useState } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function MenuBar(){
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu fixed="top" secondary borderless size="massive">
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/home"
      />
      <Menu.Item
        name='goals'
        active={activeItem === 'goals'}
        onClick={handleItemClick}
        as={Link}
        to="/goals"
      />
      <Menu.Item
        name='discover'
        active={activeItem === 'discover'}
        onClick={handleItemClick}
        as={Link}
        to="/discover"
      />
      <Menu.Menu position='right'>
      <Dropdown item icon='user' color="white">
          <Dropdown.Menu>
            <Dropdown.Header content={'Hi, ' + user.username} />
            <Dropdown.Divider />
            <Dropdown.Item
              text='Profile'
              name='profile'
              active={activeItem === 'profile'}
              onClick={handleItemClick}
              as={Link}
              to="/profile"
              />
            <Dropdown.Item
              text='Settings'
              name='settings'
              active={activeItem === 'settings'}
              onClick={handleItemClick}
              as={Link}
              to="/settings"
              />
            <Dropdown.Divider />
            <Dropdown.Item
              text='Logout'
              name='logout'
              onClick={logout}/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu fixed="top" secondary borderless size="massive">
      <Menu.Item
        name='Divuture'
        active={activeItem === 'entry'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Menu position='right'>
      <Dropdown item icon='user' color="white">
          <Dropdown.Menu>
            <Dropdown.Item
              text='Login'
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
              as={Link}
              to="/login"
              />
            <Dropdown.Item
              text='Register'
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
              as={Link}
              to="/register"
              />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  )

    return menuBar;
}

export default MenuBar;
