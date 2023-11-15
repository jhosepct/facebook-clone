import { Route, Router } from '@vaadin/router';
import './app';

const routes: Route[] = [
    {
        path: '/',
        component: 'lit-app',
        action: async () => {
            await import('./app');
        },
    },
    {
        path: '/user',
        component: 'lit-user',
        action: async () => {
            await import('./user/user');
        },
    },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);