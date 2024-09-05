// import { Icon } from '@iconify/react';
import { GoHome, GoFileDirectory, GoMail, GoGear, GoUnverified } from "react-icons/go";

import { SideNavItem } from './types.jsx';

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <GoHome style={{fontSize: '23px'}} />,
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <GoFileDirectory style={{fontSize: '23px'}} />,
        submenu: true,
        subMenuItems: [
        { title: 'All', path: '/projects' },
        { title: 'PCB Design', path: '/projects/pcb-desing' },
        { title: 'Web Design', path: '/projects/web-desing' },
        ],
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <GoMail style={{fontSize: '23px'}} />,
    },
    {
    title: 'Settings',
    path: '/settings',
    icon: <GoGear style={{fontSize: '23px'}} />,
    submenu: true,
    subMenuItems: [
        { title: 'Account', path: '/settings/account' },
        { title: 'Privacy', path: '/settings/privacy' },
        ],
    },
    {
        title: 'Help',
        path: '/help',
        icon: <GoUnverified style={{fontSize: '23px'}} />,
    },
];