import {StringResourcesProps} from '@serverSideProps/types'
import {GetServerSideProps} from 'next'
import {cacheControl} from '@serverHandlers'
import {Form} from '@apiModels/form'
import handlers from '@requestHandlers'
import getQuery from '@helpers/query'
import appRoutes from '@appRoutes'


export type FormPageProps = StringResourcesProps & {
    form: Form
    forms: Form[]
}


export const getServerSideProps: GetServerSideProps<FormPageProps | {}> = async (context) => {
    let props = null
    try {
        const {res, query} = context
        cacheControl(res)

        const {formCode} = query

        const forms = await handlers.gets<Form>({
            entity: 'forms',
            token: null,
            query: getQuery({
                sort: 'asc:order',
                filters: {params: ['[publicVisible][true]']}
            }),
            whole: true
        }) as Form[]

        const form = forms.find(form => form.rootKey === formCode)

        if (!form) return {notFound: true}

        props = {
            form,
            forms,
            basePath: `${appRoutes.form}/${formCode}`
        }
    } catch (e) {
        console.log(e)
    }

    return {
        props: props || {},
        redirect: props ? undefined : {destination: '/500'}
    }
}
