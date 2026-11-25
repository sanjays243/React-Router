import { Outlet } from "react-router-dom";

function AdminLayout(){
    return(
        <div>
            <h1>Admin Dashboard</h1>

            <nav>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/setting">Setting</Link>
            </nav>
            <hr />
            <Outlet/>
        </div>
    )
}
export default AdminLayout;

