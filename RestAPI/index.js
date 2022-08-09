var request = require('request');
var fs = require('fs');

var addr = 'http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.mharp_720s_nrt[][$]&op=rs_list&key=T_REC,HARPNUM,NOAA_ARS';
var harp_addr_head = 'http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.sharp_720s_nrt[';
var harp_addr_foot = '][]&op=rs_list&key=';
var mharp_dir = '../MajorSolarFlareForecastBoard/resource/hmi_mharp_720s_nrt.html';
var harpnum_dir_head = '../MajorSolarFlareForecastBoard/resource/hmi_sharp_720s_nrt[';
var harpnum_dir_foot = '].html';

var keys = 'T_REC,HARPNUM,TOTUSJH,TOTUSJZ,TOTPOT,USFLUX,ABSNJZH,SAVNCPP';

var data = request(addr, function (error, response, body) {
    if(!error && response.statusCode == 200) {
        var jsonData = JSON.parse(body);
    }
        
    for(var j = 0; j < jsonData.count; j++) {
        var harp_addr = harp_addr_head+jsonData.keywords[1].values[j]+harp_addr_foot+keys;
        var harp_data = request(harp_addr, function (err, res, bo) {
            if(!err && res.statusCode == 200) {
                var harpData = JSON.parse(bo);
            }
        });
        harp_data
            .pipe(fs.createWriteStream(harpnum_dir_head+jsonData.keywords[1].values[j]+harpnum_dir_foot));    
    }   
});
data
    .pipe(fs.createWriteStream(mharp_dir));

// {"keywords":[{"name":"HARPNUM","values":["6314"]},{"name":"NOAA_ARS","values":["12818,12820,12821"]},{"name":"T_REC","values":["2021.05.01_05:24:00_TAI"]}],"segments":[],"links":[],"count":1,"runtime":0.029,"status":0}

// var request = require('request');
// var tidy = require('htmltidy');
// var fs = require('fs');
// var opts = {
//     doctype: 'html5',
//     hideComments: false,
//     indent: true
// }
// var worker = tidy.createWorker(opts);

// var data = request('http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.mharp_720s_nrt[][$]&op=rs_list&key=HARPNUM,NOAA_ARS,T_REC');
// data    
//     .pipe(worker)
//     .pipe(fs.createWriteStream('../dataviewer/resource/hmi_mharp_720s_nrt.html'));

// data
//     .pipe(fs.createWriteStream('../dataviewer/resource/hmi_mharp_720s_nrt1.html'));


// const http = require('http'); // http 모듈 불러오기
// const url = 'http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.mharp_720s_nrt[][$]&op=rs_list&key=HARPNUM,NOAA_ARS,T_REC'; // 긁어오고 싶은 주소를 입력.

// http.get(url, stream => {
//   let rawdata = '';
//   stream.setEncoding('utf8');
//   stream.on('data', buffer => rawdata += buffer);
//   stream.on('end', function () {
//     console.log(rawdata); // 긁어온 내용 뿌리기
//   });
// });