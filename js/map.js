var Map;

Map = (function() {

  function Map(width, height) {
    this.width = width;
    this.height = height;
    this.map_array = [[], [], []];
    this.items_array = [[], [], []];
    this.images = {};
    this.background = "";
  }

  Map.prototype.setPoint = function(x, y, el, layer) {
    if (layer == null) layer = 0;
    return this.map_array[layer][x + y * this.width] = el;
  };

  Map.prototype.getPoint = function(x, y, layer) {
    if (layer == null) layer = 0;
    return this.map_array[layer][x + y * this.width];
  };

  Map.prototype.setItem = function(x, y, el, layer) {
    if (layer == null) layer = 0;
    return this.items_array[layer][x + y * this.width] = el;
  };

  Map.prototype.getItem = function(x, y, layer) {
    if (layer == null) layer = 0;
    return this.items_array[layer][x + y * this.width];
  };

  Map.prototype.load_from_string = function(string, layer) {
    var arr, element, elements, line, x, y, _len, _results;
    if (layer == null) layer = 0;
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
          _results2.push(this.setPoint(x, y, element, layer));
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

  Map.prototype.draw_background = function(canvas) {
    var context, x, xTimes, y, yTimes, _results;
    context = canvas.getContext('2d');
    xTimes = Math.ceil(canvas.width / this.background.width);
    yTimes = Math.ceil(canvas.height / this.background.height);
    _results = [];
    for (x = 0; 0 <= xTimes ? x < xTimes : x > xTimes; 0 <= xTimes ? x++ : x--) {
      _results.push((function() {
        var _results2;
        _results2 = [];
        for (y = 0; 0 <= yTimes ? y < yTimes : y > yTimes; 0 <= yTimes ? y++ : y--) {
          _results2.push(context.drawImage(this.background, x * this.background.width, y * this.background.height));
        }
        return _results2;
      }).call(this));
    }
    return _results;
  };

  Map.prototype.draw = function(canvas, offsetX, offsetY) {
    var context, image, item, layer, letter, x, y, _ref, _results;
    if (offsetX == null) offsetX = 0;
    if (offsetY == null) offsetY = 0;
    this.draw_background(canvas);
    context = canvas.getContext('2d');
    _results = [];
    for (y = 0, _ref = this.height; 0 <= _ref ? y < _ref : y > _ref; 0 <= _ref ? y++ : y--) {
      _results.push((function() {
        var _ref2, _results2;
        _results2 = [];
        for (x = 0, _ref2 = this.width; 0 <= _ref2 ? x < _ref2 : x > _ref2; 0 <= _ref2 ? x++ : x--) {
          _results2.push((function() {
            var _ref3, _results3;
            _results3 = [];
            for (layer = 0, _ref3 = this.map_array.length; 0 <= _ref3 ? layer < _ref3 : layer > _ref3; 0 <= _ref3 ? layer++ : layer--) {
              letter = this.getPoint(x, y, layer);
              image = this.images[letter];
              if (image) {
                context.drawImage(image, x * 100 + offsetX, y * 80 + offsetY - (layer * 40));
              }
              item = this.images[this.getItem(x, y, layer)];
              if (item) {
                _results3.push(context.drawImage(item, x * 100 + offsetX, (y * 80 + offsetY) - 40 - (layer * 40)));
              } else {
                _results3.push(void 0);
              }
            }
            return _results3;
          }).call(this));
        }
        return _results2;
      }).call(this));
    }
    return _results;
  };

  return Map;

})();
