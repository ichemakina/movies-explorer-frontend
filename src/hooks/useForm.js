import { useState } from "react";
import { REGEX_EMAIL, REGEX_NAME } from "../utils/constants";

function useForm(callback) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);

    function validate(event, name, value) {
        switch (name) {
            case 'name':
                if (!value) {
                    setErrors({
                        ...errors,
                        name: event.target.validationMessage
                    });
                    setIsValid(false);
                }
                else if (value.length < 2 || value.length > 40) {
                    setErrors({
                        ...errors,
                        name: event.target.validationMessage
                    });
                    setIsValid(false);
                }
                else if (!REGEX_NAME.test(value)) {
                    setErrors({
                        ...errors,
                        name: "Введены некорректные данные. Поле может содержать только латиницу, кириллицу, пробел или дефис"
                    });
                    setIsValid(false);
                }
                else {
                    setErrors({ ...errors, name: '' });
                    if (isNotOtherErrors("name"))
                        setIsValid(true);
                }
                break;
            case 'email':
                if (!value) {
                    setErrors({
                        ...errors,
                        email: event.target.validationMessage
                    });
                    setIsValid(false);
                }
                else if (!REGEX_EMAIL.test(value)) {
                    setErrors({
                        ...errors,
                        email: "Введены некорректные данные"
                    });
                    setIsValid(false);
                }
                else {
                    setErrors({ ...errors, email: '' });
                    if (isNotOtherErrors("email"))
                        setIsValid(true);
                }
                break;
            case 'password':
                if (!value) {
                    setErrors({
                        ...errors,
                        password: event.target.validationMessage
                    });
                    setIsValid(false);
                }
                else {
                    setErrors({ ...errors, password: '' });
                    if (isNotOtherErrors("password"))
                        setIsValid(true);
                }
                break;
            default:
                break;
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        validate(event, name, value);

        setValues({
            ...values,
            [name]: value
        });
    }

    const isNotOtherErrors = (value) => {
        if (value === 'name')
            return (!errors.email || errors.email === '') && (!errors.password || errors.password === '');

        if (value === 'email')
            return (!errors.name || errors.name === '') && (!errors.password || errors.password === '');

        if (value === 'password')
            return (!errors.name || errors.name === '') && (!errors.email || errors.email === '');

        return true;
    }

    const isNotAnyErrors = () => {
        return (!errors.name || errors.name === '') && (!errors.email || errors.email === '') && (!errors.password || errors.password === '');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isNotAnyErrors()) {
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
