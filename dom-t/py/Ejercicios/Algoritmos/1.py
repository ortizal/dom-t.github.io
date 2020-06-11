valor = float(input("Ingrese el valor del producto: "))
meses = int(input("Ingrese el numero de meses a diferir: "))
valorIn = (valor * 0.19) + valor
difer = ((valorIn / meses) * 0.5) + (valorIn / meses)
print (valorIn)
print (difer)

""" 1.	Construir un algoritmo que calcule el monto mensual 
que adeuda un cliente que compra un equipo de sonido al crédito, 
sabiendo que el monto de compra recibe un incremento del 19% de 
impuesto, así como, de 5% de interés mensual por cada letra que fracciona. """