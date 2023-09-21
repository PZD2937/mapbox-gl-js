# 解析天地图和星图矢量瓦片
在source配置添加vtOptions


## vtOptions
| encrypt | 说明    |
|---------|-------|
| '1'     | 天地图   |
| '2'     | 中科星图  |
```javascript
const source = {
    type: "vector",
    tiles: [],
    vtOptions: {
        encrypt: '1' //天地图矢量
    }
}
```
