import { useContext, useState } from "react";
import AnimationWrapper from "../common/page-animation";
import { UserContext } from "../App";
import NoDataMessage from "../components/noDataMessage.component";

const Home = () => {

    let { userAuth: { access_token, role } } = useContext(UserContext);

    let [orders, setOrders] = useState(null);

    return (
        <AnimationWrapper>
            <div className="flex flex-col items-center justify-center mt-6 gap-6 px-4 md:px-8">
                <h1 className="text-4xl font-gelasio mb-12 text-center">
                    {role ? "All Orders" : "Your Orders"}
                </h1>

                {
                    orders && Object.keys(orders).length > 0 ? (
                        <div></div>
                    ) : (
                        <NoDataMessage message="No orders to display" />
                    )
                }
            </div>
        </AnimationWrapper>
    );
}

export default Home;
