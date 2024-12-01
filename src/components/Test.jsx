import React from "react"

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "hello world!",
        };
    }

    render() {
        return <h1>{this.state.message}</h1>
    };
};

export default Test;