from django.db import models
from django.utils import timezone

# Modelo Estadistica

class Stadistic(models.Model):

	# Atributos
	winningTeam = models.CharField(max_length=120)
	record      = models.CharField(max_length=120)
	fastRunner  = models.CharField(max_length=120)
	injureds    = models.IntegerField()



# Modelo Configuración

class Config(models.Model):

	# Atributos
	numberTurns         = models.IntegerField()
	numberTeams         = models.IntegerField()
	probabilityInjuries = models.IntegerField()


# Modelo Simulacion

class Simulation(models.Model):

	# Atributos
	display   = models.IntegerField()
	#timestamp = models.DateTimeField(default=timezone.now, db_index=True)
	
	#Claves Foráneas 
	stadistic = models.ForeignKey(Stadistic, on_delete=models.CASCADE, blank=True, null=True) 
	config    = models.ForeignKey(Config, on_delete=models.CASCADE, blank=True)

	"""
	@property
    def formatted_timestamp(self):
        return self.timestamp.strftime('%b %-d %-I:%M %p')
	"""


# Modelo Equipo

class Team(models.Model):

	# Atributos
	name          = models.CharField(max_length=70) 
	numberRunners = models.IntegerField()

	#Claves Foráneas 
	simulation = models.ForeignKey(Simulation, on_delete=models.CASCADE, blank=True, null=True) 



# Modelo Caracteristica

class Feature(models.Model):

	# Atributos
	acceleration = models.IntegerField()
	speed        = models.IntegerField()
	force        = models.IntegerField()
	captain      = models.IntegerField()



# Modelo Pais

class Country(models.Model):

	# Atributos
	name       = models.CharField(max_length=120)
	continent  = models.CharField(max_length=120)



# Modelo Corredor

class Runner(models.Model):

	# Atributos
	name     = models.CharField(max_length=70)
	lastName = models.CharField(max_length=70)
	record   = models.CharField(max_length=70)

	#Claves Foráneas 
	feature = models.ForeignKey(Feature, on_delete=models.CASCADE, blank=True) 
	team    = models.ForeignKey(Team, on_delete=models.CASCADE, blank=True) 
	country = models.ForeignKey(Country, on_delete=models.CASCADE, blank=True) 



