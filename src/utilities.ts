import { carsStor } from "./app/store";

export function getDateOfPublish(seconds: any) {
    const date = new Date(seconds).toLocaleString('hr-HR', { year: 'numeric', month: 'numeric', day: 'numeric' });
    return date;
}

export function formatPrice(price: number) {
    return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(price);
}

export function carTypeLabel(carAge: number) {
    return new Date().getFullYear() - carAge;
}

export function totalPgBtnsCalc(resPerPage: number, totalLength: number) {
    let btnArray = [];
    for(let i = 1; i <= Math.ceil(totalLength / resPerPage); i++) {
        btnArray.push(i);
    }
    return btnArray;
}

export function capitalize(wordToCapitalize: string) {
    return  wordToCapitalize ? wordToCapitalize[0].toUpperCase() + wordToCapitalize.slice(1) : '';
}

export function paginate(index: number, i: number) {
    if(i === 1) {
        return index < i * carsStor.defaultResPerPage;
    }
    else if(i > 1) {
        return  index >= (i - 1) * carsStor.defaultResPerPage && 
                index < i * carsStor.defaultResPerPage;
    }
}