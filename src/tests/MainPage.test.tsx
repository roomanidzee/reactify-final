import React from 'react';
import ReactDOM from 'react-dom';
import MainPageComponent from "../components/layout/MainPage";

it('создаётся без падений', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainPageComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});
