import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedClass, reload) {
    class AuthenticationCheck extends Component {

        state = {
            loading: true
        }

        componentDidMount() {
            if (this.props.location.pathname !== "/") {
                if (!this.props.user || !(this.props.user.login && this.props.user.login.isAuth)) {
                    this.props.history.push('/');
                }
                else {
                    this.setState({ loading: false })
                }
            }
            else {
                this.setState({ loading: false })
            }
        }

        render() {
            if (this.state.loading) {
                return <div className="loader">Loading...</div>
            }
            return (
                <ComposedClass {...this.props} user={this.props.user} />
            )
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user
        }
    }
    return connect(mapStateToProps)(AuthenticationCheck)

}