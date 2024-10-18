import React from "react";
import SportHeader from "../../components/SportHeader";

const SportPage = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <SportHeader />
            <div className="flex-grow flex items-center justify-center">
                <h1 className="text-5xl font-bold">Sport Page</h1>
            </div>
        </div>
    );
};

export default SportPage;
