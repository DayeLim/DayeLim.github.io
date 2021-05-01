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