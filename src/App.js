import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
//import { CAMPSITES } from './shared/campsites';

const store = ConfigureStore();

class App extends Component {
    /* constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        }
    } */



    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        {/*     <Navbar dark color="primary">
                        <div className="container">
                            <NavbarBrand href="/">NuCamp</NavbarBrand>
                        </div>
                    </Navbar>
                    <Directory campsites={this.state.campsites} /> */}
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;