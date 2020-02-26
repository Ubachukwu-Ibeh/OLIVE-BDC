// const show = document.getElementById('show')
// fetch('https://api.exchangeratesapi.io/latest')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         show.innerHTML = data.rates.USD
//     })
const metrics = document.getElementById('metrics');
const ACTION = () => {
    if (window.pageYOffset > 1150 && window.pageYOffset < 1250) {
        const aotVal = document.getElementById('aot-val');
        const notVal = document.getElementById('not-val');
        const csVal = document.getElementById('cs-val');
        const yVal = document.getElementById('y');
        const aotNums = ['120', '345', '894', '11K', '21K', '32K', '20M', '33M', '99M', '$5B+'];
        const notNums = ['120', '345', '894', '11K', '21K', '32K', '50K', '99K', '111K', '1M+'];
        const csNums = ['120', '345', '894', '11K', '21K', '32K', '70K', '111K', '77K', '100K+'];
        const yNums = ['1', '2', '3', '4', '5', '7', '9', '11', '13', '14'];
        let b = 0;
        const run = setInterval(() => {
            if (b === aotNums.length - 1) {
                clearInterval(run);
            }
            aotVal.innerHTML = aotNums[b];
            b++;
        }, 100);
        let c = 0;
        const run2 = setInterval(() => {
            if (c === notNums.length - 1) {
                clearInterval(run2);
            }
            notVal.innerHTML = notNums[c];
            c++;
        }, 100);
        let d = 0;
        const run3 = setInterval(() => {
            if (d === csNums.length - 1) {
                clearInterval(run3);
            }
            csVal.innerHTML = csNums[d];
            d++;
        }, 100);
        let e = 0;
        const run4 = setInterval(() => {
            if (e === yNums.length - 1) {
                clearInterval(run4);
            }
            yVal.innerHTML = yNums[e];
            e++;
        }, 100);
    } else {
        return;
    }
}
window.addEventListener('scroll', () => {
    ACTION();
})
