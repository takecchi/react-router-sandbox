import {type RouteConfig, index, route, prefix, layout} from "@react-router/dev/routes";

export default [
    // ルートがない場合は、index = "/"として処理
    index("routes/page.tsx"),

    // blogはルートとして解釈
    // layout.tsxがない為、routeとして処理
    route("blog", "routes/blog/page.tsx"),
    // [slug]は動的ルートとして解釈し、routeとして処理
    route("blog/:slug", "routes/blog/[slug]/page.tsx"),

    // ()で囲ってあるので(group)はルートとして解釈しない
    // layout.tsxがない為、routeとして処理
    route("about", "routes/(group)/about/page.tsx"),

    // shopはルートとして解釈
    // [[]]で囲ってあるので[[...slug]]はキャッチオールルートとして解釈
    // layout.tsxがない為、routeとして処理
    route("shop/*", "routes/shop/[[...slug]]/page.tsx"),

    // menuはルートとして解釈
    // layout.tsxがある為、layoutとして処理
    // page.tsxがある為、routeとして処理
    // subもルートとして解釈
    // sub配下にlayout.tsxがなく、page.tsxがある為、routeとして処理
    layout("routes/menu/layout.tsx",[
        route("menu", "routes/menu/page.tsx"),
        route("menu/sub", "routes/menu/sub/page.tsx"),
    ]),

    // ()で囲ってあるので(layout)はルートとして解釈しない
    // layout.tsxがある為、layoutとして処理
    // layout-1配下にはlayout.tsxがなく、page.tsxがある為、routeとして処理
    // layout-2配下にはlayout.tsxがなく、page.tsxがある為、routeとして処理
    layout("routes/(layout)/layout.tsx", [
        route("layout-1", "routes/(layout)/layout-1/page.tsx"),
        route("layout-2", "routes/(layout)/layout-2/page.tsx"),
    ]),

] satisfies RouteConfig;
