import React from 'react';


export class LunchCheckbox extends React.Component {
    render() {
        return (
            <label>
                    Checkbox:
                <input type="Checkbox" 
                    name= "lunch"
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
            </label>
        )
    }
}