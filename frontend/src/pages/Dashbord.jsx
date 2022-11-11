import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashbord() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (store) => store.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
    </>
  );
}

export default Dashbord;
