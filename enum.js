var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
    Month[Month["JUN"] = 6] = "JUN";
    Month[Month["JUL"] = 7] = "JUL";
    Month[Month["AUG"] = 8] = "AUG";
    Month[Month["SEP"] = 9] = "SEP";
    Month[Month["OCT"] = 10] = "OCT";
    Month[Month["NOV"] = 11] = "NOV";
    Month[Month["DEC"] = 12] = "DEC";
})(Month || (Month = {}));
var month;
month = Month.AUG;
console.log(month.toString());
