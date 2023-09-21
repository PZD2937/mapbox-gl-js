var layer_tag_mapping = {
    tdt: {
        1: 2,
        2: 1,
        3: 4,
        4: 3
    },
    xintu: {
        1: 4,
        3: 1,
        4: 3
    }
}

var value_tag_mapping = {
    tdt: {
        2: 3,
        3: 2
    },
    xintu: {
        2: 3,
        3: 2,
        5: 6,
        6: 5
    }
}

var feature_tag_mapping = {
    tdt: {
        1: 4,
        2: 3,
        3: 2,
        4: 1
    },
    xintu: {
        1: 3,
        2: 4,
        3: 2,
        4: 1
    }
}

var feature_type_mapping = {
    tdt: {
        1: 2,
        2: 3,
        3: 4,
        4: 1
    },
    xintu: {
        1: 2,
        2: 3,
        3: 1
    }
}


function toMap(encrypt) {
    return encrypt === '1' ? 'tdt' : 'xintu';
}

function buildMapping(mapping) {
    return function (tag, encrypt) {
        var _mapping = mapping[toMap(encrypt)];
        if(_mapping && _mapping[tag]){
            return _mapping[tag]
        }
        return tag
    }
}

// function toMapboxLayerTag(tag, encrypt) {
//     var mapping = layer_tag_mapping[toMap(encrypt)];
//     if(mapping && mapping[tag]){
//         return mapping[tag]
//     }
//     return tag
// }
//
// function toMapboxValueMessageTag(tag, encrypt) {
//     var mapping = value_tag_mapping[toMap(encrypt)];
//     if(mapping && mapping[tag]){
//         return mapping[tag]
//     }
//     return tag
// }
//
//
// function toMapboxFeatureTag(tag, encrypt) {
//     var mapping = feature_tag_mapping[toMap(encrypt)];
//     if(mapping && mapping[tag]){
//         return mapping[tag]
//     }
//     return tag
// }
//
// function toMapboxFeatureType(type, encrypt) {
//     var mapping = feature_type_mapping[toMap(encrypt)];
//     if(mapping && mapping[type]){
//         return mapping[type]
//     }
//     return type
// }

function isPoint(cmd, encrypt) {
    encrypt = toMap(encrypt);
    if (encrypt === 'tdt') {
        return cmd === 2 || cmd === 3;
    } else if (encrypt === 'xintu') {
        return cmd === 4 || cmd === 3
    }
    return cmd === 1 || cmd === 2;
}

function isMoveTo(cmd, encrypt) {
    encrypt = toMap(encrypt);
    if (encrypt === 'tdt') {
        return cmd === 2
    } else if (encrypt === 'xintu') {
        return cmd === 4
    }
    return cmd === 1
}

module.exports = {
    toMapboxLayerTag: buildMapping(layer_tag_mapping),
    toMapboxValueMessageTag: buildMapping(value_tag_mapping),
    toMapboxFeatureTag: buildMapping(feature_tag_mapping),
    toMapboxFeatureType: buildMapping(feature_type_mapping),
    isPoint,
    isMoveTo
}
