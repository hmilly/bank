import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

const Signup = ({ user, setUser, allUsers }) => {
  let history = useHistory();
  return (
    <main className="login">
      <section>
        <button onClick={() => history.push("/bank")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <p>Sign up</p>
      </section>
      <Form
        setUser={setUser}
        user={user}
        allUsers={allUsers}
        btnName={"Sign Up"}
      />
    </main>
  );
};

export default Signup;
