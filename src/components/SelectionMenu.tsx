import React from 'react';
import '../styles/SelectionMenu.css';
import { observer } from 'mobx-react';
import SortModal from './SortModal';
import FilterModal from './FilterModal';

type SelectionMenuProps = {
    resultsLength: number;
}

const SelectionMenu = observer(({ resultsLength, modalStore }: any) => {
    return(
        <section>
            <span>Results: <strong>{resultsLength.pageLength}</strong></span>
            <div className="options">
                <button onClick={() => modalStore.openSortModal()}>Sort By</button>
                <button>Filter By</button>
            </div>
            {modalStore.isSortModalOpen && <SortModal closeModal={modalStore} resLength={resultsLength} />}
        </section>
    );
});

export default SelectionMenu;