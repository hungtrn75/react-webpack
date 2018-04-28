import React, { Component } from 'react';
import Loadable from 'react-loadable';

const Loading = <div>Loading...</div>;
const HomeComponent = Loadable({
    loader: () => import('./pages/HomePage/HomePage'),
    loading:()=>Loading
})

const ProductListComponent = Loadable({
    loader: () => import('./pages/ProductListPage/ProductListPage'),
    loading:()=>Loading,
})

const ProductActionComponent = Loadable({
    loader: () => import('./pages/ProductActionPage/ProductActionPage'),
    loading:()=>Loading
})

export class HomePage extends Component{
    render() {
        return <HomeComponent/>
    }
}

export class ProductListPage extends Component{
    render() {
        return <ProductListComponent/>
    }
}

export class ProductActionPage extends Component{
    render() {
        return <ProductActionComponent {...this.props}/>
    }
}

