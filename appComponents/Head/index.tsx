import {memo} from 'react'
import Head from 'next/head'
import {$primary} from '@styles/colors'


type HeadProps = {
    title: string
    description: string
    imagePreview?: string | null
}

export const HeadComponent = memo<HeadProps>((props) => {

    const {
        title,
        description,
        imagePreview
    } = props

    return (
        <Head>
            <title>{title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8'/>
            <meta name='theme-color' content={$primary}/>
            <meta name='description' content={description}/>
            {imagePreview &&
            <meta
                property="og:image"
                content={`${process.env.FRONTEND_DOMAIN}${imagePreview}`}
            />}
        </Head>
    )
})
