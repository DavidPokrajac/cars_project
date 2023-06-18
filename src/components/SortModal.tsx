import { observer } from "mobx-react";
import '../styles/app.css';

const SortModal = observer(({ closeModal, resLength }: any) => {
    return(
        <div className='sort-modal-container' onClick={() => closeModal.closeSortModal()}>
            <div className='sort-modal'>
                <button onClick={() => {
                    closeModal.closeSortModal();
                    resLength.sortByNewest();
                }}>Newest by year</button>
                <button onClick={() => {
                    closeModal.closeSortModal();
                    resLength.sortByOldest();
                }}>Oldest by year</button>
                <button onClick={() => {
                    closeModal.closeSortModal();
                    resLength.sortByHighestPrice();
                }}>Highest price</button>
                <button onClick={() => {
                    closeModal.closeSortModal();
                    resLength.sortByLowestPrice();
                }}>Lowest price</button>
                <button onClick={() => {
                    closeModal.closeSortModal();
                    resLength.sortByPublished();
                }}>Recently published</button>
            </div>
        </div>
    );
});

export default SortModal;