import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content--up">
        <div className="footer-content--up--first">
          <div className="footer-content--up--first__up">
            <p>Thông tin hữu ích</p>
          </div>
          <div className="footer-content--up--first__down">
            <div className="footer-content--up--first__down-1">
              <ul style={{ margin: 0 }}>
                <li>
                  <a href="1">Giới thiệu chung</a>
                </li>
                <li>
                  <a href="2">Review Truyện - Café Sách</a>
                </li>
                <li>
                  <a href="3">Tin Tức</a>
                </li>
                <li>
                  <a href="4">Thử thách đọc sách</a>
                </li>
              </ul>
            </div>
            <div className="footer-content--up--first__down-2">
              <ul style={{ margin: 0 }}>
                <li>
                  <a href="1">Thỏa thuận sử dụng dịch vụ</a>
                </li>
                <li>
                  <a href="2">Quyền lợi</a>
                </li>
                <li>
                  <a href="3">Quy định riêng tư</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-content--up--second">
          <div class="footer-box-header">
            <p>Thông tin liên hệ</p>
          </div>
          <div class="footer-box-content">
            <div>
              <button class="lien-he-bt" className="footer-box-content--button">
                <img
                  style={{ marginRight: "10px" }}
                  src="	https://ebook.waka.vn/themes/desktop/images/icon_phone.png"
                  alt="liên hệ"
                />
                1900545482 nhánh 5
              </button>
            </div>
            <p>Tổng đài tư vấn miễn phí</p>
            <p>(8:00 AM - 22:00 PM)</p>
          </div>
          <div class="footer-box-footer">
            <div
              class="linked-box-social"
              style={{ transform: "translateY(10px)" }}
            >
              <img
                src="https://images.dmca.com/Badges/dmca-badge-w100-2x1-04.png?ID=7dd8a8a8-9975-4a5d-b68f-ebc75665a0dc"
                alt="DMCA.com Protection Status"
              />
            </div>
          </div>
        </div>
        <div className="footer-content--up--third">
          <div class="footer-box-header">
            <p>Ứng dụng di động</p>
          </div>
          <div className="footer-box-content-down" style={{marginBottom: '85px'}}>
            <ul>
              <li>
                <div class="app-qr-code box-shadow">
                  <img
                    src="https://ebook.waka.vn/android-qr.png?v=1"
                    className="img-fluid"
                    alt="Đọc sách online trên Waka"
                  />
                </div>
                <div className="app-desc">
                  <p>
                    Hệ điều hành Android Phiên bản ứng dụng: 7.4 Ngày đăng:
                    06/12/2019
                  </p>
                </div>
              </li>
              <li>
                <div class="app-qr-code box-shadow">
                  <img
                    src="https://ebook.waka.vn/ios-qr.png?v=2"
                    className="img-fluid"
                    alt="Đọc sách online trên Waka"
                  />
                </div>
                <div className="app-desc">
                  <p>
                    Hệ điều hành IOS 
                    Phiên bản ứng dụng: 7.4
                    Ngày đăng: 04/12/2019
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-content--up footer-content--down">
        <div className="relative">
          <p
            style={{ lineHeight: "24px", fontSize: "12px" }}
            className="p-text"
          >
            Công ty Cổ phần Sách điện tử Waka - Tầng 6, tháp văn phòng quốc tế
            Hòa Bình, số 106, đường Hoàng Quốc Việt, phường Nghĩa Đô, Quận Cầu
            Giấy, thành phố Hà Nội, Việt Nam.
          </p>
          <p
            style={{ lineHeight: "24px", fontSize: "12px" }}
            className="p-text"
          >
            ĐKKD số 0108796796 do SKHĐT TP Hà Nội cấp ngày 24/06/2019 | Chịu
            trách nhiệm nội dung: Ông Đinh Quang Hoàng Giấy xác nhận Đăng ký
            hoạt động phát hành xuất bản phẩm điện tử số 8132/XN-CXBIPH do Cục
            Xuất bản, In và Phát hành cấp ngày 31/12/2019 Giấy chứng nhận Đăng
            ký cung cấp dịch vụ nội dung thông tin trên mạng Viễn thông di động
            số 19/GCN-DĐ do Cục Phát thanh, truyền hình và thông tin điện tử ký
            ngày 11/03/2020
          </p>
          <p
            style={{ lineHeight: "24px", fontSize: "12px" }}
            className="p-text"
          >
            Số VPGD: 024.73086566 | Số CSKH: 1900545482 nhánh 5 | Hotline:
            0961186584
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
