import {Outlet} from "react-router";

export default function Layout() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Menu</h1>
            <Outlet/>
        </div>
    );
}