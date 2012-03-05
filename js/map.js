var Map;
Map = (function() {
  function Map(width, height) {
    this.width = width;
    this.height = height;
    this.map_array = [];
    this.items_array = [];
    this.images = {};
  }
  Map.prototype.setPoint = function(x, y, el) {
    return this.map_array[x + y * this.width] = el;
  };
  Map.prototype.getPoint = function(x, y) {
    return this.map_array[x + y * this.width];
  };
  Map.prototype.setItem = function(x, y, el) {
    return this.items_array[x + y * this.width] = el;
  };
  Map.prototype.getItem = function(x, y) {
    return this.items_array[x + y * this.width];
  };
  Map.prototype.load_from_string = function(string) {
    var arr, element, elements, line, x, y, _len, _results;
    arr = string.split('\n');
    _results = [];
    for (y = 0, _len = arr.length; y < _len; y++) {
      line = arr[y];
      elements = line.split('');
      _results.push((function() {
        var _len2, _results2;
        _results2 = [];
        for (x = 0, _len2 = elements.length; x < _len2; x++) {
          element = elements[x];
          _results2.push(this.setPoint(x, y, element));
        }
        return _results2;
      }).call(this));
    }
    return _results;
  };
  Map.prototype.register_image = function(letter, url) {
    var image, that;
    image = new Image;
    that = this;
    image.onload = function() {
      return that.images[letter] = image;
    };
    return image.src = url;
  };
  Map.prototype.draw = function(canvas, offsetX, offsetY) {
    var context, image, item, x, y, _ref, _results;
    if (offsetX == null) {
      offsetX = 0;
    }
    if (offsetY == null) {
      offsetY = 0;
    }
    context = canvas.getContext('2d');
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    _results = [];
    for (x = 0, _ref = this.width; 0 <= _ref ? x < _ref : x > _ref; 0 <= _ref ? x++ : x--) {
      _results.push((function() {
        var _ref2, _results2;
        _results2 = [];
        for (y = 0, _ref2 = this.height; 0 <= _ref2 ? y < _ref2 : y > _ref2; 0 <= _ref2 ? y++ : y--) {
          image = this.images[this.getPoint(x, y)];
          context.drawImage(image, x * 100 + offsetX, y * 80 + offsetY);
          item = this.images[this.getItem(x, y)];
          _results2.push(item ? context.drawImage(item, x * 100 + offsetX, (y * 80 + offsetY) - 40) : void 0);
        }
        return _results2;
      }).call(this));
    }
    return _results;
  };
  return Map;
})();