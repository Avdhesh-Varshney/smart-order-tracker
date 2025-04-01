import { useContext } from "react"
import { UserContext } from "../App"
import { Navigate } from "react-router-dom";

const NewOrder = ({ type }) => {

    let { userAuth: { access_token } } = useContext(UserContext);

    return (
        access_token ?
            <div className="flex justify-center items-center">
                New Order Page
            </div>
            :
            <Navigate to="/" />
    )
}

export default NewOrder;
