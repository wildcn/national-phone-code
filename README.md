# national phone code 


```
// instal
yarn national-phone-code --dev
// or
npm install national-phone-code --save-dev

// how to use

import nationalPhoneCode from 'national-phone-code';

// 获取code 列表 返回类型为string
nationalPhoneCode.getCodeList()
['1','86',...]

// 获取补全三位的code 列表 返回类型为string
nationalPhoneCode.getCompleteCodeList()
['001','086',...]

// 获取原始数据
nationalPhoneCode.getData()
[
  {
    "name": "安道尔",
    "english_name": "Andorra",
    "name_code": "ad",
    "phone_code": "376",
    "traditional_chinese_name": "安道尔",
    "complete_phone_code": "376"
  },
  ...
]；

// 获取map数据 code重复数据，将转换为array
nationalPhoneCode.getMapData()
{
  '86':{
    "name": "中国",
    "english_name": "China",
    "name_code": "cn",
    "phone_code": "86",
    "traditional_chinese_name": "中国",
    "complete_phone_code": "086"
  },
  '1':[{
      "name": "美国",
      "english_name": "United States (USA)",
      "name_code": "us",
      "phone_code": "1",
      "traditional_chinese_name": "美属维尔京群岛",
      "complete_phone_code": "001"
    }]
  }
}
// 获取map数据 by 三位code
nationalPhoneCode.mapDataByCompleteCode()
{
  '086':{
    "name": "中国",
    "english_name": "China",
    "name_code": "cn",
    "phone_code": "86",
    "traditional_chinese_name": "中国",
    "complete_phone_code": "086"
  },
  '001':[{
      "name": "美国",
      "english_name": "United States (USA)",
      "name_code": "us",
      "phone_code": "1",
      "traditional_chinese_name": "美属维尔京群岛",
      "complete_phone_code": "001"
    }]
  }
}

// 获取code详情  @params{code} | String 001 1
nationalPhoneCode.getCodeInfo(1);
{
  "name": "美国",
  "english_name": "United States (USA)",
  "name_code": "us",
  "phone_code": "1",
  "traditional_chinese_name": "美属维尔京群岛",
  "complete_phone_code": "001"
}



```