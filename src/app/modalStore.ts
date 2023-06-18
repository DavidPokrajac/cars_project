import { makeAutoObservable } from "mobx";
import { carsStor } from "./store";

class ModalStore {
    isSortModalOpen: boolean = false;
    isFilterModalOpen: boolean = false;
    isDeleteModalOpen: boolean = false;
    carToDel: any = null;

    constructor() {
        makeAutoObservable(this);
    }

    openSortModal() {
        this.isSortModalOpen = true;
    }

    closeSortModal() {
        this.isSortModalOpen = false;
    }

    openFilterModal() {
        this.isFilterModalOpen = true;
    }

    closeFilterModal() {
        this.isFilterModalOpen = false;
    }

    openDeleteModal(id: any) {
        this.isDeleteModalOpen = true;
        this.carToDel = id;
    }

    closeDeleteModal() {
        this.isDeleteModalOpen = false;
    }
}

export const modalStore = new ModalStore();