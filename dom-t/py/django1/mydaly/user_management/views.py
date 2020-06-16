import datetime
from django.template import Template, Context
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
def getedad(request, agno):
    edadActual = 28
    edad = agno - 2020
    edadFutura = edadActual + edad
    resppuesta = "Tu edad actual es %s y en el año %s tu edad futura es %s" %(edadActual, agno, edadFutura)
    return HttpResponse(resppuesta)
def index(request):
    doc_externo = open("C:/xampp/htdocs/dom-t.github.io/index.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)