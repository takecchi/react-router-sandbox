import {type RouteConfig, index, layout, route} from "@react-router/dev/routes";

const routes = [
    layout('routes/layout.tsx', [
        route('', 'routes/page.tsx', []),
    ])
]

console.dir(routes, {depth: null})

export default routes satisfies RouteConfig;
