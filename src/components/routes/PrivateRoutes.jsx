import { Navigate, Outlet } from "react-router-dom"
import { paths } from "../../lib/constsns"
import { useUserContext } from "../../contexts/hooks/useUser"

function PrivateRoutes() {
   const {user} = useUserContext()
    return (
        user ? <Outlet/> : <Navigate to={paths.LOGIN}/>
    )
}
export default PrivateRoutes