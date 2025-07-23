from django.shortcuts import render, redirect
from .forms import LibroForm
from .models import Libro
from django.db.models import Q


def inicio(request):
    return render(request, 'libreria/inicio.html')

def registrar_libro(request):
    if request.method == 'POST':
        form = LibroForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('inicio')
    else:
        form = LibroForm()
    
    return render(request, 'libreria/formulario_libro.html', {'form': form})
def listado_libros(request):
    return render(request, 'libreria/listado_libros.html')
def buscar_libro(request):
    return render(request, 'libreria/buscar_libro.html')
def listado_libros(request):
    libros = Libro.objects.all()
    return render(request, 'libreria/listado_libros.html', {'libros': libros})
def buscar_libro(request):
    query = request.GET.get('query', '')
    resultados = Libro.objects.filter(
        Q(titulo__icontains=query) |
        Q(autor__icontains=query) |
        Q(genero__icontains=query)
    ) if query else None

    return render(request, 'libreria/buscar_libro.html', {
        'resultados': resultados,
        'query': query
    })