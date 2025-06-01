# Flofy Chat - Sistema CRM Inteligente

Sistema de chat integrado con CRM que permite alternancia entre respuestas automatizadas (IA) y asesores humanos, con persistencia Firebase.

## 🚀 Características Principales

- **Chat inteligente** con IA (Gemini)
- **CRM integrado** para gestión de conversaciones
- **Alternancia IA/Humano** sin interrupciones
- **Sincronización en tiempo real** entre interfaces
- **Persistencia Firebase** con fallback offline
- **Interfaz moderna** y responsive

## ⚙️ Configuración Rápida

### 1. Clonar el repositorio

```bash
git clone https://github.com/2b2tplayer/flofy-crm.git
cd flofy-crm
```

### 2. Configurar Firebase

```bash
# Copiar plantilla de Firebase
cp firebase-config.example.js firebase-config.js

# Editar firebase-config.js con tus credenciales de Firebase
```

### 3. Configurar Gemini API

```bash
# Copiar plantilla de configuración
cp config.example.js config.js

# Editar config.js y agregar tu API key de Gemini:
# GEMINI_API_KEY: "tu_api_key_aqui"
```

### 4. Configurar variables de entorno (opcional)

```bash
# Copiar plantilla
cp env.example .env

# Editar .env con tus credenciales
```

## 🔧 Uso

1. Abre `index.html` para el **chatbot**
2. Abre `crm.html` para el **panel CRM**
3. Las conversaciones se sincronizan automáticamente

## 🔒 Archivos de Configuración

### Archivos que DEBES configurar:

- `firebase-config.js` - Credenciales Firebase
- `config.js` - API key de Gemini
- `.env` - Variables de entorno (opcional)

### Archivos de plantilla (NO editar):

- `firebase-config.example.js`
- `config.example.js`
- `env.example`

## 📁 Estructura del Proyecto

```
flofy-crm/
├── index.html              # Interfaz chatbot
├── crm.html               # Panel CRM
├── script.js              # Lógica chatbot
├── crm.js                 # Lógica CRM
├── config.js              # ⚠️ Configuración API (local)
├── config.example.js      # Plantilla configuración
├── firebase-config.js     # ⚠️ Firebase config (local)
├── firebase-config.example.js # Plantilla Firebase
├── storage-adapter.js     # Abstracción almacenamiento
├── migration-helper.js    # Migración automática
└── setup-instructions.md  # Guía detallada
```

## 🛡️ Seguridad

- Las credenciales **NO** se suben a GitHub
- Archivos sensibles están en `.gitignore`
- Plantillas disponibles para fácil configuración
- Fallback a localStorage si Firebase falla

## 🔄 Sincronización

- **CRM ↔ Chatbot**: Sincronización bidireccional automática
- **Control IA/Humano**: Cambio instantáneo entre modos
- **Persistencia**: Firebase + localStorage como respaldo
- **Offline**: Funciona sin conexión a internet

## 📖 Documentación Adicional

- `setup-instructions.md` - Configuración detallada Firebase
- `setup-github.md` - Guía para colaboradores
- Comentarios en código para funciones específicas

## 🤝 Colaboración

Para contribuir:

1. Fork el repositorio
2. Crea tus archivos de configuración locales
3. Desarrolla tu feature
4. Pull request (sin incluir archivos de configuración)

---

⚠️ **Importante**: Nunca commits archivos `config.js`, `firebase-config.js` o `.env` al repositorio.
