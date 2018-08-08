from django.urls import path

# Importación de Vistas
from apps.simulation.views import *

urlpatterns = [
    path('', index_simulation, name='index'),
    #path('<room_name>', simulation, name='simulation'),
    path('new/', simulationCreate, name='simulation_create'),
    path('start/<display>/', simulationDisplay, name='simulation_display'),
    path('disconnect/display/<number>', disconectDisplay, name='simulation_stopDisplay'),
    path('stadistic', stadisticSimulation, name='simulation_stadistic'),
    path('global/stadistic', globalStadistic, name='simulation_globalStadistic'),
    #path('listar',  login_required(MascotaList.as_view()), name='mascota_listar'),
    #path('editar/<pk>', MascotaUpdate.as_view(), name='mascota_editar'),
    #path('eliminar/<pk>', MascotaDelete.as_view(), name='mascota_eliminar'),
]
