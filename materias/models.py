from django.db import models


# Create your models here.
class Materia(models.Model):
    materia = models.CharField(max_length=50)
    objetivo = models.TextField()
    bimestre = models.IntegerField()

    class Meta:
        verbose_name_plural = "Materias"

    def __str__(self):
        return f"{self.materia}"

    def __unicode__(self):
        return self.materia


class Unidad(models.Model):
    unidad = models.CharField(max_length=60)
    materia = models.ForeignKey(Materia, null=False, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Unidades"

    def __str__(self):
        return f"{self.unidad}"

    def __unicode__(self):
        return self.unidad
