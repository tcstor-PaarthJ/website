import turtle as turt

bob = turt.Turtle()
bob.color("#06B3B9", "blue",)
bob.speed(1)
bob.begin_fill()

bob.left(90)
bob.forward(50)
bob.circle(75, 180)
bob.forward(50)
bob.right(90)
bob.forward(50)
bob.left(90)
bob.forward(25)
bob.left(90)
bob.forward(50)
bob.right(90)
bob.forward(100)
bob.right(90)
bob.forward(45)
bob.left(90)
bob.forward(50)
bob.left(90)
bob.forward(45)
bob.right(90)
bob.forward(50)
bob.left(90)
bob.forward(150)
bob.left(90)
bob.forward(50)
bob.right(90)
bob.forward(45)
bob.left(90)
bob.forward(50)
bob.left(90)
bob.forward(45)
bob.right(90)
bob.forward(100)
bob.right(90)
bob.forward(50)
bob.left(90)
bob.forward(25)
bob.left(90)
bob.forward(50)
# fire hydrant
bob.end_fill()
bob.penup()
bob.right(90)
bob.forward(200)



bob.write("Antidisestablishmentarianism", font=("Comic Sans MS", 8, "normal"))
bob.forward(50)
bob.right(180)
bob.write("Antidisestablishmentarianism", align="center", font=("Comic Sans MS", 8, "normal"))






turt.mainloop();