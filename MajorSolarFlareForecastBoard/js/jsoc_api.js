const title = 'Major Solar Flare Probability Forecast Board';
const resourUrl = '../MajorSolarFlareForecastBoard/resource/';
const mharp = resourUrl + 'hmi_mharp_720s_nrt.html';
var harp_addr_head = resourUrl + 'hmi_sharp_720s_nrt[';
var harp_addr_foot = '].html';
var jsonMharp = null;
var j = 0;
var param_a = [1.61, 1.56, 1.11, 1.34, 0.98, 1.16];
var param_b = [-6.34, -22.21, -27.25, -30.95, -3.31, -16.0];

var keys = 'T_REC,HARPNUM,TOTUSJH,TOTUSJZ,TOTPOT,USFLUX,ABSNJZH,SAVNCPP';

addLoadEvent(function() {
    var name = document.getElementById('name');
    name.innerHTML = title;
});

makeRequest();

function makeRequest() {
    httpRequest = new XMLHttpRequest();
    if(!httpRequest) {
        return false;
    }
    httpRequest.onreadystatechange = firstContents;
    httpRequest.open('GET', mharp, true);
    httpRequest.send();
}

function firstContents() {
    try {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                jsonMharp = JSON.parse(httpRequest.responseText);

                for(j = 0; j < jsonMharp.count; j++) {
                    var tbody = document.getElementsByClassName('tbody')[0];

                    var tr_value = document.createElement('tr');
                    tr_value.className = 'tr';
    
                    tbody.appendChild(tr_value);
    
                    for(var i = 0; i < Object.keys(jsonMharp.keywords).length; i++) {
                        var td = document.createElement('td');
                        td.className = 'contents';
                        td.innerHTML = jsonMharp.keywords[i].values[j];
                        tr_value.appendChild(td);
                    }
                    var harp_addr = harp_addr_head+jsonMharp.keywords[1].values[j]+harp_addr_foot;
                    againRequest(harp_addr);
                }
            } else {
                console.log("problem");
            }
        }
    } catch(e) {
        console.log('Caught Exception: ' + e.description);
    }    
}

function againRequest(harp_addr) {
    httpRequest1 = new XMLHttpRequest();
    if(!httpRequest1) {
        return false;
    }
    httpRequest1.onreadystatechange = againContents;
    httpRequest1.open('GET', harp_addr, false);
    httpRequest1.send();
}

function againContents() {
    try {
        if(httpRequest1.readyState === XMLHttpRequest.DONE) {
            if(httpRequest1.status === 200) {
                var jsonHarp = JSON.parse(httpRequest1.responseText);

                var tr_value = document.getElementsByClassName('tr')[j];

                for(var i = 0; i < Object.keys(jsonHarp.keywords).length - 2; i++) {

                    var td = document.createElement('td');
                    td.className = 'contents';
                    var fixed = Number.parseFloat(1*jsonHarp.keywords[i+2].values[jsonHarp.keywords[i+2].values.length-1]).toExponential(2);
                    td.innerHTML = fixed;
                    tr_value.appendChild(td);

                    var param = jsonHarp.keywords[i+2].values[jsonHarp.keywords[i+2].values.length-1];
                    var temp_log = Math.log(param)/Math.log(10);
                    var Power = param_a[i]*temp_log + param_b[i];
                    var temp_R = -1.*Math.pow(10, Power);
                    var temp_P = 1. - Math.exp(temp_R);
                    var per_P = (100*temp_P).toFixed(2);
                    var td_p = document.createElement('td');
                    td_p.className = 'contents';
                    td_p.innerHTML = per_P;
                    tr_value.appendChild(td_p);
                }

            } else {
                console.log("problem");
            }
        }
    } catch(e) {
        console.log('Again Caught Exception: ' + e.description);
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

// request.open('POST', mharp, true);
// addLoadEvent_http(function () {
//     addLoadEvent(function () {
//         var jsonMharp = JSON.parse(request.responseText);
//         // console.log(jsonMharp);
//         for(var j = 0; j < jsonMharp.count; j++) {
//             var harp_addr = harp_addr_head+jsonMharp.keywords[1].values[j]+harp_addr_foot;
//             // console.log(harp_addr);
//             // console.log(Object.keys(jsonMharp.keywords).length);
//                 request.open('POST', harp_addr, false);
//                 addLoadEvent_http(function () {
//                     console.log(j);
//                     var jsonHarp = JSON.parse(request.responseText);

//                     var tbody = document.getElementsByClassName('tbody')[0];

//                     var tr_value = document.createElement('tr');
//                     tr_value.className = 'tr';

//                     tbody.appendChild(tr_value);

//                     for(var i = 0; i < Object.keys(jsonMharp.keywords).length; i++) {
//                         var td = document.createElement('td');
//                         td.innerHTML = jsonMharp.keywords[i].values[j];
//                         tr_value.appendChild(td);
//                     }

//                     for(var i = 0; i < Object.keys(jsonHarp.keywords).length - 2; i++) {
//                         var td = document.createElement('td');
//                         td.innerHTML = jsonHarp.keywords[i+2].values[jsonHarp.keywords[i+2].values.length-1];
//                         tr_value.appendChild(td);

//                         var td_p = document.createElement('td');
//                         td_p.innerHTML = jsonHarp.keywords[i+2].values[jsonHarp.keywords[i+2].values.length-1];
//                         tr_value.appendChild(td_p);
//                     }

//                     // console.log(j, jsonHarp);
//                 });
//                 request.send();

//             // console.log(harp_addr);
//         }
//     });
// });
// request.send();

// function addLoadEvent_http(func) {
//     var oldonload = request.onload;
//     if(typeof request.onload != 'function') {
//         request.onload = func;
//     } else {
//         request.onload = function() {
//             oldonload();
//             func();
//         }
//     }
// }

// fetch('http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.mharp_720s_nrt[][$]&op=rs_list&key=HARPNUM,NOAA_ARS,T_REC')
//   .then(res => {
//       // response 처리
//       console.log(res);
//       // 응답을 JSON 형태로 파싱
//       return res.json();
//   })
//   .then(data => {
//       // json 출력
//       console.log(data)
//   })
//   .catch(err => {
//       // error 처리
//       console.log('Fetch Error', err);
//   });