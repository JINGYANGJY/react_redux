import React from "react";

import {increment, decrement, incrementAsnc} from '../redux/action'
import {connect} from 'react-redux'
import Counter from '../components/Counter'

export default connect(
    state => ({count: state}),
    {increment, decrement, incrementAsnc}
)(Counter)