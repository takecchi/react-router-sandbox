import {Outlet} from "react-router";

export default function DebugLayout({path}: { path: string }) {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h4>Layout: {path}</h4>
            <Outlet/>
        </div>)
}
