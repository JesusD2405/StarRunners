from django.conf.urls import url

from . import consumers

# Importación de Vistas
from apps.simulation.views import *

websocket_urlpatterns = [
    # url('ws/chat/room/<room_name>/', consumers.ChatConsumer),
     url(r'^ws/simulation/start/(?P<display>[^/]+)/$', consumers.SimulationConsumer),
    # path('ws/chat/<room_name>', consumers.ChatConsumer),
]