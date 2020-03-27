import React, {Component} from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    doLike = (Like) => {
        this.props.doLike(Like);
    };

    render() {
        return (
            <div>
                <p>{this.props.selected.title}</p>
                <p>{this.props.selected.description}</p>
                <p>{this.props.selected.id}</p>
                <p>{this.props.selected.content}</p>
                <p>{this.props.selected.date}</p>
                <p>Кількість: {this.props.selected.like}</p>
                <button onClick={(e) => this.doLike(this.props.selected.id)}>Like</button>
            </div>
        )
    }
}

export default Content;