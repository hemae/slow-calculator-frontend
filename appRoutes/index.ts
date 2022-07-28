export type AppRouteKeys =
    'index'
    | 'form'

export type AppRoutes =
    '/'
    | '/form'

export default {
    index: '/',
    form: '/form'
} as Record<AppRouteKeys, AppRoutes>
