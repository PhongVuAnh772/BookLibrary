import React from 'react';
import styles from './ListBookSearch.module.scss';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../../DefaultLayout/DefaultLayout';
import CardBookSmall from '../../component/CardBook/CardBookSmall/CardBookSmall';

const cx = classNames.bind(styles);

function ListBookSearch() {
    const location = useLocation();
    const listResultSearch = location.state;
    return (
        <div className={cx('wrapper')}>
            <DefaultLayout check={false}>
                <div className={cx('content')}>
                    {listResultSearch.map((book) => {
                        return (
                            <div className={cx('book')}>
                                <CardBookSmall bookCT2={book} />
                            </div>
                        );
                    })}
                </div>
            </DefaultLayout>
        </div>
    );
}

export default ListBookSearch;
