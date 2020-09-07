import React from "react";
import ReactDOM from "react-dom";

import Story from "./Story";

it("renders without crashing", () => {
    ReactDOM.render(
        <Story id={ 24396250 } />,
        document.createElement("div")
    );
});
