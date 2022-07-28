import {StringResourcesProps} from '@serverSideProps/types'
import {GetServerSideProps} from 'next'
import {cacheControl} from '@serverHandlers'
import {Form} from '@apiModels/form'
import handlers from '@requestHandlers'
import getQuery from '@helpers/query'
import appRoutes from '@appRoutes'


export type MainPageProps = StringResourcesProps & {
    forms: Form[]
}


export const getServerSideProps: GetServerSideProps<MainPageProps | {}> = async (context) => {
    let props = null
    try {
        const {res} = context
        cacheControl(res)

        const forms = await handlers.gets<Form>({
            entity: 'forms',
            token: null,
            query: getQuery({
                sort: 'asc:order',
                filters: {params: ['[publicVisible][true]']}
            }),
            whole: true
        }) as Form[]

        props = {
            forms,
            basePath: appRoutes.index
        }
    } catch (e) {
        console.log(e)
    }

    return {
        props: props || {},
        redirect: props ? undefined : {destination: '/500'},
    }
}
