import {React,useState} from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import "./SignUp.css";
import {Navigate, redirect, useNavigate} from "react-router-dom"


function SignUp() {
  const [email, setEmail] = useState("");
  const [messageError, setMessageError] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [messagePassError, setMessagePassError] = useState("");
  const [errorPassInput, setErrorPassInput] = useState("");
  const [RePassWord, setRePassWord] = useState("");
  const [messageRePassError, setMessageRePassError] = useState("");
  const [errorRePassInput, setErrorRePassInput] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setEmail(e.target.value);
    setMessageError("");
    setErrorInput('');
  };
  const emailValidation = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(email) || email === "") {
      setMessageError("Email nhập không đúng, hãy nhập lại");
      setErrorInput('error-input')
    } else {
      setMessageError("");
      setErrorInput('');
    }
  };
  const handleOnChangePass = (e) => {
    setPassWord(e.target.value);
    setMessagePassError("");
    setErrorPassInput('');
  };
  const PassWordValidation = () => {
    const validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!validRegex.test(PassWord) || PassWord === "") {
      setMessagePassError("Password nhập không đúng, hãy nhập lại");
      setErrorPassInput('error-input')
    } else {
      setMessagePassError("");
      setErrorPassInput('');
    }
  };
  
  const handleOnChangeRePass = (e) => {
    setRePassWord(e.target.value);
    setMessageRePassError("");
    setErrorRePassInput('');
  };
  const RePassWordValidation = () => {
    const validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!validRegex.test(RePassWord) || RePassWord === "") {
      setMessageRePassError("Password nhập lại không đúng, hãy nhập lại");
      setErrorRePassInput('error-input')
    } else {
      setMessageRePassError("");
      setErrorRePassInput('');
    }
  };
  const handleRegister = async () => {
    let response = await axios.post('http://localhost:5000/api/register', {user_name: email, password: PassWord, rePassword: RePassWord});
    if(response && response.data && response.data.success === true) {
      console.log("Successfully register")
      navigate("/customer");    
    }else {
      setMessagePassError(response.data.message)
    }

  }

  
  return (
    <Container className="d-grid" id="main-container">
      <Form className="text-center" id="sign-in-form">
        <h1 className="mb-3 fs-3 fw-normal texth1">Đăng ký</h1>
        <FormGroup controlId="sign-in-email-address form-control" class="mb-3">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Tên đăng nhập"
            autoComplete="username"
            className={`position-relative ${errorInput}`}
            onChange={handleOnChange}
          />
        </FormGroup>
        <p className="error">{messageError}</p>
        <FormGroup controlId="sign-in-password form-control" class="mb-3">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Password"
            autoComplete="current-password"
            className={`position-relative ${errorPassInput}`}
            onChange={handleOnChangePass}
          />
        </FormGroup>
        
        <FormGroup controlId="sign-in-password form-control" class="mb-3">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Confirm Password"
            autoComplete="current-confirm-password"
            className={`position-relative ${errorRePassInput}`}
            onChange={handleOnChangeRePass}
          />
        </FormGroup>
        <h2 className="error">{messageRePassError}</h2>
        <h2 className="error">{messagePassError}</h2>

        <div className="d-grid">
          <Button variant="primary" size="lg" onClick={() => handleRegister()}>
            Đăng ký
          </Button>
        </div>
        <div className="d-grid sign-up">
          Bạn đã có tài khoản ? <a href="/">Đăng nhập</a>
        </div>
      </Form>
    </Container>
  );
}

export default SignUp;
