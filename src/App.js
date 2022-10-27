
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import PrivateRoutes from './Route/PrivateRoutes';
import NotFound from './Components/NotFound/NotFound';
import Courses from './Components/Courses/Courses';
import FAQ from './Components/Q-A/FAQ';
import { Card } from 'react-bootstrap';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element:<Home></Home>
        },
      
        {
          path: '/courses/:id',
          loader: ({params}) => fetch(`https://tech-education-server.vercel.app/courses/${params.id}`),
          element:<Courses></Courses>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/card',
          element: <PrivateRoutes><Card></Card></PrivateRoutes>
        },
        {
          path:'/sidebar',
          loader: () => fetch('https://tech-education-server.vercel.app/courses/'),
          element: <Sidebar></Sidebar>
        }
        
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
