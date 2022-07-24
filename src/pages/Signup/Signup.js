import "./signup.scss";
import logo from "../../img/logo.png";
import icon_success from "../../img/SVG/check_circle_outline.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../services/data-fetch-service";
import { useAppState } from "../../services/AppstateContext";
import { Modal_model } from "../../models/Modal";
import Spinner from "../../components/Spinner/Spinner";
import { getSHA256 } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { Statusbar_model } from "../../models/Statusbar_model";

const Signup = () => {
  const navigate = useNavigate();
  const appState = useAppState();
  const setModal = appState.setModal;
  const setStatusbar = appState.setStatusbar;

  const [spinner, setSpinner] = useState(false);

  const [formvalues, setFormvalues] = useState({
    username: "",
    password: "",
    email: "",
  });

  const signupfunc = async (e) => {
    e.preventDefault();
    try {
      setSpinner(true);
      let hashedPass = await getSHA256(formvalues.password);
      const response = await signup(
        formvalues.username,
        hashedPass,
        formvalues.email
      );
      if (response.data.username) {
        navigate("/login");
        setStatusbar(
          new Statusbar_model(
            true,
            "Sign up successful! please use your credentials to login.",
            `${icon_success}#icon-check_circle_outline`,
            "success"
          )
        );
      }
    } catch (error) {
      if (error.status === 406) {
        setModal(
          new Modal_model(
            true,
            "Error",
            <h1>{error.data.err}</h1>,
            `${icon_success}#icon-cancel-circle`
          )
        );
        // setStatusbar(new Statusbar_model(true, error.data.err, `${icon_success}#icon-cancel-circle`, 'error'));
      } else {
        setModal(
          new Modal_model(
            true,
            "Error",
            <h1>Unexpected error occured.</h1>,
            `${icon_success}#icon-cancel-circle`
          )
        );
      }
    } finally {
      setSpinner(false);
    }
  };

  return (
    <div className="signupwrapper">
      <div className="signupwrapper__box">
        <div>
          <figure className="signupwrapper__box-logowrapper">
            <img src={logo} alt="logo" className="signupwrapper__box-logo" />
            <figcaption className="signupwrapper__box-logocaption">
              Trillo
            </figcaption>
          </figure>
        </div>
        <form className="signupForm" onSubmit={(e) => signupfunc(e)}>
          <div className="signupwrapper__box-forminput--wrapper">
            <div className="signupwrapper__box-forminput--label">Email</div>
            <input
              className="signupwrapper__box-forminput--field"
              type="email"
              value={formvalues.email}
              placeholder="Email"
              name="email"
              required
              maxLength="50"
              onChange={(e) =>
                setFormvalues({
                  [e.target.name]: e.target.value,
                  password: formvalues.password,
                  username: formvalues.username,
                })
              }
            />
          </div>
          <div className="signupwrapper__box-forminput--wrapper">
            <div className="signupwrapper__box-forminput--label">Username</div>
            <input
              className="signupwrapper__box-forminput--field"
              type="text"
              value={formvalues.username}
              placeholder="Username"
              name="username"
              required
              maxLength="255"
              onChange={(e) =>
                setFormvalues({
                  [e.target.name]: e.target.value,
                  password: formvalues.password,
                  email: formvalues.email,
                })
              }
            />
          </div>
          <div className="signupwrapper__box-forminputwrapper">
            <div className="signupwrapper__box-forminput--label">Password</div>
            <input
              className="signupwrapper__box-forminput--field"
              type="password"
              value={formvalues.password}
              placeholder="Password"
              name="password"
              required
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              onChange={(e) =>
                setFormvalues({
                  username: formvalues.username,
                  [e.target.name]: e.target.value,
                  email: formvalues.email,
                })
              }
            />

            <span style={{ color: "#f73c3c" }}>
              Minimum eight characters, at least one letter and one number
            </span>
          </div>
          <div>
            {/* <input className='signupwrapper__box-forminput--submit' type='submit' /> */}
            <button
              className="signupwrapper__box-forminput--submit"
              type="submit"
            >
              {" "}
              Sign Up{" "}
            </button>
          </div>
          {spinner && <Spinner />}
        </form>
        <div className="signupwrapper__box-links" style={{ marginTop: "1rem" }}>
          Already registered?{" "}
          <Link
            to={"/login"}
            style={{ fontSize: "1.1rem", textDecorationLine: "none" }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
