from django.db import models
from materias.models import Materia, Unidad


# Create your models here.
class Concepto(models.Model):
    concepto = models.CharField(max_length=40)
    significado = models.TextField()
    unidad = models.ForeignKey(Unidad, null=False, on_delete=models.CASCADE)
    materia = models.ForeignKey(Materia, null=False, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Conceptos"

    def __str__(self):
        return f"{self.concepto}"

    def __unicode__(self):
        return self.concepto
