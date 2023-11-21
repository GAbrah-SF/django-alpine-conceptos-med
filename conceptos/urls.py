from django.urls import path, include
from .views import Index, MateriasView, UnidadesView, ConceptosView

urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('mostrar-materias/', MateriasView.as_view(), name='mostrar_materias'),
    path('mostrar-unidades/', UnidadesView.as_view(), name='mostrar_unidades'),
    path('mostrar-conceptos/', ConceptosView.as_view(), name='mostrar_conceptos'),
    path('api/', include('conceptos.api.urls')),
]
