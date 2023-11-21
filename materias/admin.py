from django.contrib import admin
from .models import Materia


# Register your models here.
@admin.register(Materia)
class TablaMateria(admin.ModelAdmin):
    list_display = ('id', 'materia', 'objetivo', 'bimestre')
