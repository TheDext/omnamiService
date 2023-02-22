// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPizzaList, getPizzaLoadStatus, getPizza } from "../../store/pizza";
import ProductSlider from "../productSlider/productSlider";
const Pizza = () => {
    const isLoading = useSelector(getPizzaLoadStatus());
    const pizza = useSelector(getPizza());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPizzaList());
    }, []);

    return (
        <>
            <div className="_container productBlock">
                <div className="_title">Пицца</div>
                <ProductSlider products={pizza} isLoading={isLoading} />
            </div>
        </>
    );
};

export default Pizza;
