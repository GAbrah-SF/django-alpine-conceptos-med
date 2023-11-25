from django.contrib import admin
from .models import Materia, Unidad


# Register your models here.
@admin.register(Materia)
class TablaMateria(admin.ModelAdmin):
    list_display = ('id', 'materia', 'objetivo', 'bimestre')
    search_fields = ('materia', 'bimestre')


@admin.register(Unidad)
class TablaUnidad(admin.ModelAdmin):
    list_display = ('id', 'unidad', 'materia')
    search_fields = ('materia', 'materia')
