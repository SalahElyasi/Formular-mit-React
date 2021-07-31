import React from 'react';


export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <input type="text" 
                value={this.state.name}
                onChange={this.handleChange}
            />
        )
    }
}