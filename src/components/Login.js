import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions'


class Login extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        success: false,
        isLoggedIn: false
    }

    handleInputEmail = (event) => {
        this.setState({ email: event.target.value, error: "" })
    }
    handleInputPassword = (event) => {
        this.setState({ password: event.target.value, error: "" })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user.login && nextProps.user.login.isAuth) {
            return { isLoggedIn: true };
        } else {
            return { isLoggedIn: false };
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.isLoggedIn) {
            this.props.history.push('/dashboard')
        }
    }
    ValidateForm() {
        if (this.state.email === '') {
            this.setState({ error: "Please Enter Email to Continue" })
            return false;
        }
        if (this.state.password === '') {
            this.setState({ error: "Please Enter Password to Continue" })
            return false;
        }
        if (this.state.email !== '' && this.state.password !== '') {
            this.setState({ error: "" })
            return true;
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        let isFormValid = this.ValidateForm();
        if (isFormValid) {
            this.props.dispatch(loginUser(this.state))
        }
    }

    render() {
        return (
            <section className="min-vh-100">
                <div>
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                <h2 className="my-4 text-center">Log In here</h2>
                                <div className="px-2">
                                    <form onSubmit={this.submitForm} className="justify-content-center">
                                        <div className="form-group my-3">
                                            <input
                                                type="email"
                                                placeholder="Enter your mail"
                                                value={this.state.email}
                                                onChange={this.handleInputEmail}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group my-3">
                                            <input
                                                type="password"
                                                placeholder="Enter your password"
                                                value={this.state.password}
                                                onChange={this.handleInputPassword}
                                                className="form-control"
                                            />
                                        </div>
                                        <p className="text-danger">{this.state.error}{this.props.user.login ? this.props.user.login.error : ""}</p>
                                        <button type="submit" className="btn btn-primary my-4">Log In</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)

