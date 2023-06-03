import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import toastr from 'toastr';

const cx = classNames.bind(styles);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    width: 400,
    height: 580,
    borderRadius: 3,
};

function Register(props) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        userName: '',
        password: '',
        rePassword: '',
        phoneNumber: '',
    });
    toastr.options = {
        positionClass: 'toast-top-center', // vị trí giữa bên trên màn hình
        toastClass: 'toastr-custom-style', // tùy chỉnh style cho toastr
    };

    const handleChangeForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleRegister = () => {
        if (form.rePassword !== form.password) {
            toastr.error('Mật khẩu không khớp, hãy nhập lại');
            return;
        }
        axios
            .post('http://localhost:8083/register-user', {
                ...form,
            })
            .then((response) => {
                toastr.success('Đăng kí thành công');
                axios
                    .post('http://localhost:8083/api/v1/auth/login', { ...form })
                    .then((response) => {
                        localStorage.setItem('token', response.data.token);
                        toastr.success('Đăng nhập thành công');
                        navigate('/');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Modal
                open={props.open1}
                onClose={props.handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ mt: 2 }}>
                        <div className={cx('logo')}>
                            <img src="https://ebook.waka.vn/themes/desktop/images/logo-waka.png" alt="logo" />
                        </div>
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <div className={cx('your-account')}>
                            <div className={cx('account_icon')}></div>
                            <input
                                className={cx('form-control')}
                                type="text"
                                id="accountNameR"
                                name="userName"
                                value={form.userName}
                                onChange={(event) => handleChangeForm(event)}
                                placeholder="Tên đăng nhập"
                            />
                        </div>
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <div className={cx('your-phone-mail')}>
                            <div className={cx('phone_icon')}></div>
                            <input
                                className={cx('form-control')}
                                type="text"
                                id="phone-mail-r"
                                name="phoneNumber"
                                value={form.phoneNumber}
                                onChange={(event) => handleChangeForm(event)}
                                placeholder="Số điện thoại"
                            />
                        </div>
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <div className={cx('your-password')}>
                            <div className={cx('password_icon')}></div>
                            <input
                                className={cx('form-control')}
                                type="password"
                                id="password-field-r"
                                maxlength="20"
                                name="password"
                                value={form.password}
                                onChange={(event) => handleChangeForm(event)}
                                placeholder="Mật khẩu"
                            />
                        </div>
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <div className={cx('repeat-your-password')}>
                            <div className={cx('password_icon')}></div>
                            <input
                                className={cx('form-control')}
                                type="password"
                                id="password-field-r"
                                maxlength="20"
                                name="rePassword"
                                value={form.rePassword}
                                onChange={(event) => handleChangeForm(event)}
                                placeholder="Mật khẩu"
                            />
                        </div>
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <div className={cx('rules')}>
                            <input type="checkbox" id="agree_term" name="agree_term" value="1" />
                            <label for="agree_term"> Tôi đồng ý với các điều khoản sử dụng</label>
                        </div>
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <button className={cx('button-login')} onClick={handleRegister}>
                            ĐĂNG KÍ
                        </button>
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <div className={cx('ask')}>
                            <span>Bạn đã có tài khoản? </span>
                            <a href="javascript:void(0)" onclick="openModal('loginViaAccountModal')">
                                Đăng nhập
                            </a>
                        </div>
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

export default Register;
