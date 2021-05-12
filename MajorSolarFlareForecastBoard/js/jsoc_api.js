const title = 'Major Solar Flare Forecast Board';
const resourUrl = '../MajorSolarFlareForecastBoard/resource/';
const mharp = resourUrl + 'hmi_mharp_720s_nrt.html';
var harp_addr_head = resourUrl + 'hmi_sharp_720s_nrt[';
var harp_addr_foot = '].html';

var keys = 'T_REC,HARPNUM,USFLUX,TOTUSJH,TOTUSJZ,TOTPOT,ABSNJZH,SAVNCPP';

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
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', mharp, true);
    httpRequest.send();
}

function alertContents() {
    try {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                var jsonMharp = JSON.parse(httpRequest.responseText);
                for(var j = 0; j < jsonMharp.count; j++) {
                    var harp_addr = harp_addr_head+jsonMharp.keywords[1].values[j]+harp_addr_foot;
                    againRequest(harp_addr);
                }
            } else {
                alert("problem");
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
    httpRequest1.open('GET', harp_addr, true);
    httpRequest1.send();
}

function againContents() {
    try {
        if(httpRequest1.readyState === XMLHttpRequest.DONE) {
            if(httpRequest1.status === 200) {
                var jsonHarp = JSON.parse(httpRequest1.responseText);
                console.log(jsonHarp);
            } else {
                alert("problem");
            }
        }
    } catch(e) {
        console.log('Caught Exception: ' + e.description);
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