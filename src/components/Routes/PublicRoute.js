import { Navigate } from "react-router"
import { useSelector } from "react-redux";
import authSelectors from "../../redux/authSelectors"
import Router from 'constants/router';


export function PublicRoute({ component: C, }) {
    const isAuth = useSelector(authSelectors.getAuth)
    return <>

        {isAuth ? <Navigate to={Router.DASHBOARD} /> : <C />}


    </>
}