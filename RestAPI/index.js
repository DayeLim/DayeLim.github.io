const request = require('request');
request('http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.mharp_720s_nrt[][$]&op=rs_list&key=HARPNUM,NOAA_ARS,T_REC', function (error, response, body) {
    if(!error&&response.statusCode==200) {
        console.log(body);
    }
});