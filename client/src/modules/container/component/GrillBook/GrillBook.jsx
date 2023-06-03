import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardBookMedium from '../CardBook/CardBookMedium/CardBookMedium';
import './GrillBook.css';

function GrillBook(props) {
    const list1 = [...props.listBookCT1.bookEntityList];
    let list2 = [];
    let page = props.listBookCT1.page;
    let sqrtsize = Math.sqrt(props.size);
    for (let i = 0; i < list1.length; i += sqrtsize) {
        if (sqrtsize === 3) {
            if (list1[i + 1] && list1[i + 2]) {
                list2.push([...list1.slice(i, i + 3)]);
            } else if (list1[i + 1] && !list1[i + 2]) {
                list2.push([...list1.slice(i, (i = 2))]);
            } else {
                list2.push([...list1.slice(i, i + 1)]);
            }
        } else if (sqrtsize === 4) {
            if (list1[i + 1] && list1[i + 2] && list1[i + 3]) {
                list2.push([...list1.slice(i, i + 4)]);
            } else if (list1[i + 1] && list1[i + 2]) {
                list2.push([...list1.slice(i, i + 3)]);
            } else if (list1[i + 1] && !list1[i + 2]) {
                list2.push([...list1.slice(i, (i = 2))]);
            } else {
                list2.push([...list1.slice(i, i + 1)]);
            }
        }
    }
    let indexPage = [];
    for (let i = 1; i <= props.listBookCT1.totalPage; i++) {
        indexPage.push(i);
    }

    const handleChangePage = (index) => {
        if (index === 'previos') {
            props.setListBookCT1({
                ...props.listBookCT1,
                page: page - 1,
            });
        } else if (index === 'next') {
            props.setListBookCT1({
                ...props.listBookCT1,
                page: page + 1,
            });
        } else {
            props.setListBookCT1({
                ...props.listBookCT1,
                page: index,
            });
        }
    };
    return (
        <>
            <div class="container ms-2 mt-2">
                <div class="row test">
                    {list2.map((bookList) => {
                        return (
                            <>
                                {bookList.map((book) => {
                                    return (
                                        <>
                                            <div class="col-auto p-2">
                                                <CardBookMedium book={book} />
                                            </div>
                                        </>
                                    );
                                })}
                                <div class="w-100"></div>
                            </>
                        );
                    })}
                </div>
            </div>
            <nav aria-label="..." className="pagin mt-3">
                <ul class="pagination pagination-sm justify-content-end mr-5">
                    {props.listBookCT1.page <= 1 ? (
                        <li class="page-item disabled" key={'previos'}>
                            <button class="page-link" tabindex="-1">
                                {'<'}
                            </button>
                        </li>
                    ) : (
                        <li
                            class="page-item"
                            key={'previos'}
                            onClick={() => {
                                handleChangePage('previos');
                            }}
                        >
                            <button class="page-link" tabindex="-1">
                                {'<'}
                            </button>
                        </li>
                    )}
                    {indexPage.map((index) => {
                        return (
                            <>
                                {index === props.listBookCT1.page ? (
                                    <li key={index} class="page-item active ms-2">
                                        <button class="page-link">{index}</button>
                                    </li>
                                ) : (
                                    <li
                                        key={index}
                                        class="page-item ms-2"
                                        onClick={() => {
                                            handleChangePage(index);
                                        }}
                                    >
                                        <button class="page-link">{index}</button>
                                    </li>
                                )}
                                ;
                            </>
                        );
                    })}
                    {props.listBookCT1.page >= props.listBookCT1.totalPage ? (
                        <li class="page-item disabled" key={'next'}>
                            <button class="page-link ms-2">{'>'}</button>
                        </li>
                    ) : (
                        <li
                            class="page-item"
                            key={'next'}
                            onClick={() => {
                                handleChangePage('next');
                            }}
                        >
                            <button class="page-link ms-2">{'>'}</button>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default GrillBook;
