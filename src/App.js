import React, { useState, useEffect } from "react";
import "./App.css";
import getInfo from "./firebase";
import { connect } from "react-redux";
import Card from "./card";
import { store } from "./store";
import { saveState } from "./localStorage";
import { Provider } from "react-redux";

store.subscribe(() => {
    saveState({
        card: store.getState().card,
    });
});

const App = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        getInfo().then((list) => setInfo([...list]));
    }, []);

    return (
        <Provider store={store}>
            <div className="flex justify-center m-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {info.map((card) => (
                        <Card {...card} key={card.address} />
                    ))}
                </div>
            </div>
        </Provider>
    );
};

function mapStateToProps(store) {
    const { card } = store;
    return { card: card };
}

export default connect(mapStateToProps)(App);
