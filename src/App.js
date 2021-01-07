import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

     handleChange(event) {
        const { name, value, type, checked } = event.target
         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    } 
    // USE EITHER THE ABOVE CODE OR BELOW FOR THE FORM

      // handleChange(event) {
      //     this.setState({
      //         [event.target.name]: event.target.value
      //     })
      // }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />

                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <h3>{this.state.firstName} {this.state.lastName}</h3>
            {
                /**
                 * Other useful form elements
                 * <textarea /> element
                 * <input type="checkbox" />
                 * <input type="radio" />
                 * <select> and <option> elements
                 * */
                }

                <textarea 
                    value={"Some default value"}
                    onChange={this.handleChange}
                />
                <br />
                
                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly? 
                </label>
                <br />
                 <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === 'male'}
                        onChange={this.handleChange}
                    /> Male 
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === 'female'}
                        onChange={this.handleChange}
                    /> Female
                </label>
                <h3>You are a {this.state.gender}</h3>

            </div>
        )
    }
}

export default App
