import { Navigate } from "react-router"
import { useSelector } from "react-redux";
import Router from 'constants/router';


export function PublicRoute({ component: C, }) {
    const isAuth = useSelector(state => state.auth.isAuth)
    return <>

        {isAuth ? <Navigate to={Router.DASHBOARD} /> : <C />}


    </>
}