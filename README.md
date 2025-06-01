# Flofy Chat + CRM System

Un sistema completo de chatbot con integración de Gemini AI y CRM para gestión de conversaciones.

## Componentes del Sistema

### 1. Chatbot Widget (`index.html`)

- Widget de chat flotante
- Integración con Gemini AI
- Respuestas limitadas a 200 caracteres
- Sistema de resumen de conversación
- Sincronización automática con CRM

### 2. CRM Dashboard (`crm.html`)

- Panel de administración de conversaciones
- Lista de todas las conversaciones del chatbot
- Control manual/automático (IA vs Asesor)
- Interfaz para responder como asesor
- Monitoreo en tiempo real

## Funcionalidades Principales

### Chatbot

- **Respuestas automáticas**: Gemini AI responde automáticamente
- **Límite de caracteres**: Respuestas máximo 200 caracteres
- **Contexto**: Mantiene historial y resumen de conversación
- **Persistencia**: Guarda conversaciones en localStorage

### CRM

- **Tomar Control**: Asesor puede tomar control de conversación
- **Modo Asesor**: Cuando está activo, aparece "asesor" en lugar de "flofy"
- **Modo IA**: Cuando está activo, aparece "flofy" y responde automáticamente
- **Contexto Compartido**: Las respuestas del asesor se incluyen en el contexto de la IA
- **Sincronización**: Conversaciones se sincronizan en tiempo real

## Configuración

### Gemini API

1. Obtener API key de Google Gemini
2. Actualizar `CONFIG.GEMINI_API_KEY` en `config.js`

### Archivos Principales

- `index.html` - Widget del chatbot
- `crm.html` - Dashboard del CRM
- `script.js` - Lógica del chatbot
- `crm.js` - Lógica del CRM
- `config.js` - Configuración compartida

## Uso

### Para usar el Chatbot:

1. Abrir `index.html` en el navegador
2. Hacer clic en el botón flotante para abrir el chat
3. Escribir mensajes y recibir respuestas automáticas

### Para usar el CRM:

1. Abrir `crm.html` en el navegador
2. Ver lista de conversaciones activas
3. Seleccionar una conversación
4. Usar "Tomar Control" para responder manualmente
5. Usar "Entregar a IA" para volver al modo automático

## Flujo de Control

### Modo IA (por defecto)

- La IA (Gemini) responde automáticamente
- Aparece "flofy" como nombre del bot
- Respuestas limitadas a 200 caracteres

### Modo Asesor

- El asesor toma control manual
- Aparece "asesor" como nombre
- La IA deja de responder automáticamente
- Conversaciones del asesor se incluyen en contexto

### Cambio de Modo

- Botón "Tomar Control" → Activa modo asesor
- Botón "Entregar a IA" → Reactiva modo IA
- Mensaje del sistema notifica el cambio

## Almacenamiento

### localStorage Keys

- `flofy_conversations` - Conversaciones sincronizadas con CRM
- `chatHistory_${userId}` - Historial individual por usuario
- `chatSummary_${userId}` - Resumen de conversación por usuario
- `crm_conversations` - Conversaciones del CRM

## Personalización

### Límites de Respuesta

- Modificar `MAX_RESPONSE_LENGTH` en `config.js`
- Modificar `MAX_SUMMARY_LENGTH` en `config.js`

### Estilos

- Basado en Tailwind CSS
- Colores y gradientes personalizables
- Diseño responsive

## Integración Futura

El sistema está preparado para:

- Integración con WhatsApp Business API
- Conexión con bases de datos externas
- Webhooks para notificaciones
- Analytics y reportes
- Múltiples canales de comunicación
