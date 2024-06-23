import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Tours } from './components/Tours'
import { Login } from './components/Login'
import { NotFound } from './components/NotFound'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar'
import { DashboardPage } from './components/DashboardPage'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Outlet } from 'react-router-dom';
import { Sport } from './components/Sport'
import {QueryClient, QueryClientProvider} from 'react-query'
/*
const router=createBrowserRouter([
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {element:<NavBar/>,
    children:[
       {path:'/',element:<Home/>},
        {path:'/tours',element:<Tours/>},
        {path:'/sport',element:<Sport/>},
        {path:'/login',element:<Login/>},
        {path:'*',element:<NotFound/>},
    ]
  }
])*/


function PrivateRoute({ children }) {
  const {admin}=useContext(UserContext)
  console.log(admin);
  //const isAuthenticated = checkUserAuthentication();
  return admin ? children : <Navigate to="/login" />;
}

const router = createBrowserRouter([
  {
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tours',
        element: <Tours />,
      },
      {
        path: '/sport',
        element: <Sport />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const queryClient=new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
