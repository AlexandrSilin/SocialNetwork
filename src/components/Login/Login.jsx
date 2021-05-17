import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../formsControls/formsControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(20);
const minLength = minLengthCreator(6);

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
                <Field placeholder="Login" name="login" component={Input}
                       validate={[requiredField, maxLength, minLength]}/>
            </div>
            <div>
                <Field placeholder="Password" name="password" component={Input}
                       validate={[requiredField, maxLength, minLength]}/>
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