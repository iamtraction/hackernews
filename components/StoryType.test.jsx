import React from "react";
import ReactDOM from "react-dom";

import StoryType from "./StoryType";

it("renders without crashing", () => {
    ReactDOM.render(
        <StoryType
            name="New"
            selected="new"
            handler={ () => {} }
        />,
        document.createElement("div")
    );
});
