import { React, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import "./Home.css";
import axios from "axios"
import {Navigate, redirect, useNavigate } from 'react-router-dom'

function Home() {
  const [email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [messageError, setMessageError] = useState("");
  const [messagePassError, setMessagePassError] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [errorPassInput, setErrorPassInput] = useState("");
  const [login, setLogin] = useState('')
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setEmail(e.target.value);
    setMessageError("");
    setErrorInput('');
  };
  const handleOnChangePass = (e) => {
    setPassWord(e.target.value);
    setMessagePassError("");
    setErrorPassInput('');
  };

  const handleLogin = async () => {
    let response = await axios.post('http://localhost:5000/api/login', {user_name: email, password: PassWord});
    if(response && response.data && response.data.success === true) {
      console.log("Successfully logged in")
      window.history.pushState(null, null, window.location.href);
        window.onpopstate = function(event) {
            window.history.go(1);
        };
      document.documentElement.requestFullscreen();
      window.onload = function() {
        setTimeout(function() {
            window.scrollTo(0, 1);
        }, 0);
    };
      navigate("/screen/home");
    }else {
      setMessagePassError(response.data.message)
    }

  }
  
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
  
  const PassWordValidation = () => {
    const validRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!validRegex.test(PassWord) || PassWord === "") {
      setMessagePassError("Password nhập không đúng, hãy nhập lại");
      setErrorPassInput('error-input')
    } else {
      setMessagePassError("");
      setErrorPassInput("");
    }
  };
  const getValue = (e) => { 
    const validRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const validRegex2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let value = {email, PassWord}
    if ((!validRegex.test(PassWord)) || (!validRegex2.test(email))) {
      value = {}
      console.log(value);
      console.log((validRegex.test(PassWord)))
      console.log((validRegex2.test(email)))
    }
    else {
      console.log(value)
      
    }
    // }) 
  }

 

  

  

  
  return (
    <Container className="d-grid" id="main-container">
      <Form className="text-center" id="sign-in-form">
        <h1 className="mb-3 fs-3 fw-normal texth1">Đăng nhập</h1>
        <FormGroup controlId="sign-in-email-address form-control">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Nhập tên đăng nhập"
            autoComplete="username"
            className={`position-relative ${errorInput}`}
            onChange={handleOnChange}
          />
        </FormGroup>
        <p className="error">{messageError}</p>
        <FormGroup controlId="sign-in-password form-control" className="mb-3">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Password"
            autoComplete="current-password"
            className={`position-relative ${errorPassInput}`}
            onChange={handleOnChangePass}
          />
        </FormGroup>
        <p className="error">{messagePassError}</p>
        <div className="d-grid">
          <Button variant="primary" size="lg" onClick={() => handleLogin()}>
            Đăng nhập
          </Button>
        </div>
        <div className="d-grid sign-up">
          Bạn chưa có tài khoản ? <a href="signup">Tạo tài khoản</a>
        </div>
      </Form>
    </Container>
  );
}

export default Home;
