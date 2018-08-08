from django.contrib import admin

# Importacion de Modelos
from apps.simulation.models import *

# Register your models here.

admin.site.register(Stadistic)
admin.site.register(Config)
admin.site.register(Simulation)
admin.site.register(Team)
admin.site.register(Feature)
admin.site.register(Country)
admin.site.register(Runner)
