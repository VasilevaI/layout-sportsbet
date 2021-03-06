import React from 'react';
import reducers from "./redux/index";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from "./components/footer/Footer"

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container pt-5">
        {props.children}
      </div>
      <Footer></Footer>
    </>
  )
}


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Layout>
                <Home/>
              </Layout>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
