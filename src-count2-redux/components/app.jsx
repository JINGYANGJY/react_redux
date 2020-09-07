import React, {Component} from "react";
import * as actions from '../redux/action'
export default class App extends Component {

    increment = () => {
        //1. get the option count
        const number = this.select.value * 1
        //2. call store to update the state
        this.props.store.dispatch(actions.increment(number))
    }
    decrement = () => {
        //1. get the option count
        const number = this.select.value * 1
        this.props.store.dispatch(actions.decrement(number))
    }
    incrementIfOdd = () => {
        //1. get the option count
        const number = this.select.value * 1
        //2. get the original count, calculate the new count
        const count = this.props.store.getState()
        //if satisfy requirement
        if (count % 2 === 1) {
            this.props.store.dispatch(actions.increment(number))
        }
        //3. update the count

    }
    incrementAsnc = () => {
        //1. get the option count
        const number = this.select.value * 1
        //3. use timeout to update state
        setTimeout(() => {
            this.props.store.dispatch(actions.increment(number))
        },1000)

    }

    render () {
        const count = this.props.store.getState()
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
