import React from 'react';
import styles from './TopBook.module.scss';
import classNames from 'classnames/bind';
import DefaultLayout from '../../DefaultLayout/DefaultLayout';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const cx = classNames.bind(styles);

function TopBook() {
    const [topBook, setTopBook] = useState([]);
    let i = 0;
    useEffect(() => {
        axios
            .get('http://localhost:8083/top-book')
            .then((response) => {
                setTopBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <DefaultLayout>
            <div className={cx('slide')}>
                <img src="https://ebook.waka.vn/themes/desktop/reactjs//images/bannerButton.jpg" />
            </div>
            <div className={cx('content')}>
                <div className={cx('content-left')}>
                    <div className={cx('content-left-header')}>
                        <h4>Bảng xếp hạng</h4>
                        <div className={cx('category')}>
                            <Link className={cx('category-book')}>Sách</Link>
                            <Link className={cx('category-book')}>Sách nói</Link>
                        </div>
                    </div>
                    <div className={cx('content-left-body')}>
                        {Object.keys(topBook).length > 0 &&
                            topBook.map((book) => {
                                i += 1;
                                return (
                                    <div className={cx('row')}>
                                        <div className={cx('stt')}>{i}</div>
                                        <Link className={cx('link-detail')} to="/detailbook" state={book}>
                                            <div className={cx('content1')}>
                                                <img className={cx('cover')} src={book.coverBook} />
                                                <div>
                                                    <p className={cx('bookName')}>{book.bookName}</p>
                                                    <p className={cx('bookAuthor')}>{book.bookAuthor}</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className={cx('purchases')}>
                                            <AiOutlineShoppingCart className={cx('cart-icon')} />
                                            <span>{book.borrowingFrequency}</span>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className={cx('content-right')}>
                    <div className={cx('title')}>Tuyển tập chọn lọc</div>
                    <div>
                        <img
                            className={cx('recomment')}
                            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book_collection/0/0/0/757.jpg?v=1&w=332&h=162"
                        />
                    </div>
                    <div>
                        <img
                            className={cx('recomment')}
                            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book_collection/0/0/0/305.jpg?v=1&w=332&h=162"
                        />
                    </div>
                    <div>
                        <img
                            className={cx('recomment')}
                            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book_collection/0/0/0/277.jpg?v=3&w=332&h=162"
                        />
                    </div>
                    <div>
                        <img
                            className={cx('recomment')}
                            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book_collection/0/0/0/317.jpg?v=3&w=332&h=162"
                        />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default TopBook;
