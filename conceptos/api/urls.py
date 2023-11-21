from django.urls import path
from .views import CreateConcepto, UpdateConcepto

urlpatterns = [
    path('guardar/', CreateConcepto.as_view(), name='guardar'),
    path('actualizar/', UpdateConcepto.as_view(), name='actualizar'),
]
