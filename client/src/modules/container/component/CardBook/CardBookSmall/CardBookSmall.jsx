import React from 'react';
import styles from './CardBookSmall.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardBookSmall(props) {
    return (
        <div className={cx('card-box')}>
            <div className={cx('card-body')}>
                <img src={props.bookCT2.coverBook}></img>
                <div className={cx('coating')}>
                    <span>
                        <Link to="" className={cx('hover-category')}>
                            {props.bookCT2.bookName}
                        </Link>
                    </span>
                    <span>
                        <Link to="" className={cx('hover-branch')}>
                            {props.bookCT2.bookAuthor}
                        </Link>
                    </span>
                    <button>
                        <Link className={cx("linkdetail-book")} to="/detailbook" state={props.bookCT2}>Chi tiết</Link>
                    </button>
                </div>
            </div>
            <div className={cx('card-footer')}>
                <span>Gói Hội viên</span>
            </div>
        </div>
    );
}

export default CardBookSmall;
