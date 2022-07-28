import {memo} from 'react'
import styles from './Form.module.scss'
import {Modal} from '@UI'
import {Form as FormType} from '@apiModels/form'


type FormProps = {
    form: FormType
}

export const Form = memo<FormProps>((props) => {

    const {
        form
    } = props

    return (
        <Modal className={styles.main}>
            <h1>{form.data.name}</h1>
            <p>{form.data.description}</p>
        </Modal>
    )
})
