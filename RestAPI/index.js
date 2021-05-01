var request = require('request');
var fs = require('fs');

var data = request('http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.mharp_720s_nrt[][$]&op=rs_list&key=HARPNUM,NOAA_ARS,T_REC');
data
    .pipe(fs.createWriteStream('../dataviewer/resource/hmi_mharp_720s_nrt.html'));


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