class Map
  constructor: (width, height) ->
    @width = width
    @height = height
    @map_array = []
    @items_array = []
    @images = {}
    
  setPoint: (x, y, el) ->
    @map_array[x + y * @width] = el

  getPoint: (x, y) ->
    @map_array[x + y * @width]

  setItem: (x, y, el) ->
    @items_array[x + y * @width] = el
    
  getItem: (x, y) ->
    @items_array[x + y * @width]

  load_from_string: (string) ->
    arr = string.split '\n'
    for line, y in arr
      elements = line.split ''
      for element, x in elements 
        @setPoint x, y, element

  register_image: (letter, url) ->
    image = new Image
    that = this
    
    image.onload = () ->
      that.images[letter] = image
    image.src = url

 
  draw: (canvas, offsetX = 0, offsetY = 0) ->
    context = canvas.getContext '2d'
    context.fillStyle = "black"
    context.fillRect(0,0,canvas.width, canvas.height)

    for x in [0...@width]
      for y in [0...@height]
        image = @images[@getPoint(x,y)]
        context.drawImage(image, x * 100 + offsetX, y * 80 + offsetY)
        item = @images[@getItem(x,y)]
        if item
          context.drawImage(item, x * 100 + offsetX, (y * 80 + offsetY) - 40)
    



