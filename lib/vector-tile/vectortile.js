'use strict';

var VectorTileLayer = require('./vectortilelayer');

module.exports = VectorTile;

function VectorTile(pbf, end, options) {
    // console.log(options)
    this.layers = pbf.readFields(readTile, Object.assign({}, options), end);
}

function readTile(tag, layers, pbf) {
    if (tag === 3) {
        var layer = new VectorTileLayer(pbf, pbf.readVarint() + pbf.pos, {
            encrypt: layers.encrypt
        });
        if (layer.length) layers[layer.name] = layer;
    }
}

