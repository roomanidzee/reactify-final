import React from "react";
import {InjectedFormikProps} from "formik";
import {FormProps, FormValues} from "./PropsAndValues";
import {Button, Form, Icon, Input} from "antd";
import Warning from "./Warning";

const InnerForm: React.FunctionComponent<InjectedFormikProps<FormProps, FormValues>> = (props) => {

    const {
        values,
        touched,
        handleSubmit,
        handleChange,
        errors,
        isSubmitting
    } = props;

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Item>
                <Input
                    onChange={handleChange}
                    value={values.login}
                    type="email"
                    name="email"
                    placeholder="Email"
                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                />
                {errors.login && touched.login && <Warning message={errors.login} />}
            </Form.Item>

            <Form.Item>
                <Input
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                />
                {errors.password &&
                touched.password && <Warning message={errors.password} />}
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={isSubmitting}
                 >
                    Войти
                </Button>
            </Form.Item>

        </Form>
    );

};

export default InnerForm;
