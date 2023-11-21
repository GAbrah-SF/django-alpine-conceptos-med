from rest_framework import serializers
from conceptos.models import Concepto


class ConceptoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Concepto
        fields = ("concepto", "significado", "unidad", "materia")
