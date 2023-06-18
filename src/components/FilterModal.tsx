import { observer } from "mobx-react";

const FilterModal = observer(({ closeModal }: any) => {
    return(
        <>
            <label>By Brand:
               <select></select> 
            </label>
            <button onClick={() => closeModal.closeFilterModal()}>Filter</button>
        </>
    );
});

export default FilterModal;