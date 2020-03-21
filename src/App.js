import React, {Component} from 'react';
import './App.css';
import Aside from "./Components/Aside/Aside";
import Content from "./Components/Content/Content";

class App extends Component {

    state = {
        arrContent: [
            {
                title: 'Title 1',
                id: 1,
                content: 'content1',
                description: 'something1',
                date: '01.01.20',
                like: 0
            },
            {
                title: 'Title 2',
                id: 2,
                content: 'content2',
                description: 'something2',
                date: '01.01.20',
                like: 0
            },
            {
                title: 'Title 3',
                id: 3,
                content: 'content3',
                description: 'something3',
                date: '01.01.20',
                like: 0
            },
            {
                title: 'Title 4',
                id: 4,
                content: 'content4',
                description: 'something4',
                date: '01.01.20',
                like: 0
            }
        ],
        selected: null,
        renderCmp: true,
    };

    // componentDidMount() {
    //     setInterval(()=> console.log('didMount '+ this.state.arrContent[0].title),2000)
    // }

    // componentWillUnmount() {
    //     console.log('will Mount')
    // }

    handleClick = (post) => {
        // this.setState({selected: post});
        this.setState({selected: post});
        // let newArr2 = this.state.arrContent.map(obj => {
        //     return (
        //         obj.id === post.id ? {...obj} : obj)
        // });
        //
        // this.setState({arrContent: newArr2});
        // console.log(newArr2)
        console.log(post)
    };

    doLike = (arrId) => {
        console.log(arrId);

        let newArr = this.state.arrContent.map(obj => {
            return (
                obj.id === arrId ? {...obj, like: obj.like + 1} : obj)
        });

        this.setState({arrContent: newArr});
        // this.setState({selected: this.state.arrContent.like});

        console.log('click')
    };

    render() {
        return (
            <div className="wrapper">
                <div className='bg-post'>
                    <Aside state={this.state.arrContent} buttonFunc={this.handleClick}/>
                </div>

                <div className={'bg-content'}>
                    {this.state.selected &&
                    <Content selected={this.state.selected} doLike={this.doLike}
                             state={this.state.arrContent}/>}
                </div>
            </div>
        )
    }
}

export default App;