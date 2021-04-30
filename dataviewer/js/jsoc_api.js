fetch('http://jsoc.stanford.edu/cgi-bin/ajax/jsoc_info?ds=hmi.mharp_720s_nrt[][$]&op=rs_list&key=HARPNUM,NOAA_ARS,T_REC')
  .then(res => {
      // response 처리
      console.log(res);
      // 응답을 JSON 형태로 파싱
      return res.json();
  })
  .then(data => {
      // json 출력
      console.log(data)
  })
  .catch(err => {
      // error 처리
      console.log('Fetch Error', err);
  });