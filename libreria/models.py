from django.db import models

class Libro(models.Model):
    titulo = models.CharField(max_length=100)
    autor = models.CharField(max_length=100)
    genero = models.CharField(max_length=50)
    anio_publicacion = models.IntegerField()
    isbn = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f"{self.titulo} - {self.autor}"
