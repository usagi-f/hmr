import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import App from './app';

const renderContainer = Component => {
    render(
        <AppContainer>
            <Component state={store.getState()} />
        </AppContainer>,
        document.querySelector('#root')
    )
};

renderContainer(App);

store.subscribe(() => renderContainer(App))

if (module.hot) {
    module.hot.accept('./app', () => {
        renderContainer(App);
    })
}
