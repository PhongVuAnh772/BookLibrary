import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';

const cx = classNames.bind(styles);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    borderRadius: 3,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function Login(props) {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: '',
    });
    toastr.options = {
        positionClass: 'toast-top-center', // vị trí giữa bên trên màn hình
        toastClass: 'toastr-custom-style', // tùy chỉnh style cho toastr
    };

    const checkInputLogin = (event) => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value,
        });
    };
    const handleLogin = () => {
        axios
            .post('http://localhost:8083/api/v1/auth/login', { ...loginForm })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                toastr.success('Đăng nhập thành công');
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <img src="https://ebook.waka.vn/themes/desktop/images/logo-waka.png" alt="logo" />
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <div className={cx('your-account')}>
                            <div className={cx('account_icon')}></div>
                            <input
                                className={cx('form-control')}
                                type="text"
                                name="userName"
                                id="accountName"
                                value={loginForm.userName}
                                onChange={(event) => {
                                    checkInputLogin(event);
                                }}
                                placeholder="Tên đăng nhập"
                            />
                        </div>
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <div className={cx('your-password')}>
                            <div className={cx('password_icon')}></div>
                            <input
                                className={cx('form-control')}
                                type="password"
                                name="password"
                                value={loginForm.password}
                                id="password-field"
                                onChange={(event) => {
                                    checkInputLogin(event);
                                }}
                                placeholder="Mật khẩu"
                            />
                        </div>
                    </Typography>
                    <Typography>
                        <div className={cx('register-forgot')}>
                            <div className={cx('register')} onClick={() => props.handleOpen1(props.handleClose())}>
                                Đăng kí ngay
                            </div>
                            <div className={cx('forgot')}>Quên mật khẩu</div>
                        </div>
                    </Typography>
                    <Typography>
                        <button className={cx('button-login')} onClick={handleLogin}>
                            Đăng nhập
                        </button>
                    </Typography>
                    <Typography>
                        <div className={cx('box-auth-panel')}>
                            <span className={cx('top')}>_______ Đăng nhập nhanh _______</span>
                            <ul className={cx('a-login-ul')}>
                                <li className={cx('logo-fb')}>
                                    <a href="/facebook/auth.html?authclient=facebook" className={cx('a-login-fb')}>
                                        <img
                                            src="https://ebook.waka.vn/themes/desktop/images/facebook_login.png"
                                            alt="auth-img"
                                        />
                                    </a>
                                </li>
                                <li className={cx('logo-gg')}>
                                    <a href="/google/auth.html?authclient=google" className={cx('a-login-google')}>
                                        <img
                                            src="https://ebook.waka.vn/themes/desktop/images/google_login.png"
                                            alt="auth-img"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Login;
