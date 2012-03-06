class Map
  constructor: (width, height) ->
    @width = width
    @height = height
    @map_array = [[],[],[]]
    @items_array = [[],[],[]]
    @images = {}
    @background = ""
    
  setPoint: (x, y, el, layer = 0) ->
    @map_array[layer][x + y * @width] = el

  getPoint: (x, y, layer = 0) ->
    @map_array[layer][x + y * @width]

  setItem: (x, y, el, layer = 0) ->
    @items_array[layer][x + y * @width] = el
    
  getItem: (x, y, layer = 0) ->
    @items_array[layer][x + y * @width]

  load_from_string: (string, layer = 0) ->
    arr = string.split '\n'
    for line, y in arr
      elements = line.split ''
      for element, x in elements
        @setPoint x, y, element, layer

  register_image: (letter, url) ->
    image = new Image
    that = this
    
    image.onload = () ->
      that.images[letter] = image
    image.src = url

  draw_background: (canvas) ->
    context = canvas.getContext '2d'
    xTimes = Math.ceil(canvas.width / @background.width)
    yTimes = Math.ceil(canvas.height / @background.height)
    for x in [0...xTimes]
      for y in [0...yTimes]
        context.drawImage(@background, x * @background.width, y * @background.height)
 
  draw: (canvas, offsetX = 0, offsetY = 0) ->

    @draw_background canvas
    context = canvas.getContext '2d'

    for y in [0...@height]
      for x in [0...@width]
        for layer in [0...@map_array.length]
          letter = @getPoint x, y, layer
          image = @images[letter]
          if image
            context.drawImage(image, x * 100 + offsetX, y * 80 + offsetY - (layer * 40))
          item = @images[@getItem(x,y,layer)]
          if item
            context.drawImage(item, x * 100 + offsetX, (y * 80 + offsetY) - 40 - (layer * 40))
