from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.core import serializers
from django.views.generic import ListView, CreateView, UpdateView, DeleteView

import random
import string
from django.db import transaction
#import haikunator

# Importación de Modelos

from apps.simulation.models import *

# importacion de Formulario

from apps.simulation.forms import *

from apps.simulation.controlDisplay import *


def index_simulation(request):
	return render(request, 'simulation/index.html')


# Clase Simulación Listar

class simulationList(ListView):
    model = Simulation
    template_name = "TEMPLATE_NAME"


# Función Simulación

def simulation(request, room_name):
    return render(request, 'simulation/simulation.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

		
# Clase Simulación Crear

def simulationCreate(request):
    
    if request.method == 'GET':
        form = configForm()
        return render(request, 'simulation/simulation_form.html', {'form': form})

    else:
        form = configForm(request.POST)
        if form.is_valid():
            form.save()
        return render(request, 'simulation/start_simulation.html')


# Función Simulación en la pantalla 1

def simulationDisplay(request, display):

    global display1
    global display2
    global display3

    if display1 == False:

        display1= True
        return render(request, 'simulation/display1.html')

    elif display2 == False:

        display2= True
        return render(request, 'simulation/display2.html')

    elif display3 == False:

        display3= True
        return render(request, 'simulation/display3.html')

    else:

        return render(request, 'simulation/index.html')
 

# Funcion que actualiza el estatus de la pantalla desconectada

def disconectDisplay(request, number):

    global display1
    global display2
    global display3

    # Verificamos que display vamos a desconectar

    if number == '1':

        display1= False
        # return render(request, 'simulation/index.html')

    elif number == '2':

        display2= False
        # return render(request, 'simulation/index.html')

    elif number == '3':

        display3= False
        # return render(request, 'simulation/index.html')  
    

def stadisticSimulation(request):
    return render(request, 'simulation/stadistic.html')

def globalStadistic(request):
    return render(request, 'simulation/global_stadistic.html')
