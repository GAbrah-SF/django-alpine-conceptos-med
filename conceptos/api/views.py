from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from conceptos.models import Concepto
from .serializers import ConceptoSerializer


class CreateConcepto(APIView):
    def post(self, request):
        serializer = ConceptoSerializer(data=request.data)  # Serializa los datos de entrada utilizando un Serializer

        if serializer.is_valid():
            serializer.save()  # Guarda el objeto Libro en la base de datos
            return Response(status=status.HTTP_200_OK,
                            data={"icon": "success", "message": f"Datos guardados correctamente"})

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST,
                            data={"icon": "error", "message": f"Error al recibir datos"})


class UpdateConcepto(APIView):
    def put(self, request, *args, **kwargs):
        try:
            concepto = get_object_or_404(Concepto, id=request.data.get('id'))
            serializer = ConceptoSerializer(concepto, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()
                return Response({"icon": "success", "message": "Datos actualizados correctamente"})

            else:
                return Response({"icon": "error", "message": "Datos no válidos"}, status=status.HTTP_400_BAD_REQUEST)

        except KeyError:
            return Response({"icon": "error", "message": "Datos incompletos"}, status=status.HTTP_400_BAD_REQUEST)
