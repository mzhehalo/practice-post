import React, {Component} from "react";
import "../../App.css";

class Post extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = (post) => {
        this.props.onClick(post)
    };

    render() {
        return (
            <div className='stylePost'>
                {this.props.arrContent.map(post => <button
                    onClick={(e) => this.handleClick(post)}>{post.title}</button>)}
                {/*<button onClick={(e) => this.handleClick(this.props.arrContent[0])}>{this.props.arrContent[0].title}</button>*/}
                {/*<button onClick={(e) => this.handleClick(this.props.arrContent[1])}>{this.props.arrContent[1].title}</button>*/}
                {/*<button onClick={(e) => this.handleClick(this.props.arrContent[2])}>{this.props.arrContent[2].title}</button>*/}
                {/*<button onClick={(e) => this.handleClick(this.props.arrContent[3])}>{this.props.arrContent[3].title}</button>*/}
            </div>
        )
    }
}

export default Post;