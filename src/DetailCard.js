import React, { useState } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import "./App.css";

const styles = {
    display: "flex",
    height: 300,
};
const DetailCard = (product) => {
    const params = useParams();

    console.log("products", product?.product?.product);
    console.log("params", params);
    var mainData = [];
    product?.product?.product?.map((info) => {
        if (info.address === params.address) {
            mainData = info;
        }
    });

    return (
        <div>
            <img style={styles} src={mainData.image} alt="" />
            <p> {mainData.address}</p>
            <p> {mainData.range}</p>
            <p>Save up to ${mainData.saveup}</p>
            No of beds: {mainData.beds} <br />
            Available from:&nbsp;
            {mainData.availablefrom}
            <br />
            Tags:&nbsp;
            {mainData.tags?.map((tag) => (
                <span key={tag}>{tag},&nbsp;</span>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    product: state,
});

export default connect(mapStateToProps)(DetailCard);
