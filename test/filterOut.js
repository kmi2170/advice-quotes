var data = [
    { data: 'This is Important.' },
    { data: 'This is Important.' },
    { data: 'This is Important.' },
    { data: 'This is test.' },
    { data: 'This is test.' },
    { data: 'This is test.' },
    { data: 'This is test.' },
];
var checkString = function (string) {
    return string.toLowerCase().includes('important');
};
var filterOut = function () {
    var count = 0;
    var advice;
    var res;
    while (count < 30) {
        // await new Promise((cb) => setTimeout(cb, 1000));
        res = data.map(function (el) {
            var data = el.data;
            advice = data;
            if (!checkString(advice))
                return advice;
        });
        count++;
    }
    console.log(res);
    return res[0];
};
var res = data.map(function (el) {
    var data = el.data;
    var advice = data;
    // console.log(advice);
    if (checkString(advice)) {
        console.log('find string to filter out', advice);
        advice = filterOut();
        return advice;
    }
});
