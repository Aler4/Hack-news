type TDate = string | number | undefined;

export const convertDate = (date: TDate,isTime: boolean = false) => {
    let months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    if (date) {
        let convertedDate = new Date(Date.now() - +date);
        let day = convertedDate.getDate() < 10 ? '0' +convertedDate.getDate(): convertedDate.getDate();
        let month =  months[+convertedDate.getMonth()];
        let year = convertedDate.getFullYear();
        let time = `${convertedDate.getHours() > 9 ? convertedDate.getHours() : '0' + convertedDate.getHours() }:${convertedDate.getMinutes() > 9 ? convertedDate.getMinutes(): '0'+ convertedDate.getMinutes() }`

        return isTime ? `${month} ${day}  ${time}` : `${month} ${day} ${year}`;
    }

    return "Today";
}
