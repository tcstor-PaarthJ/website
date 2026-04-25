import random
import turtle as turt

bob = turt.Turtle()
bob.color("black", "yellow")
bob.speed(0)
bob.fd(100)
bob.back(200)
bob.fd(100)
bob.lt(90)
bob.fd(400)
bob.rt(90)
bob.fd(200)
bob.rt(90)
bob.fd(100)
bob.lt(90)
dob = turt.Turtle()
dob.color("lime", "blue")
dob.penup()
dob.fd(200)
dob.lt(90)
dob.fd(300)
dob.rt(180)
def face ():
    dob.penup()
    dob.width(4)
    dob.setheading(180)
    dob.pendown()
    dob.speed(0)
    dob.circle(40,540)
def body ():
    dob.width(4)
    dob.rt(90)
    dob.fd(15)
    dob.width(12)
    dob.fd(85)
    dob.bk(85)
# def arm1 ()
words = ["antidisestablishmentarianism","hi","tennis","pokemon","four"]
answer = words[random.randint(0,len(words) - 1)]
lives = 6
bobStart = 30*len(answer) - 10
bob.pu()
bob.goto((-bobStart, turt.Screen().window_height()*-0.3))
print(turt.Screen().window_height())
bob.pd()
def dash(x) :
    for _ in range(x):
        bob.fd(40)
        bob.penup()
        bob.fd(20)
        bob.pendown()
dash(len(answer))
face()
body()
# display = []

# for letter in answer:
#     display.append("_")
    

# print(display)
# while lives > 0:
#     user_guess = input("Hangman! Guess a letter please!")
#     if user_guess == answer:
#         display = user_guess
#         print(display)
#         print("YOU WIN UR A GENIUS")
#         break    
#     if user_guess in answer:
#         for x in range(len(answer)):
#             if answer[x] == user_guess:
#                 display[x] = user_guess
#     else:
#         if not user_guess.isalpha():
#             print("Invalid guess, try again please.")
#             continue 
#         print("YOUR WRONG")
#         lives -= 1
#         bob.write("WOMP WOMP LOSER")
#         print(f"You have {lives} lives lt")

#     print(display)
turt.mainloop()

