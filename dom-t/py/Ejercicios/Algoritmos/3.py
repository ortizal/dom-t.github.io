inv1 = float(input("Inversion de primer persona: "))
inv2 = float(input("Inversion de segunda persona: "))
inv3 = float(input("Inversion de tercer persona: "))
total = inv1 + inv2 + inv3
print ("El 100% es: ", total)
porc1 = (inv1 * 100) / total
porc2 = (inv2 * 100) / total
porc3 = (inv3 * 100) / total
print ("Porcentaje uno es: ", porc1, "%")
print ("Porcentaje dos es: ", porc2, "%")
print ("Porcentaje tres es: ", porc3, "%")