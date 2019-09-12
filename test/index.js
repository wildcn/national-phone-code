var nationalPhoneCode = require('../index.js');


var codeList = nationalPhoneCode.getCodeList();
console.log('获取code list');
console.log(codeList);

var codeInfo = nationalPhoneCode.getCodeInfo(1);
console.log('code info');
console.log(codeInfo);

var mapData = nationalPhoneCode.getMapData();
console.log('获取MapData');
console.log(mapData);