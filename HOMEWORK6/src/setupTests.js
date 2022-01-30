const myArr = [1,2,3];

function myfilter(arr, callback) {
    if (Array.isArray(arr) == false) {
        throw new Error ('parametr arr type should be array');
    } else if (typeof callback !== 'function') {
        throw new Error ('parametr arr type should be function');
    } else {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        } console.log(arr);
        
    }     
     
}
myfilter(myArr, function callback(item, i, myArr) {
    if (item < 2) return;
    return console.log(item, myArr[i]);
});