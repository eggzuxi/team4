import { lazy } from 'react';
import ReadPage from '../pages/Product/ReadPage.tsx';

const ProductIndex  = lazy(() => import('../pages/Product/IndexPage'));
const ProductList = lazy(() => import('../pages/Product/ProductListPage'));
const ProductAdd = lazy(() => import('../pages/Product/ProductAddPage.tsx'));

const productRouter = [

  {
    path: '/product',
    title: 'Product Index',
    component: ProductIndex
  },

  {
    path: '/product/list',
    title: 'Product List',
    component: ProductList
  },
  {
    path: '/product/add',
    title: 'Product Add',
    component: ProductAdd
  },
  {
    path: '/product/read/:pno',
    title: 'Product read',
    component: ReadPage
  }
]

export default productRouter