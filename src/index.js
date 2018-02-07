import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import store from './store';
import App from './app';

const renderContainer = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
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
