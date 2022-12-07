import {getMapboxToken, getTianMapToken} from "./token_config";
import {encrypt, formatNow, getTXDy, getTXX16, getTXY16} from "./tileUtil";


export const layersConfig = {
    google_satellite: {
        code: 'google_satellite',
        name: '谷歌卫星',
        hasRoad: true,
        roadCode: 'google_road',
        options: {
            urlTemplate: 'http://google{s}.xinzhi.space/{encrypt}/maps/vt?lyrs=s@781&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&src=app&scale=2',
            subdomains: ['0', '1', '2', '3'],
            customTags: {encrypt},
            maxZoom: 20,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©Google Maps'
        }
    },
    google_map: {
        code: 'google_map',
        name: '谷歌电子地图',
        options: {
            urlTemplate: 'http://vt{s}-google.xinzhi.space/{encrypt}/maps/vt/lyrs=m@207000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile&scale=2',
            subdomains: ['0', '1', '2', '3'],
            customTags: {encrypt},
            maxZoom: 20,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©Google Maps'
        }
    },
    google_terrain: {
        code: 'google_terrain',
        name: '谷歌地形',
        hasRoad: true,
        roadCode: 'google_road',
        options: {
            urlTemplate: 'http://google{s}.xinzhi.space/{encrypt}/vt?pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e4!2st!3i132!2m3!1e0!2sr!3i285205865!3m14!2szh-CN!3sCN!5e18!12m1!1e63!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjN8cC52Om9mZixzLnQ6MXxwLnY6b2ZmLHMudDoyfHAudjpvZmY!4e0',
            subdomains: ['0', '1', '2', '3'],
            customTags: {encrypt},
            maxZoom: 16,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©Google Maps'
        }
    },
    google_colour: {
        code: 'google_colour',
        name: '谷歌水彩地图',
        options: {
            urlTemplate: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
            subdomains: ['a', 'b', 'c'],
            maxZoom: 16,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©Google Maps'
        },
    },
    tian_satellite: {
        code: 'tian_satellite',
        name: '天地图卫星',
        hasRoad: true,
        roadCode: 'tian_road',
        options: {
            urlTemplate: 'https://t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={token}',
            subdomains: ['0', '1', '2', '3', '4', '5', '6'],
            customTags: {
                token: getTianMapToken,
            },
            maxZoom: 18,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:4326',
            attribution: '©天地图'
        }
    },
    tian_map: {
        code: 'tian_map',
        name: '天地图电子',
        hasRoad: true,
        roadCode: 'tian_road',
        options: {
            urlTemplate: 'https://t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={token}',
            subdomains: ['0', '1', '2', '3', '4', '5', '6'],
            customTags: {
                token: getTianMapToken,
            },
            maxZoom: 18,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:4326',
            attribution: '©天地图'
        }
    },
    tian_terrain: {
        code: 'tian_terrain',
        name: '天地图地形',
        hasRoad: true,
        roadCode: 'tian_road',
        options: {
            urlTemplate: 'https://t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={token}',
            subdomains: ['0', '1', '2', '3', '4', '5', '6'],
            customTags: {
                token: getTianMapToken,
            },
            maxZoom: 14,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:4326',
            attribution: '©天地图'
        }
    },
    bmap_satellite: {
        code: 'bmap_satellite',
        name: '百度卫星',
        hasRoad: true,
        roadCode: 'bmap_road',
        options: {
            urlTemplate: 'https://gss{s}.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46&udt=' + formatNow(),
            subdomains: ['0', '1', '2', '3'],
            maxZoom: 19,
            minZoom: 0,
            zIndex: 10,
            projection: 'baidu',
            attribution: '©百度地图'
        }
    },
    bmap_map: {
        code: 'bmap_map',
        name: '百度电子地图',
        options: {
            urlTemplate: 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&s=1&styles=pl&scaler=2&p=1&s=1',
            subdomains: ['0', '1', '2', '3'],
            maxZoom: 19,
            minZoom: 0,
            zIndex: 10,
            projection: 'baidu',
            attribution: '©百度地图'
        }
    },
    amap_satellite: {
        code: 'amap_satellite',
        name: '高德卫星',
        hasRoad: true,
        roadCode: 'amap_road',
        options: {
            urlTemplate: 'https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            subdomains: ['1', '2', '3', '4'],
            maxZoom: 18,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©高德地图'
        }
    },
    amap_map: {
        code: 'amap_map',
        name: '高德电子地图',
        options: {
            urlTemplate: 'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
            subdomains: ['1', '2', '3', '4'],
            maxZoom: 18,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©高德地图'
        }
    },
    tmap_satellite: {
        code: 'tmap_satellite',
        name: '腾讯卫星',
        hasRoad: true,
        roadCode: 'tmap_road',
        options: {
            urlTemplate: 'https://p{s}.map.gtimg.com/sateTiles/{z}/{x16}/{y16}/{x}_{dy}.jpg',
            subdomains: ['1', '2', '3'],
            customTags: {
                dy: getTXDy,
                x16: getTXX16,
                y16: getTXY16
            },
            maxZoom: 18,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©腾讯地图',
        }
    },
    tmap_map: {
        code: 'tmap_map',
        name: '腾讯电子地图',
        options: {
            urlTemplate: 'https://rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={dy}&type=vector&style=2',
            subdomains: ['1', '2', '3'],
            customTags: {dy: getTXDy,},
            maxZoom: 18,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©腾讯地图'
        }
    },
    tmap_terrain: {
        code: 'tmap_terrain',
        name: '腾讯地形',
        options: {
            urlTemplate: 'https://p{s}.map.gtimg.com/demTiles/{z}/{x16}/{y16}/{x}_{dy}.jpg',
            subdomains: ['1', '2', '3'],
            customTags: {
                dy: getTXDy,
                x16: getTXX16,
                y16: getTXY16
            },
            maxZoom: 15,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG3857',
            attribution: '©腾讯地图'
        }
    },
    mapbox_satellite: {
        code: 'mapbox_satellite',
        name: "mapbox卫星图",
        hasRoad: true,
        roadCode: 'tian_road',
        options: {
            urlTemplate: "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token={token}",
            customTags: {
                token: getMapboxToken
            },
            maxZoom: 19,
            minZoom: 0,
            zIndex: 10,
            projection: "EPSG:4326"
        }
    },
    arcgis_satellite: {
        code: 'arcgis_satellite',
        name: 'arcgis卫星',
        hasRoad: true,
        roadCode: 'tian_road',
        options: {
            urlTemplate: 'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            maxZoom: 19,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG4326',
            attribution: '©ArcGIS'
        }
    },
    arcgis_colour: {
        code: 'arcgis_colour',
        name: 'arcgis水彩',
        options: {
            urlTemplate: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}',
            subdomains: ['0', '1', '2', '3'],
            maxZoom: 18,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©ArcGIS'
        }
    },
    arcgis_gray: {
        code: 'arcgis_gray',
        name: 'arcgis灰',
        options: {
            urlTemplate: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
            subdomains: ['0', '1', '2', '3'],
            maxZoom: 16,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©ArcGIS'
        }
    },
    arcgis_blue: {
        code: 'arcgis_blue',
        name: 'arcgis深蓝',
        options: {
            urlTemplate: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
            subdomains: ['0', '1', '2', '3'],
            maxZoom: 16,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©ArcGIS'
        }
    },
    osm_map: {
        code: 'osm_map',
        name: 'osm地图',
        options: {
            urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38',
            subdomains: ['a', 'b', 'c',],
            maxZoom: 19,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:3857',
            attribution: '©OpenStreetMap'
        }
    },
    osm_cycle: {
        code: 'osm_cycle',
        name: 'osm自行车道',
        options: {
            urlTemplate: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38',
            subdomains: ['a', 'b', 'c',],
            maxZoom: 19,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:4326',
            attribution: '©OpenStreetMap'
        }
    },
    osm_transport: {
        code: 'osm_transport',
        name: 'osm交通运输',
        options: {
            urlTemplate: 'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38',
            subdomains: ['a', 'b', 'c',],
            maxZoom: 19,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:4326',
            attribution: '©OpenStreetMap'
        }
    },
    osm_hot: {
        code: 'osm_hot',
        name: 'osm热门',
        options: {
            urlTemplate: 'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38',
            subdomains: ['a', 'b', 'c',],
            maxZoom: 19,
            minZoom: 0,
            zIndex: 10,
            projection: 'EPSG:4326',
            attribution: '©OpenStreetMap'
        }
    },
    offline: {
        code: 'offline',
        name: '离线',
        options: {
            urlTemplate: 'https://xinzhi.map/getTiles?x={x}&y={y}&z={z}',
            maxZoom: 21,
            minZoom: 1,
            repeatWorld: false,
            renderer: 'gl',
            zIndex: 10,
            projection: 'EPSG:3857'
        }
    }
}

export const roadLayer = {
    global_realm: {
        code: 'global_realm',
        name: '天地图全球境界',
        options: {
            //             urlTemplate: 'https://t{s}.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&transparent=true&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={token}',
            urlTemplate: 'https://t{s}.tianditu.gov.cn/ibo_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ibo&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&transparent=true&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={token}',
            subdomains: ['0', '1', '2', '3', '4', '5', '6'],
            customTags: {
                token: getTianMapToken,
            },
            maxZoom: 7,
            minZoom: 0,
            zIndex: 11,
            projection: 'EPSG:4326',
            attribution: '©天地图'
        }
    },
    topographic_labeling: {
        code: 'topographic_labeling',
        name: '天地图地形标注',
        options: {
            urlTemplate: 'https://t{s}.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&transparent=true&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={token}',
            subdomains: ['0', '1', '2', '3', '4', '5', '6'],
            customTags: {
                token: getTianMapToken,
            },
            maxZoom: 7,
            minZoom: 0,
            zIndex: 11,
            projection: 'EPSG:4326',
            attribution: '©天地图'
        }
    },

    google_road: {
        code: 'google_road',
        name: '谷歌路网',
        extraRoad: ['global_realm', 'topographic_labeling'],
        options: {
            urlTemplate: 'http://vt{s}-google.xinzhi.space/{encrypt}/maps/vt?lyrs=h@781&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&src=app&scale=2',
            subdomains: ['0', '1', '2', '3'],
            customTags: {encrypt},
            maxZoom: 20,
            minZoom: 7.01,
            zIndex: 11,
            projection: 'EPSG:3857',
            attribution: '©Google Maps'
        }
    },
    tian_road: {
        code: 'tian_road',
        name: '天地图路网',
        options: {
            urlTemplate: 'https://t{s}.tianditu.gov.cn/cia_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={z}&layer=cia&style=default&tilerow={y}&tilecol={x}&tilematrixset=w&format=tiles&tk={token}',
            // urlTemplate: 'https://t{s}.tianditu.gov.cn/cva_w/wmts?tk={token}&layer=cva&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}',
            subdomains: ['0', '1', '2', '3', '4', '5', '6'],
            customTags: {
                token: getTianMapToken,
            },
            maxZoom: 21,
            minZoom: 0,
            zIndex: 11,
            projection: 'EPSG:4326',
            attribution: '©天地图'
        }
    },
    bmap_road: {
        code: 'bmap_road',
        name: '百度路网',
        options: {
            urlTemplate: 'https://maponline{s}.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=sl&udt=' + formatNow(),
            subdomains: ['0', '1', '2', '3'],
            maxZoom: 19,
            minZoom: 0,
            zIndex: 11,
            projection: 'baidu',
            attribution: '©百度地图'
        }
    },
    amap_road: {
        code: 'amap_road',
        name: '高德路网',
        options: {
            urlTemplate: 'https://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}',
            subdomains: ['1', '2', '3', '4'],
            maxZoom: 18,
            minZoom: 0,
            zIndex: 11,
            projection: 'EPSG:3857',
            attribution: '©高德地图'
        }
    },
    tmap_road: {
        code: 'tmap_road',
        name: '腾讯路网',
        options: {
            urlTemplate: 'https://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={dy}&type=vector&styleid=2&version=843',
            subdomains: ['1', '2', '3'],
            customTags: {dy: getTXDy},
            maxZoom: 18,
            minZoom: 0,
            zIndex: 11,
            projection: 'EPSG3857',
            attribution: '©腾讯地图'
        }
    }
}
