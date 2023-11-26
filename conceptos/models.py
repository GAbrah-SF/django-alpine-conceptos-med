from django.db import models
from materias.models import Materia, Unidad


# Create your models here.
class Concepto(models.Model):
    concepto = models.CharField(max_length=40)
    significado = models.TextField()
    materia = models.ForeignKey(Materia, null=False, on_delete=models.CASCADE)
    unidad = models.ForeignKey(Unidad, null=False, on_delete=models.CASCADE)
    created = models.DateField(auto_now_add=True)  # Se establece automáticamente en la fecha actual al crear el objeto
    updated = models.DateField(auto_now=True)  # Se actualiza a la fecha actual cada vez que se guarda el objeto

    class Meta:
        verbose_name_plural = "Conceptos"

    def __str__(self):
        return f"{self.concepto}"

    def __unicode__(self):
        return self.concepto
