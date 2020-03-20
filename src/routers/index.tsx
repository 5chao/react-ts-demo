import Loadable from 'react-loadable';
import Loading from '../components/Loading';

interface IRouterModel {
    path: string,
    component?: any,
    auth?: boolean
}

const routerConfig:IRouterModel[] =[
    {
        path: '/',
        component: Loadable({
            loader: () => import('../view/home'),
            loading: Loading
        }),
        auth: true
    },
    {
        path: '/user',
        component: Loadable({
            loader: () => import('../view/user'),
            loading: Loading
        }),
        auth: true
    },
    {
        path: '/img',
        component: Loadable({
            loader: () => import('../view/imgTest'),
            loading: Loading
        })
    },
    {
        path: '/404',
        component: Loadable({
            loader: () => import('../view/notFound'),
            loading: Loading
        }),
    }
]


export default routerConfig