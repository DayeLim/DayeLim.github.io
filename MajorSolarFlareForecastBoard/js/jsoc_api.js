const request = new XMLHttpRequest();
const resourUrl = 'https://Dayelim.github.io/MajorSolarFlareForecastBoard/resource/';
const mharp = resourUrl + 'hmi_mharp_720s_nrt.html';
var harp_addr_head = resourUrl + 'hmi_sharp_720s_nrt[';
var harp_addr_foot = '].html';

var keys = 'T_REC,HARPNUM,USFLUX,TOTUSJH,TOTUSJZ,TOTPOT,ABSNJZH,SAVNCPP';

request.open('GET', mharp, true);
request.onload = function () {
    var jsonMharp = JSON.parse(request.responseText);

    for(var j = 0; j < jsonMharp.count; j++) {
        var harp_addr = harp_addr_head+jsonMharp.keywords[0].values[j]+harp_addr_foot;
        console.log(harp_addr);
        request.open('GET', harp_addr, false);
        request.onload = function () {
            var jsonHarp = JSON.parse(request.responseText);
            console.log(jsonHarp);
        };
        request.send();
        // console.log(harp_addr);
    }
};
request.send();




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