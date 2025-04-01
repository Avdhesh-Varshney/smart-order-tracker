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
                data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                if (role) {
                    data = data.filter(order => order.order_status !== 3 && order.order_status !== 4);
                }

                const groupedOrders = data.reduce((acc, order) => {
                    if (!acc[order.customer_id]) {
                        acc[order.customer_id] = [];
                    }
                    acc[order.customer_id].push(order);
                    return acc;
                }, {});

                setOrders(groupedOrders);
            })
            .catch(({ response }) => {
                console.log(response.data.error);
            })
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
                                Object.keys(orders).map((customerId, index) => (
                                    <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-full max-w-xs">
                                        <h2 className="text-xl font-semibold mb-2">{"Customer Name"}</h2>
                                        <ul>
                                            {
                                                orders[customerId].map(order => (
                                                    <li key={order._id} className="border-b py-2">
                                                        <p>{order.title}</p>
                                                        <p>Status: {order.order_status}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
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
