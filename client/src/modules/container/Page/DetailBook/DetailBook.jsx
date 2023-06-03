import React from 'react';
import styles from './DetailBook.module.scss';
import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout/DefaultLayout';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

const cx = classNames.bind(styles);

function DetailBook() {
    const location = useLocation();
    const bookCT2 = location.state;
    return (
        <DefaultLayout>
            <div className={cx('wrapper')}>
                <div className={cx('category')}></div>
                <div className={cx('content')}>
                    <div className={cx('content-left')}>
                        <div className={cx('content-left-top')}>
                            <div className={cx('cover')}>
                                <img src={bookCT2.coverBook}></img>
                            </div>
                        </div>
                        <div className={cx('content-left-bottom')}>
                            <div>
                                <AiFillHeart className={cx('heart-icon')} />
                            </div>
                            <span>Đánh giá sách</span>
                        </div>
                    </div>
                    <div className={cx('content-right')}>
                        <div className={cx('book-detail')}>
                            <h4>{bookCT2.bookName}</h4>
                            <span>Tác giả: {bookCT2.bookAuthor}</span>
                            <span>Thể loại: {bookCT2.bookCategory}</span>
                            <span>Nhà xuất bản: updating</span>
                            <span>Ngày cập nhật: updating</span>
                            <span>Gói cước áp dụn: Hội viên</span>
                            <p>{bookCT2.bookDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default DetailBook;
