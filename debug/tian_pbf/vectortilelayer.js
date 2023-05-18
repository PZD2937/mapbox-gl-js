var tdt_Layer_tag = {
    2: 1,
    1: 2,
    3: 4,
    4: 3
}

var tdt_value_tag = {
    2: 3,
    3: 2
}

// tdt tag mapping mapbox tag
function toMapboxLayerTag(tag, encrypt) {
    if(encrypt === '1' && tdt_Layer_tag[tag]){
        return tdt_Layer_tag[tag]
    }
    return tag
}

function toMapboxValueMessageTag(tag, encrypt) {
    if(encrypt === '1' && tdt_value_tag[tag]){
        return tdt_value_tag[tag]
    }
    return tag
}


function VectorTileLayer(pbf, end, options) {
    options = options || {};
    // Public
    this.version = 1;
    this.name = null;
    this.extent = 4096;
    this.length = 0;

    // Private
    this._pbf = pbf;
    this._keys = [];
    this._values = [];
    this._features = [];
    this.encrypt = options.encrypt;

    pbf.readFields(readLayer, this, end);

    this.length = this._features.length;
}

function readLayer(tag, layer, pbf) {
    tag = toMapboxLayerTag(tag, layer.encrypt);
    if (tag === 15) layer.version = pbf.readVarint();
    else if (tag === 1) layer.name = pbf.readString();
    else if (tag === 5) layer.extent = pbf.readVarint();
    else if (tag === 2) layer._features.push(pbf.pos);
    else if (tag === 3) layer._keys.push(pbf.readString());
    else if (tag === 4) layer._values.push(readValueMessage(pbf, layer.encrypt));
}

function readValueMessage(pbf, encrypt) {
    var value = null,
        end = pbf.readVarint() + pbf.pos;
    while (pbf.pos < end) {
        var tag = pbf.readVarint() >> 3;
        tag = toMapboxValueMessageTag(tag, encrypt)
        value = tag === 1 ? pbf.readString() :
                tag === 2 ? pbf.readFloat() :
                tag === 3 ? pbf.readDouble() :
                tag === 4 ? pbf.readVarint64() :
                tag === 5 ? pbf.readVarint() :
                tag === 6 ? pbf.readSVarint() :
                tag === 7 ? pbf.readBoolean() : null;
    }
    return value;
}

// return feature `i` from this layer as a `VectorTileFeature`
VectorTileLayer.prototype.feature = function(i) {
    if (i < 0 || i >= this._features.length) throw new Error('feature index out of bounds');

    this._pbf.pos = this._features[i];

    var end = this._pbf.readVarint() + this._pbf.pos;
    return new VectorTileFeature(this._pbf, end, this.extent, this._keys, this._values, this.encrypt);
};
