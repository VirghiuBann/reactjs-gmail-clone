import React from 'react';
import { Button } from '@material-ui/core';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar__compose'
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title='Inbox' number={54} />
    </div>
  );
}
