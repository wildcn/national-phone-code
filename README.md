# national phone code 

## 字段说明
```
{
  "name": "中国", ## 中文名称
  "english_name": "China", ##英文名称
  "name_code": "cn", ## 国家英文缩写
  "phone_code": "86", ## 国家电话号码前缀
  "traditional_chinese_name": "中国", ## 繁体中文
  "complete_phone_code": "086" ## 补全三位的code
},
```
## 安装使用

```
## instal
yarn national-phone-code --dev
## or
npm install national-phone-code --save-dev
```
## API
### 导入
```
import nationalPhoneCode from 'national-phone-code';
```


### getCodeList
获取code 列表 返回类型为string
```
nationalPhoneCode.getCodeList()
['1','86',...]
```

### getCompleteCodeList
获取补全三位的code 列表 返回类型为string
```
nationalPhoneCode.getCompleteCodeList()
['001','086',...]
```

### getData
获取原始数据
```
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
```

### getMapData
获取map数据 code重复数据，将转换为array
```
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
```

### mapDataByCompleteCode
获取map数据 by 三位code
```
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
```

### getCodeInfo
获取code详情  @params{code} | String 001 1
```
nationalPhoneCode.getCodeInfo(1);
[{
  "name": "美国",
  "english_name": "United States (USA)",
  "name_code": "us",
  "phone_code": "1",
  "traditional_chinese_name": "美属维尔京群岛",
  "complete_phone_code": "001"
},
...
]
```

### getMapDataByNameCode
获取key为name_code的序列化数据
```
nationalPhoneCode.getMapDataByNameCode();
{
  zw:
   { name: '津巴布韦',
     english_name: 'Zimbabwe',
     name_code: 'zw',
     phone_code: '263',
     traditional_chinese_name: '津巴布韦',
     complete_phone_code: '263' 
    } 
}

```


### getCodeInfoByNameCode
根据name_code获取codeInfo
```
var nameCode = 'cn';
nationalPhoneCode.getCodeInfoByNameCode(nameCode);
{
  "name": "中国",
  "english_name": "China",
  "name_code": "cn",
  "phone_code": "86",
  "traditional_chinese_name": "中国",
  "complete_phone_code": "086"
}
```