import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions'


class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(getUsers())
    }
    render() {
        let tableBody = null;
        if (this.props.userLists.users && this.props.userLists.users.length > 0) {
            tableBody = this.props.userLists.users.map((item) => {
                return <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.phoneNo}</td>
                </tr>
            })
            return (
                <div className="container-fluid text-center">
                    <h4 className="my-5">Dashboard</h4>
                    <table className="table table-hover py-3">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Phone No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody}
                        </tbody>
                    </table>
                </div>
            );
        }
        else {
            return <div>
                Loading...
    </div>
        }
    }
}
function mapStateToProps(state) {
    return {
        userLists: state.userLists
    }
}

export default connect(mapStateToProps)(Dashboard)

