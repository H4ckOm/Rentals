import React, { useState, useEffect } from "react";
import "./App.css";
import getInfo from "./firebase";

const Card = ({ address, availablefrom, beds, image, range, saveup, tags }) => (
    <div className="overflow-hidden relative max-w-xs rounded-xl shadow-xl">
        <img className="w-full" src={image} alt="" />
        <button className="absolute top-3 right-3 p-1 text-green-500 bg-white rounded-full shadow group">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-current stroke-2 group-hover:fill-current"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
        </button>
        <div className="absolute top-3 left-3 px-3 text-sm font-semibold text-white bg-green-400 rounded-full py-[6px]">
            {range}
        </div>
        <div className="py-4 px-6">
            <p className="mb-1 text-base text-gray-700">
                Save up to{" "}
                <span className="font-medium text-[#FF3D00]">${saveup}</span>
            </p>
            <div className="text-xl font-bold">{address}</div>
        </div>
        <div className="px-6 pb-2 text-sm">
            <div className="flex items-center mb-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 mr-1 fill-[#FF6E40]"
                    viewBox="0 0 24 24"
                >
                    <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z" />
                </svg>
                <span className="pr-2 mr-3 border-r-2">{beds}</span>
                Available from&nbsp;
                <span className="font-medium text-[#FF3D00]">
                    {availablefrom}
                </span>
            </div>
            <div className="pt-1 -mr-2 text-xs">
                {tags?.map((tag) => (
                    <span
                        className="inline-block py-1 px-3 mr-2 mb-2 font-semibold text-gray-700 bg-gray-200 rounded-full"
                        key={tag}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const App = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        getInfo().then((list) => setInfo([...list]));
    }, []);

    return (
        <div className="flex justify-center m-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {info.map((card) => (
                    <Card {...card} key={card.address} />
                ))}
            </div>
        </div>
    );
};

export default App;
