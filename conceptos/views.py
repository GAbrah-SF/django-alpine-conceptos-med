from django.http import JsonResponse
from django.views import View
from django.views.generic import TemplateView
from materias.models import Materia, Unidad
from .models import Concepto
from app.settings import MAESTRIA_NAME


# Create your views here.
class Index(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context_index = {
            'title': 'Lista de Conceptos',
            'h1': MAESTRIA_NAME,
            'h1_form': 'Nuevo Concepto y Significado',
            'selected_bimestre': f"{'-' * 3} Bimestre: {'-' * 3}",
            'selected': '-' * 20,
            'bimestres': [f"{i}" for i in range(1, 10)],
        }
        return context_index


class ConceptosView(View):
    def get(self, request):
        try:
            conceptos = Concepto.objects.all()
            serialized_data = []
            for concepto in conceptos:
                serialized_data.append({
                    "id": concepto.id,
                    "concepto": concepto.concepto,
                    "significado": concepto.significado,
                    "bimestre": concepto.materia.bimestre,
                    "unidad": concepto.unidad.id,
                    "materia": concepto.materia.id,
                    "show_unidad_name": concepto.unidad.unidad,
                    "show_materia_name": concepto.materia.materia,
                })

            return JsonResponse(serialized_data, safe=False)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)


class MateriasView(View):
    def get(self, request):
        bimestre = request.GET.get('bimestre')

        if bimestre:
            materias = Materia.objects.filter(bimestre=bimestre)
            materias_data = [{'id': materia.id, 'materia': materia.materia} for materia in materias]
            return JsonResponse({'materias': materias_data})
        else:
            return JsonResponse({'error': 'Debes seleccionar un bimestre primero.'})


class UnidadesView(View):
    def get(self, request):
        materia = request.GET.get('materia')

        if materia:
            unidades = Unidad.objects.filter(materia=materia)
            unidades_data = [{'id': unidad.id, 'unidad': unidad.unidad} for unidad in unidades]
            return JsonResponse({'unidades': unidades_data})
        else:
            return JsonResponse({'error': 'Debes seleccionar una materia primero.'})
