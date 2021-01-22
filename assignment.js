

// Code-1
function kilometerToMeter(kilometer) {
    var Meter = kilometer * 1000;
    if (kilometer < 0)
        return 'Error!!'
    else
        return Meter;
}



//Code-2
function budgetCalculator(watch, mobile, laptop) {
    var total = (watch * 50) + (mobile * 100) + (laptop * 500)
    if (watch < 0 || mobile < 0 || laptop < 0)
        return 'Error!!'
    else
        return total;
}



//code-3
function hotelCost(day) {
    if (day < 0)
        return 'Error!!';
    if (day <= 10)
        cost = day * 100;
    else if (day <= 20)
        cost = 10 * 100 + (day - 10) * 80;
    else
        cost = 10 * 100 + 10 * 80 + (day - 20) * 50;

    return cost;
}



//Code-4
function megaFriend(arr) {
    var longest = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    if (longest.length == 0)
        return 'Error!!';
    else
        return longest;
}












