import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/page.tsx"),
    route("blog", "routes/blog/page.tsx"),
    route("blog/:slug", "routes/blog/[slug]/page.tsx"),
    route("about", "routes/(group)/about/page.tsx"),
    route("shop/*", "routes/shop/[...slug]/page.tsx"),
] satisfies RouteConfig;
