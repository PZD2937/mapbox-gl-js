const layerTagMapping = {
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
};

const valueTagMapping = {
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
};

const featureTagMapping = {
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
};

const featureTypeMapping = {
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
};

const encryptMapping = {
    1: 'tdt',
    2: 'xintu'
};

function toMap(encrypt) {
    return encryptMapping[encrypt];
}

function buildMapping(mapping) {
    return function (tag, encrypt) {
        const _mapping = mapping[toMap(encrypt)];
        if (_mapping && _mapping[tag]) {
            return _mapping[tag];
        }
        return tag;
    };
}

export function isPoint(cmd, encrypt) {
    encrypt = toMap(encrypt);
    if (encrypt === 'tdt') {
        return cmd === 2 || cmd === 3;
    } else if (encrypt === 'xintu') {
        return cmd === 4 || cmd === 3;
    }
    return cmd === 1 || cmd === 2;
}

export function isMoveTo(cmd, encrypt) {
    encrypt = toMap(encrypt);
    if (encrypt === 'tdt') {
        return cmd === 2;
    } else if (encrypt === 'xintu') {
        return cmd === 4;
    }
    return cmd === 1;
}

export const toMapboxLayerTag = buildMapping(layerTagMapping);
export const toMapboxValueMessageTag = buildMapping(valueTagMapping);
export const toMapboxFeatureTag = buildMapping(featureTagMapping);
export const toMapboxFeatureType = buildMapping(featureTypeMapping);

