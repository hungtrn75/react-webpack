import React from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import asyncComponent from './AsyncComponent.js';
import Loadable from 'react-loadable';
import { HomePage, ProductListPage, ProductActionPage } from './LoadableComponent';

//@Dynamic Imports

//const HomePage = asyncComponent(() => import('./pages/HomePage/HomePage').then(module => module.default));
//const ProductListPage = asyncComponent(() => import('./pages/ProductListPage/ProductListPage').then(module => module.default));
//const ProductActionPage = asyncComponent(() => import('./pages/ProductActionPage/ProductActionPage').then(module => module.default));

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history}/>
    },
    {
        path: '/product/edit/:id',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main:()=><NotFoundPage/>
    }
];

export default routes;