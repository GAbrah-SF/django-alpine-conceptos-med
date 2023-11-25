from django.contrib import admin
from .models import Concepto


# Register your models here.
@admin.register(Concepto)
class TablaConcepto(admin.ModelAdmin):
    list_display = ('id', 'concepto', 'significado', 'materia', 'unidad')
