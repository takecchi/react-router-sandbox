import type {Route} from "./+types/page";
import Main from "~/components/main";

export default function Page({
                                 params,
                             }: Route.ComponentProps) {
    return <Main params={params} path={"blog/[slug]/page.tsx"}/>;
}
