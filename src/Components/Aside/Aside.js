import React, {Component} from 'react';
import Post from "./Post";

class Aside extends Component{
    constructor(props) {
        super(props);
    }

    render() {
            return (
            <div style={{background: "#009246"}}>
                <Post onClick={this.props.buttonFunc} arrContent = {this.props.state}/>
            </div>
        )
    }
}

export default Aside;