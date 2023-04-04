const db = require('../models/index')
const accountService = require('../service/accountService')

let registerUser = async (req, res) => {
    try {
        let { user_name, password, rePassword } = req.body
        if (!user_name || !password || !rePassword) {
            return res.status(200).json({
                success: false,
                message: "Vui lòng nhập đủ thông tin !!!"
            })
        }
        if (password !== rePassword) {
            return res.status(200).json({
                success: false,
                message: "Bạn nhập mật khẩu xác nhận bị sai !!!"
            })
        }
        if (user_name) {
            let isUsernameExist = await db.Account.findOne({
                where: { user_name: user_name }
            })
            if (isUsernameExist) {
                return res.status(200).json({
                    success: false,
                    message: "Tài khoản này đã được sử dụng vui lòng dùng tài khoản khác !!!"
                })
            } else {
                let checkCreateAccount = await db.Account.create({
                    user_name: user_name,
                    password: password,
                    role: 'GUEST'
                })
                if (checkCreateAccount) {
                    return res.status(200).json({
                        success: true,
                        message: "Đăng ký tài khoản thành công !!!"
                    })
                } else {
                    return res.status(200).json({
                        message: false,
                        message: "Đăng ký tài khoản thất bại !!!"
                    })
                }
            }
        }

    } catch (error) {
        console.log(error)
        return res.status(200).json({
            success: false,
            message: "Có lỗi từ phía server !!!"
        })
    }
}

let loginUser = async (req, res) => {
    try {
        let { user_name, password } = req.body
        if (!user_name || !password) {
            return res.status(200).json({
                success: false,
                message: "Vui lòng nhập đủ tên đăng nhập và mật khẩu !!!"
            })
        }

        if (user_name) {
            let user = await db.Account.findOne({
                where: { user_name: user_name }
            })
            if (!user) {
                return res.status(200).json({
                    success: false,
                    message: "Bạn nhập sai tài khoản hoặc mật khẩu !!!"
                })
            }
            if(password !== user.password) {
                return res.status(200).json({
                    success: false,
                    message: "Bạn nhập sai tài khoản hoặc mật khẩu !!!"
                })
            }
            return res.status(200).json({
                success: true,
                message: "Đăng nhập thành công !!!"
            })
        }
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "Có lỗi từ phía server !!!"
        })
    }
}

module.exports = {
    loginUser,
    registerUser,
}