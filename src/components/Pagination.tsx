import React from 'react';
import { observer } from 'mobx-react';
import { totalPgBtnsCalc } from '@/utilities';
import '../styles/app.css';

const Pagination = observer(({ resultsLength, defRes, changeHandler }: any) => {
    return(
        <div className="pagination-container">
            {totalPgBtnsCalc(defRes, resultsLength.pageLength).map((item, index) => {
                return <button key={index} onClick={() => changeHandler.getCars(item)}>{item}</button>
            })}
        </div>
    );
});

export default Pagination;