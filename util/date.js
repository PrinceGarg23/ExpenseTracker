export function getFormattedDate(date){
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

export function getDateMinusDays(date,days){
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy;
}