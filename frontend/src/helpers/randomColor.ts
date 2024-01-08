export const createRandomColor = () => {
    let hexValues = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','f','e'];
    let res = '#';
    for (let i = 0; i < 8; i++) {
        res += hexValues[Math.floor(Math.random() * 16)];
    }
    return res;
}
