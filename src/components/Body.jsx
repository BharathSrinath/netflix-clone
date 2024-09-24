import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Home from "./Home"
import { RouterProvider } from "react-router-dom";
import SearchResultsPage from "./SearchResultsPage";
import WatchMoviePage from "./WatchMoviePage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: < Home/>,
    },
    {
      path: "/login",
      element: < Login/>,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/results",
      element: <SearchResultsPage />
    },
    {
      path: "/watch",
      element: <WatchMoviePage />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;