import { useState } from "react";
import AnimationWrapper from "../common/page-animation";
import { useParams } from "react-router-dom";
import NoDataMessage from "../components/noDataMessage.component";

const OrderStatus = () => {

    const {orderId} = useParams();

    let [orderDetails, setOrderDetails] = useState(null);
    return (
        <AnimationWrapper>
            {
                orderDetails ? (
                    <div>
                        Displaying the order details for order ID: {orderId}
                    </div>
                ) : (
                    <NoDataMessage message={"No order details to display!"} />
                )
            }
        </AnimationWrapper>
    );
}

export default OrderStatus;
