import { TypeIcons } from "../utils/icons";

interface NavigationType {
    name: string;
    icon: TypeIcons;
    url: string;
}

interface InfoType {
    name: string;
    icon: TypeIcons;
    count?: number;
}

export interface HeaderType {
    navigation: NavigationType[];
    info: InfoType[];
}

export const Header: HeaderType = {
    navigation: [
        {
            name: 'Home',
            icon: 'home',
            url: '/'
        },
        {
            name: 'Videos',
            icon: 'video',
            url: '#'
        },
        {
            name: 'Marketplace',
            icon: 'marketplace',
            url: '#'
        },
        {
            name: 'Groups',
            icon: 'groups',
            url: '#'
        },
        {
            name: 'Games',
            icon: 'games',
            url: '#'
        }

    ],
    info: [
        {
            name: 'Menu',
            icon: 'menu',
        },
        {
            name: 'Messenger',
            icon: 'messenger',
            count: 4
        },
        {
            name: 'Notifications',
            icon: 'notifications',
        }
    ]
}