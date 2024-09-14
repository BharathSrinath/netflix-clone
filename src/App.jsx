import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Browse from './components/Browse';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ])

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
