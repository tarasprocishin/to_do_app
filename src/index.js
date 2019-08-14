import React from 'react';
import ReactDOM from 'react-dom';
import Router from './scenes/router'
import './index.css';


class App extends React.Component {
    render(){
        return <Router />
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
