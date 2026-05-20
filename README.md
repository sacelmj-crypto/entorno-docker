# Entorno Docker

## Descripción

Proyecto de configuración de un entorno Docker utilizando WSL2 y Ubuntu 24.04.

El entorno incluye múltiples servicios ejecutándose con Docker Compose:

- PostgreSQL
- pgAdmin
- Node.js
- Nginx
- Jupyter Lab

---

## Tecnologías utilizadas

- Docker Desktop
- Docker Compose
- Ubuntu 24.04 WSL2
- Git y GitHub
- PostgreSQL 16
- pgAdmin 4
- Node.js 20
- Nginx
- Jupyter Lab

---

## Servicios y puertos

| Servicio | Puerto |
|---|---|
| PostgreSQL | 5432 |
| pgAdmin | 8080 |
| Node.js | 3000 |
| Nginx | 80 |
| Jupyter Lab | 8888 |

---

## Comando para iniciar el entorno

```bash
docker compose up -d
