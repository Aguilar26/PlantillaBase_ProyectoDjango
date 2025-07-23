from django.contrib import admin
from .models import Libro

@admin.register(Libro)
class LibroAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo', 'autor', 'genero', 'anio_publicacion')
    search_fields = ('titulo', 'autor', 'genero')
    list_filter = ('genero', 'anio_publicacion')
    ordering = ('titulo',)
    list_display_links = ('titulo',)
    list_per_page = 20
