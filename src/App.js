import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';

import Products from './components/Products/Products';
import Main from './layout/Main';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Frienddetails from './components/Frienddetails/Frienddetails';
import Posts from './components/Posts/Posts';
import Postdetail from './components/Postdetail/Postdetail';


function App() {
  const router = createBrowserRouter([
    {path: '/', 
    element: <Main></Main>, 
    children: [
      {path: '/home', element: <Home></Home>},
      {path:'/friends',
      loader: async () => {
        return fetch('https://jsonplaceholder.typicode.com/users');
      },
       element: <Friends></Friends>},
      {path:'/products', element: <Products></Products>},
      {path: '/about', element: <About></About>},
      {
        path:'/friend/:friend',
        element: <Frienddetails></Frienddetails>
      },
      {
        path:'posts',
        loader:async () => {
          return fetch('https://jsonplaceholder.typicode.com/posts');
        },
        element: <Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
        },
        element: <Postdetail></Postdetail>
      }
    ]},
    {path:'*', element: <div>This is not found</div>}
    
   
   
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
