import React from 'react';
import styles from './CardBookMedium.module.scss';
import classNames from 'classnames/bind';
import { BiBookHeart } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardBookMedium(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('div')}>
                <div className={cx('content')}>
                    <img className={cx('thumbnail')} src={props.book.coverBook} alt="..."></img>
                    <BiBookHeart className={cx('book-icon')} />
                    <div className={cx('introduce')}>
                        <p className={cx('titlebook')}>{props.book.bookName}</p>
                        <span className={cx('author')}>{props.book.bookAuthor}</span>
                        <span className={cx('vote-icon')}>
                            <AiFillHeart />
                            <AiFillHeart />
                            <AiFillHeart />
                            <AiFillHeart />
                            <AiFillHeart />
                        </span>
                        <span className={cx('vote-number')}>10 vote</span>
                        <span className={cx('short-description')}>{props.book.bookDescription}</span>
                    </div>
                    <button className={cx('detail')}>
                        <Link className={cx('linkdetail-book')} to="/detailbook" state={props.book}>
                            Chi tiết
                        </Link>
                    </button>
                </div>
                <div className={cx('views')}>
                    <AiOutlineEye className={cx('views-icon')} />
                    <span>Lượt xem</span>
                </div>
            </div>
        </div>
    );
}

export default CardBookMedium;
