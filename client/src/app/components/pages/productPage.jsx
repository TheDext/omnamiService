import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const ProductPage = ({ category }) => {
    const prod = useSelector((state) => state[category].entities);
    console.log("prod", prod);
    return <h1>{category}</h1>;
};
ProductPage.propTypes = {
    category: PropTypes.string
};
export default ProductPage;
