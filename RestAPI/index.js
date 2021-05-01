var request = require('request');
var tidy = require('htmltidy');
var fs = require('fs');
var opts = {
    doctype: 'html5',
    hideComments: false,
    indent: true
}
var worker = tidy.createWorker(opts);
var data = request.get('http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.mharp_720s_nrt[][$]&op=rs_list&key=HARPNUM,NOAA_ARS,T_REC').pipe(worker);
data.pipe(fs.createWriteStream('test.html'));

// const request = require('request');
// const fs = require('fs');
// const tidy = require('htmltidy').tidy;
// const opts = {
//     doctype: 'html5',
//     indent: true
// };
// request('http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.mharp_720s_nrt[][$]&op=rs_list&key=HARPNUM,NOAA_ARS,T_REC', function (error, response, body) {
//     if(!error&&response.statusCode==200) {
//         console.log(body);
//         tidy('<pre></pre>', opts, function (err, html) {
//             if (err) throw err;
//             fs.writeFile('text.html', html, function (err) {
//                 if (err) throw err;
//                 console.log('It\'s saved!');
//             });
//         });
//     }
// });