import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-footer')}>
                <div className={cx('content-footer')}>
                    <div>
                        <p className={cx('cus-name')}>_Chuyện người tùy nữ, Margaret Atwood _</p>
                        <p className={cx('cus-quote')}>
                            Không ai chết vì thiếu tình dục. Ta chết là vì thiếu tình yêu.
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('botton-footer')}>
                <div className={cx('div')}>
                    <div className={cx('footer-left')}>
                        <div className={cx('footer-box-header')}>
                            <p>THÔNG TIN HỮU ÍCH</p>
                        </div>
                        <div className={cx('footer-box-content')}>
                            <div className={cx('footer-box-content-left-box')}>
                                <ul>
                                    <li>
                                        <a href="/gioi-thieu">Giới thiệu chung</a>
                                    </li>
                                    <li>
                                        <a href="/review-truyen-cafe-sach">Review Truyện</a>
                                    </li>
                                    <li>
                                        <a href="/tin-tuc">Tin Tức</a>
                                    </li>
                                    <li>
                                        <a href="/thu-thach-doc-sach">Thử thách đọc sách</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('footer-box-content-right-box')}>
                                <ul>
                                    <li>
                                        <a href="/thoa-thuan-su-dung-dich-vu-waka">Thỏa thuận sử dụng dịch vụ</a>
                                    </li>
                                    <li>
                                        <a href="https://ebook.waka.vn/tin-tuc/3-quyen-loi-chi-waka-vip-moi-co-n1wNW.html">
                                            Quyền lợi
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/quyen-loi-rieng-tu">Quy định riêng tư</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer-center')}>
                        <div className={cx('footer-box-header')}>
                            <p>THÔNG TIN LIÊN HỆ</p>
                        </div>
                        <div className={cx('footer-box-content')}>
                            <div>
                                <button className={cx('contact-bt')}>1900545482 nhánh 5</button>
                            </div>
                            <p>Tổng đài tư vấn miễn phí</p>
                            <p>(8:00 AM - 22:00 PM)</p>
                        </div>
                    </div>
                    <div className={cx('footer-right')}>
                        <div className={cx('footer-box-header')}>
                            <p>ỨNG DỤNG DI ĐỘNG</p>
                        </div>
                        <div className={cx('footer-box-content')}>
                            <ul>
                                <li data-url="https://ebook.waka.vn/android-qr.png?v=1">
                                    <div className={cx('app-qr-code-box-shadow')}>
                                        <img
                                            src="https://ebook.waka.vn/android-qr.png?v=1"
                                            alt="Đọc sách online trên Waka"
                                        />
                                    </div>
                                    <div className={cx('app-desc')}>
                                        <p>Hệ điều hành Android</p>
                                        <p>Phiên bản ứng dụng: 7.4</p>

                                        <p>Ngày đăng: 06/12/2019</p>
                                    </div>
                                </li>
                                <li data-url="https://ebook.waka.vn/ios-qr.png?v=2">
                                    <div className={cx('app-qr-code-box-shadow')}>
                                        <img
                                            src="https://ebook.waka.vn/ios-qr.png?v=2"
                                            className={cx('img-fluid')}
                                            alt="Đọc sách online trên Waka"
                                        />
                                    </div>
                                    <div className={cx('app-desc')}>
                                        <p>Hệ điều hành IOS</p>
                                        <p>Phiên bản ứng dụng: 7.4</p>

                                        <p>Ngày đăng: 04/12/2019</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-row')}>
                    <p>
                        Công ty Cổ phần Sách điện tử Waka - Tầng 6, tháp văn phòng quốc tế Hòa Bình, số 106, đường Hoàng
                        Quốc Việt, phường Nghĩa Đô, Quận Cầu Giấy, thành phố Hà Nội, Việt Nam.
                    </p>
                    <p>
                        ĐKKD số 0108796796 do SKHĐT TP Hà Nội cấp ngày 24/06/2019 | Chịu trách nhiệm nội dung: Ông Đinh
                        Quang Hoàng Giấy xác nhận Đăng ký hoạt động phát hành xuất bản phẩm điện tử số 8132/XN-CXBIPH do
                        Cục Xuất bản, In và Phát hành cấp ngày 31/12/2019 Giấy chứng nhận Đăng ký cung cấp dịch vụ nội
                        dung thông tin trên mạng Viễn thông di động số 19/GCN-DĐ do Cục Phát thanh, truyền hình và thông
                        tin điện tử ký ngày 11/03/2020
                    </p>
                    <p>Số VPGD: 024.73086566 | Số CSKH: 1900545482 nhánh 5 | Hotline: 0961186584</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
