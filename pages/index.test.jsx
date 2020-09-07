import React from "react";
import ReactDOM from "react-dom";

import Home from "./";

it("Home page renders without crashing", () => {
    ReactDOM.render(
        <Home />,
        document.createElement("div")
    );
});
