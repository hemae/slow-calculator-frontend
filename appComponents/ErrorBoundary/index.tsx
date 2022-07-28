import {Component, ErrorInfo} from 'react'
import styles from '@styles/pages/Error.module.scss'
import MainLayout from '@layouts/Main'


type ErrorBoundaryProps = {
    children: JSX.Element[] | JSX.Element
}

type ErrorBoundaryState = {
    error: string | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {error: null}
    }

    static getDerivedStateFromError(error: string) {
        return {error}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log({error, errorInfo})
    }

    render() {
        if (this.state.error) {
            return (
                <MainLayout
                    title={`${process.env.APPLICATION_TITLE} | Что-то пошло не так :(`}
                    description='Что-то пошло не так'
                    // scripts={undefined}
                >
                    <div className={styles.notFound__errorContainer}>
                        <h1>Что-то пошло не так :(</h1>
                    </div>
                </MainLayout>
            )
        }

        return this.props.children
    }
}
