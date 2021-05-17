import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    return <div>
        <div>
            <h1>Login</h1>
        </div>
        <LoginReduxForm onSubmit={(formData) => console.log(formData)}/>
    </div>
}

const LoginForm = (props) => {
    return (
        <div onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name="login" component="input"/>
            </div>
            <div>
                <Field placeholder="Password" name="password" component="input"/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input"/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;