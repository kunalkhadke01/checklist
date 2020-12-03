import React, { Component } from 'react'
import './App.css'
import CheckBox from './checkBox'
import { connect } from 'react-redux'
import { Input } from '@material-ui/core'

// import { addTodo } from './action';

class ListView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            electroeq: [
                { id: 1, value: "Resistors", price: 120, isChecked: false },
                { id: 2, value: "Amplifiers LM741", price: 160, isChecked: false },
                { id: 3, value: "Timers NE555", price: 180, isChecked: false },
                { id: 4, value: "Microcontrollers AT89S52", price: 150, isChecked: false },
                { id: 4, value: "Counters CD4017", price: 200, isChecked: false },
                { id: 4, value: "Motor Drivers L293D", price: 820, isChecked: false },
                { id: 4, value: "Battery", price: 1500, isChecked: false }
            ],
            currentvalue: ""
        }
    }



    handleAllChecked = (event) => {
        let electroeq = this.state.electroeq
        electroeq.forEach(fruite => fruite.isChecked = event.target.checked)
        this.setState({ electroeq: electroeq })
    }

    handleCheckChieldElement = (event) => {
        let electroeq = this.state.electroeq
        electroeq.forEach((fruite) => {
            if (fruite.value === event.target.value) {
                fruite.isChecked = event.target.checked
            }
        })
        // console.log(electroeq)
        const value = electroeq.filter(({ isChecked }) => {
            return isChecked == true
        }
        )
        this.props.onhandle(value)
        console.log(value)
        this.setState({ electroeq: electroeq })
        this.setState({ currentvalue: value })
    }



    render() {
        // const { value } = this.props
        console.log(this.props)
        return (
            <div className="List">
                <h1 className="App-link">Market Your Basic Electronic Components With Poductmania</h1>
                <input type="checkbox" onClick={this.handleAllChecked} value="checkedall" /> Check / Uncheck All
                <ul class="list-group">
                    {console.log("hello")}
                    {
                        this.state.electroeq.map((electro, index) => {
                            return (<div>
                                <CheckBox handleCheckChieldElement={this.handleCheckChieldElement} {...electro} />
                            </div>
                            )
                        })
                    }
                </ul>
                <button style={{ backgroundColor: "lightblue", width: 100, float: "right" }} onClick={() => {
                    this.props.onSubmit(this.props.input)
                    this.props.history.push("/form")
                }}>Next</button>
                {/* {this.state.currentvalue} */}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onhandle: (value) => { dispatch({ type: "SET_INPUT", value: value }) },
        onSubmit: (input) => {
            // let obj = {}
            // const inputValue = input
            // obj = { inputValue }
            dispatch({ type: "ADD_INPUT", value: input })
            // console.log(obj)

            return input
            console.log(this.state.currentvalue)
        }
    }
}
const mapStateToProps = (state) => {
    return {
        input: state.input
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListView)