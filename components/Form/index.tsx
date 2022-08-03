import {memo} from 'react'
import styles from './Form.module.scss'
import {Divider, Modal, Loader} from '@UI'
import {Form as FormType} from '@apiModels/form'
import {InputElement} from '@components/Form/InputElement'
import useForm from '@components/Form/useForm'
import useResultFetching from '@components/Form/useResultFetching'
import classNames from 'classnames'


type FormProps = {
    form: FormType
}

export const Form = memo<FormProps>((props) => {

    const {
        form
    } = props

    const {
        submit,
        form: formData,
        formChange,
        optionTranslators
    } = useForm({inputElements: form.inputElements, formType: form.rootKey})

    const {
        isCalculateLoading,
        result
    } = useResultFetching()

    return (
        <Modal className={styles.main}>
            <h1>{form.data.name}</h1>
            <p>{form.data.description}</p>
            <form
                onSubmit={submit}
            >
                {form.inputElements.map(inputElement => {
                    return (
                        <InputElement
                            key={inputElement.id}
                            inputElement={inputElement}
                            value={inputElement.type === 'select' ? optionTranslators[inputElement.id](formData[inputElement.id]) : formData[inputElement.id]}
                            onChange={formChange(inputElement.id, inputElement.type)}
                            options={inputElement.data.items?.map(item => item.title)}
                            placeholder={inputElement.data.title}
                        />
                    )
                })}
                <button
                    type='submit'
                    disabled={isCalculateLoading}
                >Запустить</button>
            </form>
            <Divider/>
            <div
                className={classNames(
                    styles.main__result,
                    {[styles.loading]: isCalculateLoading}
                )}
            >
                {isCalculateLoading && <Loader/>}
                {result && <p>{result}</p>}
            </div>
        </Modal>
    )
})
