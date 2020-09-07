import React, {Component} from "react";
export default class App extends Component {
    state = {
        count: 0
    }
    increment = () => {
        //1. get the option count
        const number = this.select.value * 1
        //2. get the original count, calculate the new count
        const count = this.state.count + number
        //3. update the count
        this.setState({count})
    }
    decrement = () => {
        //1. get the option count
        const number = this.select.value * 1
        //2. get the original count, calculate the new count
        const count = this.state.count - number
        //3. update the count
        this.setState({count})
    }
    incrementIfOdd = () => {
        //1. get the option count
        const number = this.select.value * 1
        //2. get the original count, calculate the new count
        const count = this.state.count
        //if satisfy requirement
        if (count % 2 === 1) {
            this.setState({count: count + number})
        }
        //3. update the count

    }
    incrementAsnc = () => {
        //1. get the option count
        const number = this.select.value * 1
        //2. get the original count
        const count = this.state.count
        //3. use timeout to update state
        setTimeout(() => {
            this.setState({count: count + number})
        },1000)

    }

    render () {
        const {count} = this.state
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref = {select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    &nbsp;
                    <button onClick = {this.increment}>+</button>&nbsp;
                    <button onClick= {this.decrement}>-</button>&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                    <button onClick = {this.incrementAsnc}>increment async</button>&nbsp;
                </div>
            </div>
        )
    }
}
