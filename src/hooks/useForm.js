import { useState } from "react";

function useForm(callback) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);

    function validate(event, name, value) {
        switch (name) {
            case 'name':
                if (!value)
                    setErrors({
                        ...errors,
                        name: event.target.validationMessage
                    })
                else if (value.length < 2 || value.length > 40)
                    setErrors({
                        ...errors,
                        name: event.target.validationMessage
                    })
                else if (!new RegExp("^[A-Za-zА-Яа-я -]+$").test(value)) {
                    setErrors({
                        ...errors,
                        name: "Введены некорректные данные. Поле может содержать только латиницу, кириллицу, пробел или дефис"
                    })
                }
                else {
                    setErrors({ ...errors, name: '' });
                }
                break;
            case 'email':
                if (!value)
                    setErrors({
                        ...errors,
                        email: event.target.validationMessage
                    })
                else if (!new RegExp("/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i").test(value))
                    setErrors({
                        ...errors,
                        email: event.target.validationMessage
                    })
                else {
                    setErrors({ ...errors, email: '' })
                }
                break;
            case 'password':
                if (!value)
                    setErrors({
                        ...errors,
                        password: event.target.validationMessage
                    })
                else {
                    setErrors({ ...errors, password: '' })
                }
                break;
            default:
                break;
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        validate(event, name, value);

        setIsValid(event.target.closest('form').checkValidity());

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if ((!errors.name || errors.name === '') && (!errors.email || errors.email === '') && (!errors.email || errors.password === '')) {
            callback();
        }
    }

    return {
        isValid,
        values,
        errors,
        handleChange,
        handleSubmit
    };
}

export default useForm;
