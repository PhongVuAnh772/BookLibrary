import React from 'react';
import styles from './LastestBook.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LastestBook() {
    return (
        <div className={cx('news')}>
            <div className={cx('title-news')}>
                <div className={cx('left-top-corner')}></div>
                <div className={cx('right-top-corner')}></div>
                <div className={cx('right-bottom-corner')}></div>
                <div className={cx('left-bottom-corner')}></div>
                <div className={cx('schedule-desc')}>
                    <h2>LỊCH PHÁT HÀNH</h2>
                    <span className={cx('bd-lbd')}></span>
                    <span className={cx('year')}>--- 2023 ---</span>
                    <p className={cx('bd-rbd')}>THÁNG 4</p>
                </div>
            </div>
            <div>
                <ul>
                    <li>Cưng chiều cô vợ quân nhân</li>
                    <li>Ương xuổng công</li>
                </ul>
            </div>
        </div>
    );
}

export default LastestBook;
