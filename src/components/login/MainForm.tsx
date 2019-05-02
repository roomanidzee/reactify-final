import * as Yup from 'yup';
import {withFormik} from 'formik';
import {FormProps, FormValues} from "./PropsAndValues";
import InnerForm from "./InnerForm";

const MainForm = withFormik<FormProps, FormValues>({

    mapPropsToValues: props => {
        return {
            login: '',
            password: ''
        };
    },

    handleSubmit: (values, { setSubmitting }) => {

        alert("Данные сохранены!");
        setSubmitting(true);

    },

    validationSchema: Yup.object().shape({

        login: Yup.string()
                  .email("Неправильно введён адрес электронной почты"),

        password: Yup.string()
                     .max(10)

    })

})(InnerForm);

export default MainForm;
