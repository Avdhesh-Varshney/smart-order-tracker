import { useContext, useEffect, useState } from "react";
import AnimationWrapper from "../common/page-animation";
import { UserContext } from "../App";
import NoDataMessage from "../components/noDataMessage.component";
import axios from "axios";

const Home = () => {

    let { userAuth: { access_token, role } } = useContext(UserContext);

    let [orders, setOrders] = useState(null);

    const fetchOrders = () => {
        axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/api/order/get", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(({ data }) => {
                setOrders(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        if (access_token) {
            fetchOrders();
        }
    }, [access_token]);

    return (
        <AnimationWrapper>
            <div className="flex flex-col items-center justify-center mt-6 gap-6 px-4 md:px-8">
                <h1 className="text-4xl font-gelasio mb-12 text-center">
                    {role ? "All Orders" : "Your Orders"}
                </h1>

                {
                    orders && Object.keys(orders).length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 w-full max-w-7xl justify-center place-items-center">
                            {
                                orders.map((order, index) => (
                                    <div key={index} className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
                                        <h2 className="text-xl font-semibold">{order.title}</h2>
                                        <p className="text-gray-600">{order.des}</p>
                                        <p className="text-gray-500">Status: {order.order_status}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <NoDataMessage message="No orders to display" />
                    )
                }
            </div>
        </AnimationWrapper>
    );
}

export default Home;
