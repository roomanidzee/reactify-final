import ReactDOM from "react-dom";
import React from "react";
import LoginComponent from "../components/login/Login";

it('создаётся без падений', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});
