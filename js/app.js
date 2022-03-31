'use strict';

class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { liked: false };
    }

    render(){
        if (this.state.liked){
            return 'you liked this.';
        }

        return React.createElement(
            'button', 
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }

}

const domContainer = document.querySelector('#myApp');
ReactDOM.render(React.createElement(LikeButton), domContainer);

