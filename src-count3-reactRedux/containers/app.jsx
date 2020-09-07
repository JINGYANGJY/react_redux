import React from "react";

import {increment, decrement} from '../redux/action'
import {connect} from 'react-redux'
import Counter from '../components/Counter'

export default connect(
    state => ({count: state}),
    {increment: increment, decrement: decrement}
)(Counter)