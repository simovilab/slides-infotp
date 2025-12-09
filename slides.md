---
theme: default
title: "InfoTP | Tecnología y comunicación para el transporte público"
class: cover
monaco: false
mdc: true
---

# infotp

Tecnología y comunicación para los sistemas de información del transporte público

<div class="absolute top-4 right-8">
<img src="/images/simovi_light.png" width="150px" alt="Logo SIMOVI">
</div>

<div class="absolute bottom-4 right-8">
Diciembre 2025
</div>

---

## resumen ejecutivo

La infomación del transporte público

---

## tecnología

::definition
La **arquitectura tecnológica** de InfoTP es una solución de extremo a extremo para los sistemas de información del transporte público.
::

El desarrollo está dividido en dos partes:

<div class="grid grid-cols-2 gap-8">
<div>

### Databús®

Recopila la información oficial y los datos de rastreo y telemetría de los vehículos para la publicación en tiempo real con la especificación **GTFS**, disponible para todas las aplicaciones compatibles, incluyendo Google Maps, Moovit, Transit y otros proveedores.

</div>
<div>

### Infobús®

Consume datos **GTFS** y distribuye la información por múltiples canales, interfaces y protocolos para todas las partes del sistema, incluyendo las personas usuarias, operadores, planificadores, reguladores, investigadores y otros proveedores tecnológicos.

</div>
</div>

> Con más de veinte proyectos de código abierto, subsistemas e interfaces bien delimitados y una selección comprobada de tecnologías robustas usadas en entornos críticos, este desarrollo funciona como un mapa tecnológico y una columna vertebral para el ecosistema digital abierto del transporte público y las ciudades inteligentes.

---

## comunicación

::definition
La **estrategia de comunicación** de InfoTP es una visión integral que promueve el uso del transporte público y ayuda a mejorar la satisfacción de las personas usuarias con el servicio. El diseño de la estrategia de comunicación en conjunto con la arquitectura tecnológica permite ofrecer información siempre **actualizada** y **consistente**.
::

La comunicación está enfocada en diversos canales:

- Medios digitales
- Medios impresos
- Señalética
- Redes sociales
- Atención al cliente

---

## diseño nativo

::definition
El sistema
::

- **Nativo digital**: Todos los canales digitales son parte de la oferta de información.
- **Nativo móvil**: El diseño está orientado a las consultas desde dispositivos personales.
- **Nativo inclusivo**: La información oportuna y con diseño universal facilita el uso de todas las personas.
- **Nativo inteligente**: Las nuevas interfaces habilitan el uso de lenguaje natural para hacer consultas.
- **Nativo social**: Las redes sociales informan y crean comunidad alrededor del transporte público.
- **Nativo multilingüe**: El sistema elimina las barreras de lenguaje para los visitantes de cualquier parte del mundo.
- **Nativo tico**: Es parte de nuestros pueblos y ciudades, por eso el transporte público debe ser un orgullo tico.

---

## visión

::definition
Construimos nuestra arquitectura con base en las recomendaciones de las organizaciones internacionales líderes en sistemas inteligentes de transporte público y arquitecturas de software.
::

Está basada en un principio esencial:

Unicidad de la información: La información disponible para las personas usuarias es consistente, precisa, actualizada y proviene de una fuente única, a través de la mayor cantidad posible de canales de comunicación.

De aquí derivan otros principios importantes:

- Datos abiertos y estandarizados
- Arquitectura única para el sistema
- Interoperabilidad
- Independencia tecnológica

---

## arquitectura

::definition
Sobre la base una arquitectura modular, nuestro sistema está preparado para incorporar aplicaciones futuras e interactuar con todos los proveedores tecnológicos del sistema.
::

```mermaid
flowchart TD
  A1[A1]
  A2[A2]
  A3[A3]
  A4[A4]
  A5[A5]

  A1 --> A2
  A3 --> A1
  A3 --> A2
  A4 --> A1
  A4 --> A2
```

---

## gtfs

::definition
Somos los especialistas de la especificación GTFS en Costa Rica
::

El diseño de InfoTP gira alrededor de GTFS (_General Transit Feed Specification_).

![Logo GTFS](/images/gtfs.png){width=50px}

- Tenemos más de 5 años de experiencia en la implementación de GTFS _Schedule_ y GTFS _Realtime_.
- Somos miembros académicos de MobilityData, la organización internacional que dirige su evolución.
- Desarrollamos herramientas informáticas especializadas para su procesamiento y análisis en el transporte público costarricense.

![Logo MobilityData](/images/mobilitydata_light_blue.png){width=250px}

---

## datos

:badge{ value="A1" color="#6DC067" }

Databús®

- Recolección de datos de rastreo y telemetría de los vehículos.
- Procesamiento de datos de alta frecuencia en tiempo real.
- Publicación de _feeds_ (suministros de datos) de **GTFS** _Schedule_ y **GTFS** _Realtime_.

```mermaid
flowchart LR
  A[Aquí]
  v[va]
  u[un]
  d[diagrama]

  A --> v --> u --> d
```

---

## información

:badge{ value="A2" color="#F37021" }

Infobús®

- Compilación de _feeds_ (suministros de datos) de **GTFS** de diferentes fuentes.
- Distribución de la información a diferentes servicios vía múltiples canales, interfaces y protocolos.
- Almacenamiento de datos históricos en bases de datos especializadas.
- Análisis de datos para optimización del servicio.

```mermaid
flowchart LR
  A[Aquí]
  v[va]
  u[un]
  d[diagrama]

  A --> v --> u --> d
```

---

## puntos de contacto

::definition
En el diseño de servicios, los "puntos de contacto" son los lugares donde las personas usuarias interactúan con el sistema.
::

- Página web informativa con información en tiempo real
- Aplicación móvil con información en tiempo real
- Sistema de pantallas con información en tiempo real
- Planificación de viajes (A a B)
- Búsquedas inteligentes con inteligencia artificial
- Búsquedas semánticas
- Y otros

---

## administración

:badge{ value="A3" color="#FFDD00" }

Infobús® Admin

- Edición con interfaz gráfica de usuario para la creación de _feeds_ (suministros de datos) **GTFS** _Schedule_.
- Validación de datos y generación automática de estimación de tiempos de llegada.
- Visualización de métricas de desempeño del sistema.
- Gestión de contenidos de los canales de comunicación.
- Simulación de datos de transporte para pruebas del sistema.
- Generación automática de rotulación (señalética).

[Aquí van unas imágenes de interfaces web y gráficos en una pantalla]

---

## gestión técnica

:badge{ value="A4" color="#7B3400" }

### Databús® Admin

- Monitoreo del desempeño de la infraestructura digital del sistema.
- Atención de amenazas de seguridad y medidas de contingencia.

---

## sistema

Utilizamos una cuidadosa selección de tecnologías maduras y de código abierto.

[Logos de las tecnologías del sistema]

- ![Django logo](https://api.iconify.design/simple-icons:django.svg) Django
- ![Celery logo](https://api.iconify.design/simple-icons:celery.svg) Celery
- ![Airflow logo](https://api.iconify.design/simple-icons:apacheairflow.svg) Apache Airflow
- ![PostgreSQL logo](https://api.iconify.design/simple-icons:postgresql.svg) PostgreSQL
- ![TimescaleDB logo](https://api.iconify.design/simple-icons:timescale.svg) TimescaleDB
- ![MongoDB logo](https://api.iconify.design/simple-icons:mongodb.svg) MongoDB
- ![Redis logo](https://api.iconify.design/simple-icons:redis.svg) Redis
- ![RabbitMQ logo](https://api.iconify.design/simple-icons:rabbitmq.svg) RabbitMQ
- ![GraphQL logo](https://api.iconify.design/simple-icons:graphql.svg) GraphQL Strawberry
- ![Apache logo](https://api.iconify.design/simple-icons:apache.svg) Apache Fuseki
- ![MCP logo](https://api.iconify.design/simple-icons:modelcontextprotocol.svg) FastMCP
- ![Strapi logo](https://api.iconify.design/simple-icons:strapi.svg) Strapi
- ![Vue.js logo](https://api.iconify.design/simple-icons:vuedotjs.svg) Vue
- ![Nuxt logo](https://api.iconify.design/simple-icons:nuxtdotjs.svg) Nuxt
- ![Capacitor logo](https://api.iconify.design/simple-icons:capacitor.svg) Capacitor
- ![Ionic logo](https://api.iconify.design/simple-icons:ionic.svg) Ionic
- ![Grafana logo](https://api.iconify.design/simple-icons:grafana.svg) Grafana
- ![Prometheus logo](https://api.iconify.design/simple-icons:prometheus.svg) Prometheus
- ![Docker logo](https://api.iconify.design/simple-icons:docker.svg) Docker
- ![OpenTelemetry logo](https://api.iconify.design/simple-icons:opentelemetry.svg) OpenTelemetry
- ![Polars logo](https://api.iconify.design/simple-icons:polars.svg) Polars
- ![Parquet logo](https://api.iconify.design/simple-icons:apacheparquet.svg) Apache Parquet

Más información: https://github.com/simovilab/

---

## herramientas

### Lenguajes de programación

- ![Python logo](https://api.iconify.design/simple-icons:python.svg) Python
  - Orquestación de procesos, análisis de datos e inteligencia artificial
- ![TypeScript logo](https://api.iconify.design/simple-icons:typescript.svg) TypeScript
  - Interfaces web y aplicaciones móviles
- ![Rust logo](https://api.iconify.design/simple-icons:rust.svg) Rust
  - Procesos críticos de alto desempeño

### Herramientas auxiliares

- Herramientas de programación para Python
- Herramientas de programación para TypeScript
- Herramientas de programación para Rust

---

## ventajas

1. **Especialización**

Propuesta basada en normas, especificaciones, estándares y recomendaciones internacionales.

2. **Consistencia y unicidad**

La información es **consistente** entre sí y con los datos oficiales a partir de una **fuente única**.

3. **Gestión integral de la comunicación**

Manejo unificado de todos los puntos de contacto de las personas usuarias con el sistema.

4. **Flexibilidad de implementación**

Permite la **coexistencia con otros servicios** y proveedores del mercado.

5. **Implementación gradual**

El diseño modular permite la adición paulatina de nuevas funcionalidades.

6. **Soluciones a la medida**

En coordinación con las autoridades, el sistema puede satisfacer **demandas específicas**.

---

## ventajas

7. **Enfoque en seguridad y robustez**

El sistema tiene un diseño orientado a la **seguridad de los datos y la confiabilidad**.

8. **Respaldo académico**

Propuesta de la Escuela de Ingeniería Eléctrica en alianza con otras **instancias especializadas**.

9. **Garantía contractual**

Servicios brindados mediante un contrato con la Universidad de Costa Rica.

10. **Flexibilidad de financiamiento**

La arquitectura modular permite recibir financiamiento de distintas fuentes.

11. **Monetización del sistema**

Varias opciones de monetización del sistema que ayudan a financiar los servicios.

12. **Código abierto**

Uso extendido en la comunidad nacional e internacional por medio de un proyecto de código abierto.

---

## nosotros

El Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) de la Escuela de Ingeniería Eléctrica (EIE) de la Universidad de Costa Rica (UCR) realiza investigación y desarrollo en sistemas inteligentes de transporte público. InfoTP es el resultado de la investigación en tecnologías y estándares aplicados al transporte público, el diseño de sistemas de ingeniería y el diseño de servicios, como una guía práctica de diseño e implementación para tomadores de decisiones.

En el 2026, SIMOVI desarrollará el plan piloto de un sistema de información del transporte público para el servicio de bus interno del campus central de la Universidad de Costa Rica, el cual será el primer sistema inteligente de transporte público del país y permitirá evaluar la propuesta de arquitectura tecnológica y la estrategia de comunicación en un ambiente de aplicación real.

**SIMOVI**<br>
**Laboratorio de Sistemas Inteligentes de Movilidad**<br>
Escuela de Ingeniería Eléctrica<br>
Facultad de Ingeniería<br>
Universidad de Costa Rica<br>
simovi@ucr.ac.cr

---

## contacto

**Fabián Abarca Calderón**<br>
Coordinador SIMOVI<br>
fabian.abarca@ucr.ac.cr<br>

[Logo UCR]
[Logo EIE]
[Logo SIMOVI]

Derechos reservados &copy; 2025
<br>
Laboratorios de Sistemas Inteligentes de Movilidad
