type TDate = string | number | undefined;

export const convertDate = (date: TDate,time: boolean = false) => {
    let months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    if (date) {
        let convertedDate = new Date(Date.now() - +date);
        let day = convertedDate.getDate() < 10 ? '0' +convertedDate.getDate(): convertedDate.getDate();
        let month =  months[+convertedDate.getMonth()];
        let year = convertedDate.getFullYear();

        return time ? `${month} ${day}  ${convertedDate.getHours()}:${convertedDate.getMinutes()}` : `${month} ${day} ${year}`;
    }

    return "Today";
}
