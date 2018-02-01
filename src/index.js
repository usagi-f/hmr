import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const renderContainer = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#root')
    )
};

renderContainer(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        renderContainer(App);
    })
}
