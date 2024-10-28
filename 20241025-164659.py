#La función debería multiplicar por los número entero que el usuario ingrese 
def x_cc():
    print("Ingrese su nombre:")
    d=input()
    print("Hola " + "como estas " + d)
    h=input()
    if h == "bien":
        print("¡¡Me alegra!!")
        
    else:
        print("¡Ahh que triste!")
    print("Dime " + d + " ahora que quieres multiplicar, "+ "solo números porfa.")
    
    x = int(input())
    
    print("ahora dime por que número entero lo quieres multiplicar.")
    
    c = int(input())
    if x  > 0:
        print("¡ya!")
        
        print( x * c)
    else:
        print("Error "+ x + " no es un número")
#se llama a la función por el nombre.

x_cc()

input_pass()
