import React from 'react';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

export default function Header() {
  const user = useSelector(selectUser);

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png'
          alt='gmail'
        />
      </div>

      <div className='header__middle'>
        <SearchOutlined />
        <input type='text' placeholder='Search mailbox' />
        <ArrowDropDownIcon className='header__inputCaret' />
      </div>

      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={user?.photoUrl} />
      </div>
    </div>
  );
}
