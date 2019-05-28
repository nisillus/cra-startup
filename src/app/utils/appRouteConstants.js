import ArticleList from 'app/views/Articles/ArticleList';
import HomePage from 'app/views/HomePage/HomePage';
import Sandwiches from 'app/views/Sandwiches/Sandwiches';
import Tacos from 'app/views/Tacos/Tacos';
import Bus from 'app/views/Tacos/Bus';
import Cart from 'app/views/Tacos/Cart';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/articles',
    exact: true,
    component: ArticleList
  },
  {
    path: '/sandwiches',
    exact: true,
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
];
