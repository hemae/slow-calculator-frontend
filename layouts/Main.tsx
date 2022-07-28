import {FC, memo} from 'react'
import styles from '@styles/layouts/Main.module.scss'
import {AppBackground, HeadComponent} from '@appComponents'
import {Header, Footer} from '@components'
import classNames from 'classnames'


type MainLayoutProps = {
    title?: string
    description?: string
    imagePreview?: string | null
    children: JSX.Element[] | JSX.Element | string
    className?: string
    combinedClassName?: string
}

const MainLayout: FC<MainLayoutProps> = (props) => {

    const {
        children,
        title,
        description,
        className,
        combinedClassName,
        imagePreview
    } = props

    return (
        <>
            <HeadComponent
                title={title || 'Untitled'}
                description={description || 'No description'}
                imagePreview={imagePreview}
            />
            <Header/>
            <main
                className={
                    combinedClassName
                        ? classNames(styles.main, combinedClassName)
                        : className || styles.main
                }
            >
                <AppBackground/>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default memo<MainLayoutProps>(MainLayout)
