import { useSelector } from "react-redux";

function Dashbord() {
  const { user } = useSelector((store) => store.auth);
  return <div>Dashbord</div>;
}

export default Dashbord;
