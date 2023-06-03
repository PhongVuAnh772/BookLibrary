import React from 'react';
import styles from './RegisterCard.module.scss';
import classNames from 'classnames/bind';
import { MdCardMembership } from 'react-icons/md';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function RegisterCard(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('logo')}>
                    <img src="	https://ebook.waka.vn/themes/desktop/images/logo_waka_epay.png?v=1" />
                </div>
                <div className={cx('content')}>
                    <div className={cx('banner')}>
                        <img src="https://ebook.waka.vn/themes/desktop/images/epay_bg.png" />
                    </div>
                    <div className={cx('member')}>
                        <MdCardMembership className={cx('member-icon')} />
                        <h2>Đăng kí để trở thành hội viên của waka</h2>
                        <p>Khi đăng kí để trở thành hội viên bạn sẽ có những lợi ích sau</p>
                    </div>
                    <div className={cx('benefit-box')}>
                        <div className={cx('benefit')}>
                            <div className={cx('benefit-content')}>
                                <h3>Waka: Hội viên</h3>
                            </div>
                            <p className={cx('benefit-title')}>Quy trình làm thẻ hội viên</p>
                            <div className={cx('benefit-button')}>
                                <Link className={cx('benefit-button-detail')}>Chi tiết</Link>
                            </div>
                        </div>
                        <div className={cx('benefit')}>
                            <div className={cx('benefit-content')}>
                                <h3>Waka: Hội viên</h3>
                            </div>
                            <p className={cx('benefit-title')}>Quy định mượn thẻ của thư viện</p>
                            <div className={cx('benefit-button')}>
                                <Link className={cx('benefit-button-detail')}>Chi tiết</Link>
                            </div>
                        </div>
                        <div className={cx('benefit')}>
                            <div className={cx('benefit-content')}>
                                <h3>Waka: Hội viên</h3>
                            </div>
                            <p className={cx('benefit-title')}>Đăng kí trở thành hội viên</p>
                            <div className={cx('benefit-button')}>
                                <Link className={cx('benefit-button-detail')}>Đăng kí</Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('form-register')}>
                        <div className={cx('form-header')}>
                            <h3>Trở thành hội viên waka</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('account')}>
                    <h4>
                        Để trở thành hội viên của Waka và được mượn thẻ tại thư viện, bạn cần thực hiện các bước sau:
                    </h4>
                    <br />
                    <p>
                        1. Đăng ký làm hội viên: Đầu tiên, bạn cần tìm hiểu về chương trình thành viên của Waka và quy
                        trình đăng ký.
                    </p>
                    <p>
                        2. Chuẩn bị tài liệu: Sau khi đăng ký thành công, bạn sẽ được cấp một thẻ hội viên Waka. Thẻ này
                        sẽ có thông tin như tên của bạn và số thẻ. Để mượn sách tại thư viện, bạn cần mang thẻ hội viên
                        này cùng với bạn khi đến thư viện.
                    </p>
                    <p>
                        3. Tìm hiểu quy định mượn sách: Mỗi thư viện có các quy định riêng về việc mượn sách. Hãy tìm
                        hiểu các quy định của thư viện Waka liên quan đến số lượng sách có thể mượn, thời gian mượn và
                        quy trình trả sách.
                    </p>
                    <p>
                        4. Mượn sách tại thư viện: Khi bạn muốn mượn sách, hãy mang thẻ hội viên Waka và tìm đến quầy
                        mượn sách tại thư viện. Liệu hỗ trợ sẽ giúp bạn trong quá trình mượn sách và kiểm tra thông tin
                        trên thẻ hội viên để xác nhận quyền lợi mượn sách của bạn.
                    </p>
                </div>
            </div>
            <div className={cx('foodter')}>
                <div className={cx('foodter-left')}>
                    <h4>THÔNG TIN LIÊN HỆ</h4>
                    <div className={cx('foodter-left-content')}>
                        <p>
                            <strong>Công ty Cổ phần Sách điện tử Waka</strong> - Tầng 6, tháp văn phòng quốc tế Hòa
                            Bình, số 106, đường Hoàng Quốc Việt, phường Nghĩa Đô, Quận Cầu Giấy, thành phố Hà Nội, Việt
                            Nam.
                        </p>
                        <p>
                            ĐKKD số 0108796796 do SKHĐT TP Hà Nội cấp ngày 24/06/2019 | Chịu trách nhiệm nội dung:{' '}
                            <strong>Ông Đinh Quang Hoàng</strong>
                        </p>
                        <p>
                            Giấy xác nhận Đăng ký hoạt động phát hành xuất bản phẩm điện tử số 8132/XN-CXBIPH do Cục
                            Xuất bản, In và Phát hành cấp ngày 31/12/2019
                        </p>
                        <p>
                            {' '}
                            Giấy chứng nhận Đăng ký cung cấp dịch vụ nội dung thông tin trên mạng Viễn thông di động số
                            19/GCN-DĐ do Cục Phát thanh, truyền hình và thông tin điện tử ký ngày 11/03/2020
                        </p>
                        <p>
                            {' '}
                            Email: <strong>support@waka.vn</strong> | Tel: <strong>024.37918440</strong>
                        </p>
                    </div>
                </div>
                <div className={cx('foodter-right')}>
                    <h4>THÔNG TIN ỨNG DỤNG</h4>
                    <div className={cx('qr-box')}>
                        <ul>
                            <li>
                                <div className={cx('app-qr-code')}>
                                    <img
                                        src="https://ebook.waka.vn/themes/desktop/images/qrcode_install_app.png?v=1"
                                        className={cx('img-fluid')}
                                        alt="Đọc sách online trên Waka"
                                    />
                                </div>
                                <div className={cx('app-desc')}>
                                    <span>
                                        Hệ điều hành <strong>Android </strong>
                                    </span>
                                    <span>phiên bản ứng dụng:7.4</span>
                                    <br />
                                    <span>
                                        Hệ điều hành <strong>IOS</strong>
                                    </span>
                                    <span>phiên bản ứng dụng:7.4</span>
                                    <span>Ngày đăng: 06/12/2019</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterCard;
