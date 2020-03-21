import React, {Component} from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    doLike = (Like) => {
        this.props.doLike(Like);
        console.log(Like);
        // this.setState(this.props.content.like)
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <p>{this.props.selected.title}</p>
                <p>{this.props.selected.description}</p>
                <p>{this.props.selected.id}</p>
                <p>{this.props.selected.content}</p>
                <p>{this.props.selected.date}</p>
                <p>Кількість: {this.props.selected.like}</p>
                {/*{this.props.state.map(like =>)}*/}
                {/*<p>{this.props.likes}</p>*/}
                <button onClick={(e) => this.doLike(this.props.selected.id)}>Like</button>
                {/*{console.log(this.props.state.like)}*/}
            </div>
        )
    }
}

export default Content;