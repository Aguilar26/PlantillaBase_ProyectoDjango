# App de Librería y Consulta

## 📋 Descripción
App desarrollada con Django que permite la consulta, registro y visualización de datos migrados en PostgreSQL. Pensada para ofrecer una interfaz intuitiva y funcional, permite administrar registros con eficiencia y claridad.

## 🚀 Instalación y Configuración

### Prerrequisitos
- Python 3.8 o superior
- pip (gestor de paquetes de Python)
- Git
- PostgreSQL (opcional, para producción)

### 1. Preparación del entorno

#### Opción A: Clonar repositorio existente

git clone https://github.com/Aguilar26/PlantillaBase_ProyectoDjango.git
cd nombre-del-proyecto
```

cd mi-proyecto-libreria
```

### 2. Crear y configurar entorno virtual
```bash
# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# En Windows:
venv\Scripts\activate
# En macOS/Linux:
source venv/bin/activate
```

### 3. Instalar Django y dependencias

#### Si clonaste el repositorio:

pip install -r requirements.txt
```

#### Si estás creando desde cero:

# Instalar Django
pip install django

# Crear requirements.txt inicial
pip freeze > requirements.txt
```

### 4. Crear estructura del proyecto (solo si es desde cero)


# Crear proyecto de configuración en la raíz actual
django-admin startproject config .

# Crear la aplicación principal
python manage.py startapp libreria
```

### 5. Configurar la aplicación

#### Registrar la app en `config/settings.py`:
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'libreria',  # ← Agregar esta línea
]
```

#### Crear `libreria/urls.py`:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

#### Crear vista básica en `libreria/views.py`:
```python
from django.http import HttpResponse

def index(request):
    return HttpResponse("¡Bienvenido a la App de Librería!")
```

#### Conectar URLs en `config/urls.py`:
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('libreria.urls')),
]
```

### 6. Configurar la base de datos

#### Para desarrollo (SQLite - por defecto):
```bash
# Crear migraciones iniciales
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate
```

#### Para producción (PostgreSQL):
Modifica `config/settings.py`:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'nombre_db',
        'USER': 'usuario',
        'PASSWORD': 'contraseña',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### 7. Crear superusuario (opcional)

python manage.py createsuperuser
```

### 8. Ejecutar el servidor de desarrollo

python manage.py runserver
```

El proyecto estará disponible en: `http://127.0.0.1:8000/`

## 📁 Estructura final del proyecto

```
mi-proyecto-libreria/
├── config/              # Configuración principal del proyecto
│   ├── __init__.py
│   ├── settings.py      # Configuración (BD, apps instaladas, etc.)
│   ├── urls.py          # URLs principales del proyecto
│   ├── wsgi.py          # Configuración para despliegue
│   └── asgi.py
├── libreria/            # App principal
│   ├── __init__.py
│   ├── admin.py         # Configuración del panel admin
│   ├── apps.py
│   ├── models.py        # Modelos de base de datos
│   ├── views.py         # Lógica de las vistas
│   ├── urls.py          # URLs específicas de la app
│   ├── tests.py
│   └── migrations/      # Migraciones de BD
├── venv/               # Entorno virtual (NO subir a git)
├── manage.py           # Script principal de gestión
├── requirements.txt    # Dependencias del proyecto
├── .env               # Variables de entorno (NO subir a git)
├── .gitignore         # Archivos a ignorar en Git
└── README.md          # Este archivo
```

## 🔧 Comandos útiles

### Gestión de la base de datos

# Crear migraciones después de cambios en models.py
python manage.py makemigrations

# Aplicar migraciones
oython manage.py makemigrations
python manage.py migrate


```

### Gestión del servidor

# Ejecutar servidor de desarrollo
python manage.py runserver

# Ejecutar en puerto específico
python manage.py runserver 8080

# Ejecutar y permitir conexiones externas
python manage.py runserver 0.0.0.0:8000
```

### Otros comandos útiles

# Abrir shell de Django
python manage.py shell

# Crear nueva app
python manage.py startapp nombre_app

# Recopilar archivos estáticos
python manage.py collectstatic

# Generar requirements.txt actualizado
pip freeze > requirements.txt
```

## 📦 Dependencias principales

Las dependencias están en `requirements.txt`. Para un proyecto básico incluye:
```txt
Django>=4.2,<5.0
asgiref>=3.6.0
sqlparse>=0.4.2
psycopg2-binary>=2.9.0  # Solo si usas PostgreSQL
```

## ⚙️ Configuración adicional

### Variables de entorno
Crea un archivo `.env` en la raíz para variables sensibles:
```env
DEBUG=True
SECRET_KEY=tu-clave-secreta-muy-larga-y-segura
DATABASE_URL=sqlite:///db.sqlite3
```

Instala `python-decouple` para usar estas variables:

pip install python-decouple
```

En `config/settings.py`:
```python
from decouple import config

DEBUG = config('DEBUG', default=False, cast=bool)
SECRET_KEY = config('SECRET_KEY')
```

### Archivo .gitignore recomendado
```gitignore
# Entorno virtual
venv/
env/

# Base de datos
*.sqlite3
db.sqlite3

# Variables de entorno
.env

# Archivos de Python
__pycache__/
*.py[cod]
*$py.class

# Archivos estáticos recopilados
/static/
/media/

# IDE
.vscode/
.idea/
```

## 🐛 Solución de problemas comunes

### Error: "No module named 'django'"
**Causa:** Entorno virtual no activado o Django no instalado.

# Activar entorno virtual
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

# Instalar dependencias
pip install -r requirements.txt
```

### Error de migraciones
**Causa:** Conflictos en archivos de migración.

# Eliminar migraciones problemáticas
rm libreria/migrations/0*.py

# Recrear migraciones
python manage.py makemigrations libreria
python manage.py migrate
```

### Puerto ocupado
**Causa:** El puerto 8000 ya está en uso.
```bash
# Usar puerto diferente
python manage.py runserver 8080
```

### Error de importación de módulos
**Causa:** Estructura de proyecto incorrecta o paths mal configurados.
- Verificar que todos los archivos `__init__.py` existan
- Comprobar que la app esté registrada en `INSTALLED_APPS`
- Verificar imports en `urls.py`

## 🚀 Despliegue

### Preparación para producción
1. Configurar variables de entorno para producción
2. Cambiar `DEBUG = False` en settings.py
3. Configurar base de datos PostgreSQL
4. Configurar archivos estáticos
5. Configurar servidor web (Nginx, Apache)

### Comandos pre-despliegue

# Recopilar archivos estáticos
python manage.py collectstatic

# Verificar configuración
python manage.py check
```

## 👨‍💻 Autor
**Julián Aguilar**

## 📝 Notas importantes

- **Siempre** mantén el entorno virtual activado al trabajar
- **Nunca** subas la carpeta `venv/` o el archivo `.env` a Git
- Actualiza `requirements.txt` cuando instales nuevas dependencias
- Documenta cualquier configuración adicional específica de tu proyecto

---

**¿Necesitas ayuda?** Si encuentras algún problema, revisa la sección de solución de problemas o consulta la [documentación oficial de Django](https://docs.djangoproject.com/).
