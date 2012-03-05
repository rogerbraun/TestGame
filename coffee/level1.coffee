level1 = new Map(10,10)

level1.register_image "g", "images/Grass Block.png"
level1.register_image "w", "images/Water Block.png"
level1.register_image "d", "images/Wood Block.png"
level1.register_image "i", "images/Dirt Block.png"
level1.register_image "b", "images/Character Boy.png"
level1.register_image "c", "images/Character Cat Girl.png"
level1.register_image "t", "images/Tree Short.png"
level1.register_image "e", "images/Gem Green.png"

map_string = """
             gggwwggggg 
             wgdgggwddw
             wwdggggwdw
             wwdwwwwwww
             wwdwwwwwww
             wwdggggwww
             wwgiiiigww
             wwgiiiigww
             wwwggggwww
             wwwwwwwwww
             """

level1.load_from_string map_string
level1.setItem(2,3,"b")
level1.setItem(4,6,"c")
level1.setItem(3,7,"t")
level1.setItem(5,5,"t")
level1.setItem(1,0,"e")
