import type {NextPage} from 'next'
import styles from '@styles/pages/Home.module.scss'
import MainLayout from '@layouts/Main'
import {MainPageProps} from '@serverSideProps/main'

export {getServerSideProps} from '@serverSideProps/main'


const Home: NextPage<MainPageProps> = (props) => {

    const {
        forms,
        basePath
    } = props

    return (
        <MainLayout
            title={`${process.env.APPLICATION_TITLE} | Главная`}
            description={'Самый медленный калькулятор'}
            combinedClassName={styles.main}
            forms={forms}
            basePath={basePath}
        >

        </MainLayout>
    )
}

export default Home
