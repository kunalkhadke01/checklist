import React, { Component } from 'react';
import { connect } from 'react-redux'

class DetailList extends Component {

    state = {
        editing: false

    }
    // handleediting = (event) => {
    //     return this.setState({ editing: true })
    // }
    handlechange = (e) => {
        { console.log(this.props.input.price) }
        var change = e.target.value
        this.setState({ changes: change })
        this.setState({ editing: true })
    }

    render() {
        console.log(this.props.input.price)
        var viewStyle = {}
        var editStyle = {}
        if (this.state.editing) {
            viewStyle.display = "none"
        }
        else {
            editStyle.display = "none"
        }
        return (
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr class="success">
                            <th>ADDRESS</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>CITY</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="success">
                            <td>{this.props && this.props.location && this.props.location.value ? this.props.location.value.Address1 : ""}</td>
                            <td>{this.props && this.props.location && this.props.location.value ? this.props.location.value.Country : ""}</td>
                            <td>{this.props && this.props.location && this.props.location.value ? this.props.location.value.State : ""}</td>
                            <td>{this.props && this.props.location && this.props.location.value ? this.props.location.value.City : ""}</td>
                            <td>
                                <div>
                                    {console.log(this.props.input)}
                                    {this.props && this.props.input ? this.props.input[0].map((product, index) => {
                                        return (
                                            <div >
                                                <li class="list-group-item" key={product.id} >
                                                    <h3>{product.value}</h3>
                                                    <div
                                                    //  onClick={this.handleediting.bind(this)}
                                                    >
                                                        <h6>Set your price</h6>
                                                        <input style={viewStyle} color="primary" type="text" key={product.id}
                                                            onChange={this.handlechange}
                                                            value={product.price}
                                                        />

                                                        <input style={editStyle} color="primary" type="text" key={product.id}
                                                            // onChange={this.handlechange}
                                                            value={this.changes}

                                                        />{"Rs"}
                                                    </div>
                                                </li>

                                            </div>
                                        )

                                    }) : ""}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.main
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => {
            dispatch({ type: "REMOVE_ITEM", id: id })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailList);