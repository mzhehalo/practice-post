// import React from "react";
// import Post from "./Post";
// import css from './post.module.css'
// import PostMoreInfo from './PostMoreInfo's

class PostContainer extends React.Component {
    state = {
        arrayMobile: [
            {name: 'Iphone 7', price: 400, img: 'https://hotline.ua/img/tx/158/1580463775.jpg', btnStatus: true, id: 1},
            {
                name: 'Xiaomi 9',
                price: 350,
                img: 'https://hotline.ua/img/tx/211/211559105_s265.jpg',
                btnStatus: true,
                id: 2
            },
            {
                name: 'Samsung',
                price: 300,
                img: 'https://stylus.ua/thumbs/568x568/e4/8e/1007855.jpeg',
                btnStatus: true,
                id: 3
            }
        ],

        isStatus: false,
        idObj: '',
    };

    changeStatus = (id) => {
        this.state.isStatus || this.setState({isStatus: !this.state.isStatus});
        this.setState({idObj: id-1});
        console.log(this.state.idObj)
    };

    render() {
        const {arrayMobile, isStatus, idObj} = this.state;
        return (
            <div className={css.wrapper}>
                <div className={css.div1}>
                    {
                        arrayMobile.map((mobile) => {
                            return <Post {...mobile} onClick={this.changeStatus}/>
                        })
                    }
                </div>
                <div>
                    {isStatus && <PostMoreInfo name={arrayMobile[idObj].name} price={arrayMobile[idObj].price}
                                               img={arrayMobile[idObj].img}/>}
                </div>
            </div>
        )
    }
}

export default PostContainer;