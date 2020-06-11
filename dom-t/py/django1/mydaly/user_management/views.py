import datetime
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def saludo (request):
    saludoIn = ("<h1>Hellow World</h1>")
    return HttpResponse(saludoIn)
def chao (request):
    return HttpResponse("Chao")
def fechaHora(request):
    fechaActual = datetime.datetime.now()
    fechaHoraActual = ("<h1> Fecha y hora actual %s </h1>" % fechaActual)
    return HttpResponse (fechaHoraActual)