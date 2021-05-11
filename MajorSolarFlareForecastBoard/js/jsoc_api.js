const request = new XMLHttpRequest();
const title = 'Major Solar Flare Forecast Board';
const resourUrl = 'https://Dayelim.github.io/MajorSolarFlareForecastBoard/resource/';
const mharp = resourUrl + 'hmi_mharp_720s_nrt.html';
var harp_addr_head = resourUrl + 'hmi_sharp_720s_nrt[';
var harp_addr_foot = '].html';

var keys = 'T_REC,HARPNUM,USFLUX,TOTUSJH,TOTUSJZ,TOTPOT,ABSNJZH,SAVNCPP';

addLoadEvent(function() {
    var name = document.getElementById('name');
    name.innerHTML = title;
});

request.open('GET', mharp, true);
request.onload = function () {
    addLoadEvent(function() {
        var jsonMharp = JSON.parse(request.responseText);
        // console.log(jsonMharp);
        for(var j = 0; j < jsonMharp.count; j++) {
            var harp_addr = harp_addr_head+jsonMharp.keywords[1].values[j]+harp_addr_foot;
            // console.log(harp_addr);
            // console.log(Object.keys(jsonMharp.keywords).length);

                request.open('GET', harp_addr, false);
                request.onload = function () {
                    var jsonHarp = JSON.parse(request.responseText);

                    var tbody = document.getElementsByClassName('tbody')[0];

                    var tr_value = document.createElement('tr');
                    tr_value.className = 'tr';

                    tbody.appendChild(tr_value);

                    for(var i = 0; i < Object.keys(jsonMharp.keywords).length; i++) {
                        var td = document.createElement('td');
                        td.innerHTML = jsonMharp.keywords[i].values[j];
                        tr_value.appendChild(td);
                    }

                    for(var i = 0; i < Object.keys(jsonHarp.keywords).length - 2; i++) {
                        var td = document.createElement('td');
                        td.innerHTML = jsonHarp.keywords[i+2].values[jsonHarp.keywords[i+2].values.length-1];
                        tr_value.appendChild(td);

                        var td_p = document.createElement('td');
                        td_p.innerHTML = jsonHarp.keywords[i+2].values[jsonHarp.keywords[i+2].values.length-1];
                        tr_value.appendChild(td_p);
                    }

                    // console.log(j, jsonHarp);
                };
                request.send();

            // console.log(harp_addr);
        }
    });
};
request.send();

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