from django.urls import path
from . import views

urlpatterns = [
   path('', views.inicio, name='inicio'),
    path('registrar/', views.registrar_libro, name='formulario_libro'),
    path('inventario/', views.listado_libros, name='listado_libros'),
    path('buscar/', views.buscar_libro, name='buscar_libro'), 

]
