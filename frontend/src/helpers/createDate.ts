export const createDate = () => {
    let date = new Date();
    let months = date.getMonth() + 1 > 9 ? date.getMonth()+1 : `0${date.getMonth()+1}`;
    let day = date.getDay() > 9 ? date.getDay() : `0${date.getDay()}`;
    let hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
    let minutes = date.getMinutes() > 9 ? date.getMinutes(): '0'+ date.getMinutes();

    return `${months}/${day}/${date.getFullYear()} ${hours + ':' + minutes}`
}
