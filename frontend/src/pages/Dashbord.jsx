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

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
      </section>
      <p>Goals Dashboard</p>
    </>
  );
}

export default Dashbord;
