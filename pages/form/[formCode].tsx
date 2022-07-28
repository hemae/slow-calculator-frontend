import type {NextPage} from 'next'
import styles from '@styles/pages/Home.module.scss'
import MainLayout from '@layouts/Main'
import {FormPageProps} from '@serverSideProps/form'
import {Form as FormComponent} from '@components'

export {getServerSideProps} from '@serverSideProps/form'


const Form: NextPage<FormPageProps> = (props) => {

    const {
        form,
        forms,
        basePath
    } = props

    return (
        <MainLayout
            title={`${process.env.APPLICATION_TITLE} | ${form.data.title}`}
            description={form.data.description}
            combinedClassName={styles.main}
            forms={forms}
            basePath={basePath}
        >
            <FormComponent form={form}/>
        </MainLayout>
    )
}

export default Form
