import { useContext } from "react"
import { UserContext } from "../App"
import { Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import InputBox from "../components/inputBox.component";

const NewOrder = () => {

    let { userAuth: { access_token } } = useContext(UserContext);

    return (
        access_token ?
            <div className="flex justify-center items-center">
                <form id="newOrderFormElement" className="w-full max-w-md mx-auto bg-gray-50 p-6 mt-10 rounded shadow-md">
                    <Toaster />

                    <h2 className="font-medium text-4xl my-10 text-center font-gelasio">
                        <i className="fi fi-rr-edit mr-4 text-2xl"></i>
                        Create New Order
                    </h2>

                    <InputBox
                        name="title"
                        type="text"
                        id="title"
                        placeholder="Enter order title"
                        icon="fi-rr-shopping-cart"
                    />

                    <InputBox
                        name="description"
                        type="text"
                        id="description"
                        placeholder="Enter order description"
                        icon="fi-rr-comment"
                    />

                    <button className="btn-dark my-10 mx-auto block" type="submit">
                        <i className="fi fi-rr-add mr-2"></i>
                        Create Order
                    </button>

                </form>
            </div>
            :
            <Navigate to="/" />
    )
}

export default NewOrder;
