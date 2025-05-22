import {type RouteConfig, index, route, prefix, layout} from "@react-router/dev/routes";

export default [
    // ルートがない場合は、index = "/"として処理
    index("routes/page.tsx"),
    /**
     * blogはルートとして解釈
     * layout.tsxがない為、prefixとして処理
     *
     * page.tsxはindexとして処理
     * [slug]は動的ルートとして解釈し、routeとして処理
     */
    ...prefix('blog',[
        index("routes/blog/page.tsx"),
        route(":slug", "routes/blog/[slug]/page.tsx"),
    ]),
    /**
     * ()で囲ってあるので(group)はルートとして解釈しない
     * aboutはルートとして解釈
     * layout.tsxがない為、prefixとして処理
     *
     * page.tsxはindexとして処理
     */
    ...prefix('about',[
        index("routes/(group)/about/page.tsx"),
    ]),
    /**
     * shopはルートとして解釈
     * layout.tsxがない為、prefixとして処理
     *
     * [[...slug]]はキャッチオールルートとして解釈し、routeとして処理
     */
    ...prefix('shop',[
        route("*", "routes/shop/[[...slug]]/page.tsx"),
    ]),


    /**
     * menuはルートとして解釈
     * layout.tsxがある為、route + layoutとして処理
     * page.tsxがある為、indexとして処理
     * subはルートとして解釈し、page.tsxがある為、routeとして処理
     */
    route("menu", "routes/menu/layout.tsx",[
        index("routes/menu/page.tsx"),
        route("sub", "routes/menu/sub/page.tsx"),
    ]),

    /**
     * ()で囲ってあるので(layout)はルートとして解釈しない
     * layout.tsxがあり、page.tsxがない為、layoutとして処理
     *
     * layout-1はルートとして解釈し、page.tsxがある為、routeとして処理
     * layout-2はルートとして解釈し、page.tsxがある為、routeとして処理
     */
    layout("routes/(layout)/layout.tsx", [
        route("layout-1", "routes/(layout)/layout-1/page.tsx"),
        route("layout-2", "routes/(layout)/layout-2/page.tsx"),
    ]),

] satisfies RouteConfig;
