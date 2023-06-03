import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MediaDate.scss';
import { Link } from 'react-router-dom';

function MediaDate() {
    return (
        <>
            <div class="media1">
                <div class="block-date mr-3">
                    <span>11</span>
                    <p>Apr</p>
                </div>
                <div class="media-body">
                    <p>
                        <Link className="link">Waka thông báo tạm dừng chương trình “Thử thách đọc sách”</Link>{' '}
                    </p>
                </div>
            </div>
            <div class="media2">
                <div class="block-date mr-3">
                    <span>11</span>
                    <p>Apr</p>
                </div>
                <div class="media-body">
                    <p>
                        <Link className="link">Ưu đãi tháng 5: Đăng kí Hội viên nhận ngay phần quà hấp dẫn !</Link>{' '}
                    </p>
                </div>
            </div>
            <div class="media3">
                <div class="block-date mr-3">
                    <span>11</span>
                    <p>Apr</p>
                </div>
                <div class="media-body">
                    <p>
                        <Link className="link">Checkin tại waka để có cơ hội nhận sách miễn phí: đi thôi nào</Link>{' '}
                    </p>
                </div>
            </div>
        </>
    );
}

export default MediaDate;
