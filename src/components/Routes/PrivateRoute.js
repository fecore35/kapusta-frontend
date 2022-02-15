import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/authSelectors"

export function PrivateRoute({ component: C, }) {
    const isAuth = useSelector(authSelectors.getAuth)
    return (<>

        {isAuth ? <C /> : <Navigate to="/" />}

    </>)
}