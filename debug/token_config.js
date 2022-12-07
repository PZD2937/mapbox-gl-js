import {randomNum} from "@/util/util";

let tokensMap = {
    tianMapTokens: [
        'a1225f1ae0cfab8f825956d2881fc3f8',
        '968dc70cba32a76bb533fb1a63c2cbf1',
        'bf2172a88104131fa04a67cdfaeb9d7f',
        'be0206e70096feb6cbd09d171e2bd352'
    ],
    mapboxTokens: [
        'pk.eyJ1Ijoibm9vb29yYSIsImEiOiJjbDVxMmRheXQxc3Y2M2JsdnpoZWhhbzFpIn0.NTWXWjVOgllgRJE06wQw-w'
    ],
    baiduStreetToken: 'E4805d16520de693a3fe707cdc962045'
}

export function getTianMapToken() {
    const tokens = tokensMap.tianMapTokens;
    const index = randomNum(0, tokens.length - 1);
    return tokens[index];
}

export function getMapboxToken() {
    const tokens = tokensMap.mapboxTokens;
    const index = randomNum(0, tokens.length - 1);
    return tokens[index];
}

export function getBaiduStreetToken() {
    return tokensMap.baiduStreetToken;
}

export function updateTokens(config) {
    if(!config) return;
    tokensMap = config;
}
