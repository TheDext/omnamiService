// import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSnacksLoadStatus, getSnacks, loadSnacksList } from "../../store/snacks";
import ProductSlider from "../productSlider/productSlider";
const Snacks = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const isLoading = useSelector(getSnacksLoadStatus());
    const snacks = useSelector(getSnacks());
    const dispatch = useDispatch();

    useEffect(() => {
        if (inView) {
            dispatch(loadSnacksList());
        }
    }, [inView]);

    return (
        <>
            <div className="_container productBlock" ref={ref}>
                <div className="_title">Закуски</div>
                {inView && (
                    <ProductSlider products={snacks} isLoading={isLoading} />
                )}
            </div>
        </>
    );
};

export default Snacks;
