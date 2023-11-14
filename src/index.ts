import { Route, Router } from '@vaadin/router';
import './app';

const routes: Route[] = [
    {
        path: '/',
        component: 'lit-app',
        children: [
            {
                path: 'about',
                component: 'lit-about',
                action: async () => {
                    await import('./about/about');
                },
            },
        ],
    },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);