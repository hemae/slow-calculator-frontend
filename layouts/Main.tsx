import {FC, memo} from 'react'
import styles from '@styles/layouts/Main.module.scss'
import {AppBackground, HeadComponent} from '@appComponents'
import {Header, Footer, SideBar} from '@components'
import classNames from 'classnames'
import {Form} from '@apiModels/form'


type MainLayoutProps = {
    title?: string
    description?: string
    imagePreview?: string | null
    children: JSX.Element[] | JSX.Element | string
    className?: string
    combinedClassName?: string
    forms?: Form[]
    basePath?: string
}

const MainLayout: FC<MainLayoutProps> = (props) => {

    const {
        children,
        title,
        description,
        className,
        combinedClassName,
        imagePreview,
        forms,
        basePath
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
            {forms && basePath &&
            <SideBar forms={forms} basePath={basePath}/>}
            <Footer/>
        </>
    )
}

export default memo<MainLayoutProps>(MainLayout)
