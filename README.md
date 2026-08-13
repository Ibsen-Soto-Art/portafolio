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
│   └── main.js             # Typing effect, scroll reveal, menú móvil, tema, formulario
├── assets/
│   ├── img/
│   │   └── ibsen-soto.jpg  # ← reemplazar con la foto profesional real (ver README-placeholder.txt)
│   └── cv/
│       └── Ibsen_Soto_CV.pdf  # ← reemplazar con el CV real (ver README-placeholder.txt)
└── README.md
```

No hay paso de build: es HTML/CSS/JS plano, listo para copiar tal cual a producción.

## Completar contenido pendiente

Antes de publicar:

1. Añade la foto profesional en `assets/img/ibsen-soto.jpg` (formato cuadrado,
   fondo oscuro, traje formal — ver notas en `assets/img/README-placeholder.txt`).
   Mientras no exista el archivo, el sitio muestra automáticamente un placeholder
   con las iniciales "IS".
2. Añade el CV en `assets/cv/Ibsen_Soto_CV.pdf` (ver `assets/cv/README-placeholder.txt`).
3. (Opcional) Elimina los dos archivos `README-placeholder.txt` una vez agregados
   los archivos reales — no afectan el sitio, son solo notas.
4. (Opcional) Si prefieres recibir los mensajes del formulario de contacto por
   Formspree en vez de `mailto:`, edita `js/main.js`:
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
