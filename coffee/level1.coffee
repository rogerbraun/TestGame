level1 = new Map(20,20)

level1.register_image "g", "images/Grass Block.png"
level1.register_image "w", "images/Water Block.png"
level1.register_image "d", "images/Wood Block.png"
level1.register_image "i", "images/Dirt Block.png"
level1.register_image "b", "images/Character Boy.png"
level1.register_image "c", "images/Character Cat Girl.png"
level1.register_image "t", "images/Tree Short.png"
level1.register_image "e", "images/Gem Green.png"
level1.register_image "r", "images/Ramp South.png"
level1.register_image "o", "images/Ramp East.png"

map_string = """
             gggwwggggggggwwggggg
             wgdgggwddwgggwwggggg
             wwdg ggwdwgggwwggggg
             wwdwwwgwwwgggwwggggg
             wwdwwwgw wgggwwggggg
             wwgggddgggggdggggwww
             wwgiiiigwwgggwwggggg
             wwgiiiigwwgggwwggggg
             wwwggggwwwgggwwggggg
             wwwwwwwwwwgggwwggggg
             gggwwggggggggwwggggg
             wgdgggwddwgggwwggggg
             wwdggggwdwgggwwggggg
             wwdwwwgwwwgggwwggggg
             wwdwwwgwwwgggwwggggg
             wwgggwwgggggdggggwww
             wwgiiiigwwgggwwggggg
             wwgiiiigwwgggwwggggg
             wwwggggwwwgggwwggggg
             wwwwwwwwwwgggwwggggg
             """

second_layer = """
               g gggg
                g


                 g
               """
third_layer = """
              g  gg
              """

level1.load_from_string map_string
level1.load_from_string second_layer, 1
level1.load_from_string third_layer, 2
level1.setItem(2,3,"b")
level1.setItem(4,6,"c")
level1.setItem(3,7,"t")
level1.setItem(5,5,"t")
level1.setItem(1,0,"e")
level1.setItem(2,0,"c", 1)
level1.setItem(2,1,"r", 0)
level1.setItem(5,0,"o", 1)
level1.setItem(6,0,"o", 0)
level1.background = new Image
level1.background.src = "images/spacebg.jpg"
