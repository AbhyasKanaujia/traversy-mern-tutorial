import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashbord() {
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return <div>Dashbord</div>;
}

export default Dashbord;
