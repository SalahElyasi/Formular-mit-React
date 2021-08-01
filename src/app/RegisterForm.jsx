import React from 'react';
import { NameInput } from './NameInput';
import { TShirtSizeSelect } from './TShirtSizeSelect';
import { LunchCheckbox } from './LunchCheckbox';


export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tShirtSize: 'w-s',
            lunch: false,
            formSubmitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const value = event.target.name === 'lunch' ? event.target.checked : event.target.value;
        /*let value;
        if (event.target.name === 'lunch') {
            value = event.target.checked;
        } else {
            value = event.target.value;
        }
        */
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit() {
        console.log(this.state);
        this.setState({
            formSubmitted: true
        });
    }

    
    
    render() {
        if (!this.state.formSubmitted) {

        return (
            <div>
                
                <NameInput value={this.state.name} onChange={this.handleChange} />
                <br />
                <TShirtSizeSelect value={this.state.name} onChange={this.handleChange} />
                <br />
                <LunchCheckbox value={this.state.name} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Anmelden</button>
            </div>
        )
        } else {
            return (
                <div>
                    <h2>Du hast erfolgreich zum Event angemeldet!</h2>
                </div>
            )
        }
    }
}