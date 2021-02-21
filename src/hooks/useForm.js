// write your custom hook here to control your checkout form
import {useLocalStorage} from './useLocalStorage'


export const useForm = (initialValues) => {
    const [values, setValues] = useLocalStorage('form values', initialValues)
    const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage('success message', false);

    const handleChanges = e => {
        setValues({
            ...values,
             [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    }

    return [ values, handleChanges, handleSubmit, showSuccessMessage]
}