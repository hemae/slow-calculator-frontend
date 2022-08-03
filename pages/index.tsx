import type {NextPage} from 'next'
import styles from '@styles/pages/Home.module.scss'
import MainLayout from '@layouts/Main'
import {MainPageProps} from '@serverSideProps/main'
import {Modal} from '@UI'

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
            <Modal
                className={styles.main__modal}
            >
                <h1>Добро пожаловать в медленный калькулятор</h1>
            </Modal>
        </MainLayout>
    )
}

export default Home
