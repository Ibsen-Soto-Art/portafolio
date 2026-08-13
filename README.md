# Portafolio — Ibsen Alexis Soto Artunduaga

Sitio estático (HTML5 + CSS3 + JavaScript vanilla) del portafolio profesional,
pensado para servirse en `portafolio.ibsen-soto.pro` mediante Nginx.

## Estructura del proyecto

```
Portafolio/
├── index.html              # Contenido completo del sitio (todas las secciones)
├── css/
│   └── style.css           # Sistema de diseño (variables, layout, responsive, dark/light)
├── js/
│   ├── i18n.js              # Diccionario ES/EN y aplicación de idioma (data-i18n)
│   └── main.js              # Typing effect, scroll reveal, menú móvil, tema, formulario
├── assets/
│   ├── img/
│   │   └── ibsen-soto.jpg  # Foto profesional
│   └── cv/
│       └── Ibsen_Soto_CV.pdf  # CV descargable
└── README.md
```

No hay paso de build: es HTML/CSS/JS plano, listo para copiar tal cual a producción.

## Idioma (ES/EN)

El botón "ES/EN" del header alterna todo el contenido visible entre español e inglés,
sin recargar la página. La traducción vive en `js/i18n.js` como un diccionario por
clave (`data-i18n="clave"` en el HTML). Para editar textos:

- Contenido en español: edítalo directamente en `index.html` (es el idioma por defecto,
  el que ven los buscadores y quien entra sin JS).
- Contenido en inglés: edita la clave correspondiente en el objeto `en` de `js/i18n.js`.
- Para agregar un texto nuevo a traducir: ponle `data-i18n="seccion.clave"` en el HTML
  y añade esa misma clave en `TRANSLATIONS.es` y `TRANSLATIONS.en`.

## Notas adicionales

- Si prefieres recibir los mensajes del formulario de contacto por Formspree en vez
  de `mailto:`, edita `js/main.js`:
  - Cambia `FORM_MODE` de `'mailto'` a `'formspree'`.
  - Reemplaza `FORMSPREE_ENDPOINT` con tu URL real de Formspree
    (`https://formspree.io/f/TU_ID`).

## Despliegue en Nginx (subdominio `portafolio.ibsen-soto.pro`)

### 1. Copiar los archivos al VPS

```bash
# Desde tu máquina local, sincroniza la carpeta del proyecto al VPS
rsync -avz --exclude '.git' ./Portafolio/ usuario@tu-vps:/var/www/portafolio.ibsen-soto.pro/
```

O clona el repositorio directamente en el VPS dentro de esa ruta.

### 2. Crear el bloque de servidor en Nginx

Crea `/etc/nginx/sites-available/portafolio.ibsen-soto.pro`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name portafolio.ibsen-soto.pro;

    root /var/www/portafolio.ibsen-soto.pro;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Cache largo para assets estáticos
    location ~* \.(?:css|js|jpg|jpeg|png|svg|webp|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    access_log /var/log/nginx/portafolio.ibsen-soto.pro.access.log;
    error_log  /var/log/nginx/portafolio.ibsen-soto.pro.error.log;
}
```

Activa el sitio y recarga Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/portafolio.ibsen-soto.pro /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. HTTPS con Let's Encrypt (recomendado)

```bash
sudo certbot --nginx -d portafolio.ibsen-soto.pro
```

Certbot ajusta automáticamente el bloque de servidor para redirigir HTTP → HTTPS
y renovar el certificado.

### 4. DNS

Asegúrate de que el subdominio `portafolio` apunte (registro A o CNAME) a la IP
del VPS antes de emitir el certificado.

## Actualizar el sitio tras cambios

```bash
rsync -avz --exclude '.git' ./Portafolio/ usuario@tu-vps:/var/www/portafolio.ibsen-soto.pro/
```

No requiere reiniciar Nginx ni recompilar nada: son archivos estáticos servidos directamente.

## Notas técnicas

- **Sin backend obligatorio**: el formulario de contacto usa `mailto:` por defecto
  (abre el cliente de correo del visitante). Está listo para conectarse a Formspree
  cambiando una constante en `js/main.js` (ver sección "Completar contenido pendiente").
- **Tema claro/oscuro**: se guarda la preferencia del usuario en `localStorage`.
- **Iconos de tecnologías**: se cargan desde el CDN de [Devicon](https://devicon.dev/).
  Si el VPS no tiene salida a internet o se prefiere self-host, descarga la fuente/CSS
  de Devicon y sírvela localmente.
- **Fuentes**: Inter y JetBrains Mono desde Google Fonts (CDN). Mismo criterio que
  el punto anterior si se requiere 100% self-hosted.
