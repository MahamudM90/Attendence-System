import {createBrowserRouter} from "react-router-dom";
import FirstPage from "../Pages/SignUp/FirstPage/FirstPage";
import SecondPage from "../Pages/SignUp/SecondPage/SecondPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <FirstPage />
    },
    {
        path: "/second",
        element: <SecondPage />
    }
])

export default router;