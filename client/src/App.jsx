import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={<Home/>} />
        <Route path="/" >
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
    
  
}

export default App
