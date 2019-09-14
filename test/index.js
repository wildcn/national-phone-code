var nationalPhoneCode = require('../src/index.js');


var codeList = nationalPhoneCode.getCodeList();
console.log('获取code list');
console.log(codeList);

var codeInfo = nationalPhoneCode.getCodeInfo(1);
console.log('code info');
console.log(codeInfo);

var mapData = nationalPhoneCode.getMapData();
console.log('获取MapData');
console.log(mapData);


var nameMapData = nationalPhoneCode.getMapDataByNameCode();
console.log('获取mapDataByNameCode');
console.log(nameMapData);
var nameCode = 'cn';
var getCodeInfoByNameCode = nationalPhoneCode.getCodeInfoByNameCode(nameCode);
console.log('获取指定nameCode的数据');
console.log(nameCode,getCodeInfoByNameCode);