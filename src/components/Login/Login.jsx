import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../formsControls/formsControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from "../formsControls/formsControls.module.css";

const maxLength = maxLengthCreator(20);
const minLength = minLengthCreator(6);

const Login = (props) => {
    return props.isAuth ? <Redirect to='profile'/> : (
        <div>
            <h1>Login</h1>
            <LoginReduxForm
                onSubmit={(formData) => props.login(formData.email, formData.password, formData.rememberMe)}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name="email" component={Input}
                       validate={[requiredField, maxLength, minLength]}/>
            </div>
            <div>
                <Field placeholder="Password" name="password" type="password" component={Input}
                       validate={[requiredField, maxLength, minLength]}/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input"/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
            {props.error ? <div className={classes.formSummaryError}>
                {props.error}
            </div> : ""}
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => dispatch(login(email, password, rememberMe)),
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default connect(mapStateToProps, mapDispatchToProps)(Login);