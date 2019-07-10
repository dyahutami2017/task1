import React from 'react';
import reactDOM from 'react-dom';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return <div>Heloo</div>
    }
}

reactDOM.render(<App/>,document.getElementById('root'));