import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnimationWrapper from "../common/page-animation";

import NoDataMessage from "../components/noDataMessage.component";

const OrderStatus = () => {

    const { orderId } = useParams();

    let [orderDetails, setOrderDetails] = useState(null);

    const fetchOrderDetails = () => {
        axios.get(import.meta.env.VITE_SERVER_DOMAIN + `/api/order/get/${orderId}`)
            .then(({ data }) => {
                setOrderDetails(data[0]);
            })
            .catch(({ response }) => {
                console.log(response.data.error);
            })
    }

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    return (
        <AnimationWrapper>
            {
                orderDetails ? (
                    <div className="flex flex-col items-center justify-center mt-6">
                        <h1 className="text-2xl md:text-4xl font-gelasio mb-4 capitalize">
                            {orderDetails.title}
                        </h1>

                        <p className="text-gray-500 mb-8">
                            {new Date(orderDetails.created_at).toDateString()}
                        </p>

                        <p className="text-3xl mb-20 text-gray-700">
                            {orderDetails.des}
                        </p>
                    </div>
                ) : (
                    <NoDataMessage message={"No order details to display!"} />
                )
            }
        </AnimationWrapper>
    );
}

export default OrderStatus;
