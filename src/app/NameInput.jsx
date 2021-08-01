import React from 'react';


export class NameInput extends React.Component {
    render() {
        return (
            <label>
                    Name:
                <input type="text" 
                    name= "name"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </label>
        )
    }
}