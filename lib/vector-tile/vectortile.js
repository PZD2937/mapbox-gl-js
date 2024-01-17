'use strict';

var VectorTileLayer = require('./vectortilelayer');

module.exports = VectorTile;

function VectorTile(pbf, end, options) {
    // console.log(options)
    this.layers = pbf.readFields(readTile.bind(null, options), {}, end);
}

function readTile(options, tag, layers, pbf) {
    if (tag === 3) {
        var layer = new VectorTileLayer(pbf, pbf.readVarint() + pbf.pos, options);
        if (layer.length) layers[layer.name] = layer;
    }
}

