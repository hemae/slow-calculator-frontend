import {memo} from 'react'
import styles from './SideBar.module.scss'
import {MenuToggle} from '@UI'
import useSideBar from '@components/SideBar/useSideBar'
import classNames from 'classnames'
import {Form} from '@apiModels/form'
import Link from 'next/link'
import appRoutes from '@appRoutes'


type SideBarProps = {
    forms: Form[]
    basePath: string
}

export const SideBar = memo<SideBarProps>((props) => {

    const {
        forms,
        basePath
    } = props

    const {
        toggleClick,
        sideBarClick,
        sideBarShown,
        backgroundHidden,
        backgroundShown,
        sideBarTouchStart,
        sideBarMove,
        sideBarTouchEnd
    } = useSideBar({basePath})

    const links = forms.map(form => {
        return (
            <Link
                key={form.id}
                href={`${appRoutes.form}/${form.rootKey}`}
            ><a>{form.data.name}</a></Link>
        )
    })

    return (
        <>
            <section
                className={classNames(
                    styles.background,
                    {[styles.hidden]: backgroundHidden},
                    {[styles.shown]: backgroundShown}
                )}
                onClick={toggleClick}
            />
            <nav
                className={classNames(
                    styles.main,
                    {[styles.active]: sideBarShown}
                )}
                onClick={sideBarClick}
                onTouchStart={sideBarTouchStart}
                onTouchMove={sideBarMove}
                onTouchEnd={sideBarTouchEnd}
            >
                <MenuToggle
                    id='side-bar-toggle'
                    onClick={toggleClick}
                    active={sideBarShown}
                />

                <div
                    className={styles.main__links}
                >{links}</div>
            </nav>
        </>
    )
})
