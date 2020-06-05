import pyautogui as p
comando = print("Ingrese comando: ")
comando = comando.strip()
if comando == "pantalla":
    p.screenshot("Pantalla capturada")
else:
    print("Pantalla no capturada")
