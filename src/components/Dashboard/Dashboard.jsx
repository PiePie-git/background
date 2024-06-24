import "./Dashboard.scss";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { token } = location.state || {};
  console.log(token);
  return (
    <div>
      <div>dashboard</div>
      <div>token from router: {token}</div>
    </div>
  );
};

export default Dashboard;
