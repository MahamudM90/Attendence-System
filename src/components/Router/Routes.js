import {createBrowserRouter} from "react-router-dom";
import FirstPage from "../Pages/SignUp/FirstPage/FirstPage";
import SecondPage from "../Pages/SignUp/SecondPage/SecondPage";
import ThirdPage from "../Pages/SignUp/ThirdPage/ThirdPage";
import Login from "../Pages/Login/Login";
import AttendenceInfo from "../Pages/AttendenceInfo/AttendenceInfo";
const router = createBrowserRouter([
    {
        path: "/",
        element: <FirstPage />
    },
    {
        path: "/second",
        element: <SecondPage />
    },
    {
        path: "/third",
        element: <ThirdPage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/attendence",
        element: <AttendenceInfo/>
    }
])

export default router;