import React from 'react';
import styles from './ListBookByCategory.module.scss';
import classNames from 'classnames/bind';
import GrillBook from '../../component/GrillBook/GrillBook';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../../DefaultLayout/DefaultLayout';

const cx = classNames.bind(styles);

function ListBookByCategory() {
    const size = 16;
    const [listBookCT1, setListBookCT1] = useState({
        page: 1,
        totalPage: 0,
        bookEntityList: [],
    });

    const location = useLocation();
    const category = location.state;
    useEffect(() => {
        axios
            .post('http://localhost:8083/get-book-by-category', {
                page: listBookCT1.page,
                size: size,
                bookCategory: category,
            })
            .then((response) => {
                setListBookCT1({
                    ...listBookCT1,
                    totalPage: response.data.totalPage,
                    bookEntityList: [...response.data.bookEntityList],
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);
    return (
        <div className={cx('wrapper')}>
            <DefaultLayout>
                <GrillBook size={size} listBookCT1={listBookCT1} setListBookCT1={setListBookCT1}></GrillBook>
            </DefaultLayout>
        </div>
    );
}

export default ListBookByCategory;
