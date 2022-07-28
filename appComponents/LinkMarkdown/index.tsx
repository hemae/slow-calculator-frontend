import {FC} from 'react'
import linkHandler from './linkHandler'


export const LinkMarkdown: FC<{id?: string, children: JSX.Element[] | JSX.Element | string, isNewWindow?: boolean}> = ({children, id, isNewWindow}) => {
    return linkHandler(children as string, id, isNewWindow)
}
