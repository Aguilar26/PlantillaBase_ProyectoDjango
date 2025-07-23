# App de Libreria y Consulta

## 📋 Descripción
App desarrolalda con djang que permite la consultar registro y visualizacion de la tabla migrada en Postgress
## 🚀 Instalación y Configuración

### Prerrequisitos
- Python 3.8 o superior
- pip (gestor de paquetes de Python)
- Git

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd nombre-del-proyecto
```

### 2. Crear entorno virtual
```bash
# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# En Windows:
venv\Scripts\activate
# En macOS/Linux:
source venv/bin/activate
```

### 3. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 4. Estructura del proyecto
```
mi-proyecto/
├── config/           # Configuración principal del proyecto
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── libreria/         # App principal (cambia por el nombre de tu app)
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── migrations/
├── venv/            # Entorno virtual (no subir a git)
├── manage.py        # Script de gestión de Django
├── requirements.txt # Dependencias del proyecto
└── README.md       # Este archivo
```

### 5. Configurar la base de datos
```bash
# Crear migraciones
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate
```

### 6. Crear superusuario (opcional)
```bash
python manage.py createsuperuser
```

### 7. Ejecutar el servidor de desarrollo
```bash
python manage.py runserver
```

El proyecto estará disponible en: `http://127.0.0.1:8000/`

## 📁 Estructura de archivos explicada

### `config/`
Carpeta que contiene la configuración principal del proyecto Django:
- `settings.py`: Configuración principal (base de datos, apps instaladas, etc.)
- `urls.py`: URLs principales del proyecto
- `wsgi.py`: Configuración para despliegue

### `libreria/` (o tu app principal)
Carpeta de la aplicación Django:
- `models.py`: Modelos de base de datos
- `views.py`: Lógica de las vistas
- `urls.py`: URLs específicas de la app
- `admin.py`: Configuración del panel de administración

### `manage.py`
Script principal para gestionar el proyecto Django.

### `requirements.txt`
Lista de todas las dependencias necesarias para el proyecto.

## 🔧 Comandos útiles

### Gestión de la base de datos
```bash
# Crear migraciones después de cambios en models.py
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate

# Ver migraciones pendientes
python manage.py showmigrations
```

### Gestión del servidor
```bash
# Ejecutar servidor de desarrollo
python manage.py runserver

# Ejecutar en puerto específico
python manage.py runserver 8080

# Ejecutar y permitir conexiones externas
python manage.py runserver 0.0.0.0:8000
```

### Otros comandos útiles
```bash
# Abrir shell de Django
python manage.py shell

# Recopilar archivos estáticos
python manage.py collectstatic

# Crear nueva app
python manage.py startapp nombre_app
```

## 📦 Dependencias principales
Las dependencias están listadas en `requirements.txt`. Las principales son:
- Django
- (Lista aquí otras dependencias importantes de tu proyecto)

## ⚙️ Configuración adicional

### Variables de entorno (opcional)
Si usas variables de entorno, crea un archivo `.env`:
```env
DEBUG=True
SECRET_KEY=tu-clave-secreta
DATABASE_URL=sqlite:///db.sqlite3
```

### Configuración de la base de datos
Por defecto, el proyecto usa SQLite. Para cambiar a PostgreSQL o MySQL, modifica `config/settings.py`:

```python
# Para PostgreSQL
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

## 🐛 Solución de problemas comunes

### Error: "No module named 'django'"
```bash
# Asegúrate de tener el entorno virtual activado
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

# Instala las dependencias
pip install -r requirements.txt
```

### Error de migraciones
```bash
# Elimina migraciones problemáticas y recrea
rm libreria/migrations/0*.py
python manage.py makemigrations libreria
python manage.py migrate
```

### Puerto ocupado
```bash
# Usa un puerto diferente
python manage.py runserver 8080
```

**Nota**: Asegúrate de tener el entorno virtual activado antes de ejecutar cualquier comando de Django.