import { useLocation } from "react-router-dom";

function Dashboard(){
    const location =useLocation()

    const{username,role}=location.state||{}
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>WelCome {username || "Guest"}</h2>
            <h3>Role : {role || "Note Available"}</h3>
        </div>
    )
}
export default Dashboard;