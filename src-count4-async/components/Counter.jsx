import React, {Component} from "react";
import PropTypes from 'prop-types'


export default class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsnc: PropTypes.func.isRequired
    }
    increment = () => {
        //1. get the option count
        const number = this.select.value * 1
        //2. call store to update the state
        this.props.increment(number)
    }
    decrement = () => {
        //1. get the option count
        const number = this.select.value * 1
        this.props.decrement(number)
    }
    incrementIfOdd = () => {
        //1. get the option count
        const number = this.select.value * 1
        //2. get the original count, calculate the new count
        const count = this.props.count
        //if satisfy requirement
        if (count % 2 === 1) {
            this.props.increment(number)
        }
        //3. update the count
    }
    incrementAsnc = () => {
        //1. get the option count
        const number = this.select.value * 1
        this.props.incrementAsnc(number)
    }

    render () {
        const {count} = this.props
       // debugger
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