from django import forms

from apps.simulation.models import *


# Formulario de Configuración

class configForm(forms.ModelForm):

    class Meta:
        model = Config

        fields = [
            'numberTurns',
            'numberTeams',
            'probabilityInjuries',       
                ]
        labels = {
            'numberTurns': 'Número de Vueltas',
            'numberTeams': 'Número de Equipos',
            'probabilityInjuries': 'Probabilidad de Lesión',
        }
        widgets = {
            'numberTurns': forms.TextInput(attrs={'class':'validate', 'id':'numberTurns'}),
            'numberTeams': forms.TextInput(attrs={'class':'validate', 'id':'numberTeams'}),
            'probabilityInjuries': forms.TextInput(attrs={'class':'validate', 'id':'probabilityInjuries'}),
        }
