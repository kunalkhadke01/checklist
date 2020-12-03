import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import ListView from './Listview';
import DetailList from './detailList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store.js';
import { Provider } from 'react-redux'

// const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <div className="App-name">

            <nav className="Header">
                <h1>Productmania</h1>
            </nav>
            <Router>
                <Route exact path="/" component={ListView} />
                <Route path="/form" component={App} />
                <Route path="/detaillist" component={DetailList} />
                {/* <ListView />
            <App /> */}
            </Router>
        </div>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
