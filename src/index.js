var nationalCode = require('../data/nationalCode');

var reduceData = function (key, data) {
  return data.reduce(function (per, next) {
    per = per || {};
    if (Array.isArray(per[next[key]])) {
      per[next[key]].push(next);
    } else if (per[next[key]]) {
      per[next[key]] = [per[next[key]]].concat([next]);
    } else {
      per[next[key]] = next;
    }
    return per;
  }, {})
}

var NationalCodeFunction = function (nationalCode) {
  if (!nationalCode) {
    throw new Error('invalid argument: nationalCode')
  }
  this.data = nationalCode;
  // 原始数据
  this.getData = function () { return this.data };
  // map数据 
  this.getMapData = function () { return reduceData('phone_code', this.data); };
  // map数据 补全三位code为key
  this.getMapDataByCompleteCode = function () { return reduceData('complete_phone_code', this.data); }

  this.getMapDataByNameCode = function () { return reduceData('name_code', this.data); }
  // 根据code 获取item
  this.getCodeInfo = function (code) {
    if (!code) {
      throw new Error('function getCodeInfo need arguments: code, like 001 or 1')
    }
    code += '';
    console.log(code);
    return this.getMapData()[code] || this.getMapDataByCompleteCode()[code] || undefined;
  }
  // 根据name_code获取codeInfo
  this.getCodeInfoByNameCode = function (nameCode) {
    if (!nameCode) {
      throw new Error('function getCodeInfo need arguments: nameCode, like cn')
    }
    return this.getMapDataByNameCode()[nameCode];
  }
  // 获取codelist
  this.getCodeList = function () {
    return this.data.map(function (item) { return item.phone_code });
  }
  // 获取codelist
  this.getCompleteCodeList = function () {
    return this.data.map(function (item) { return item.complete_phone_code });
  }
}


module.exports = new NationalCodeFunction(nationalCode)
