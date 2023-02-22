import React from "react";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import { getOrdersList } from "../../../store/users";

const Orders = () => {
    // const orders = useSelector(getOrdersList());
    // console.log(orders);
    return <h1>Список заказов пуст</h1>;
};

Orders.propTypes = {
    data: PropTypes.object
};

export default Orders;
