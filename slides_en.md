---
theme: default
transition: view-transition
title: "InfoTP | Technology and communication for public transport"
class: cover
monaco: false
mdc: true
---

# infotp

Technology and communication for public transportation information systems

<div class="absolute top-4 right-8">
<img src="/images/simovi_dark.png" width="125px" alt="Logo SIMOVI">
</div>

<div class="absolute bottom-4 right-8 font-bold text-sm uppercase">
December 2025
</div>

---

## executive summary

<div class="flex items-center justify-start h-full">
<div class="text-left">
<p>In Costa Rica, the lack of public transportation information is evident, and it is an important factor that affects the choice of service as a mobility alternative and the perception of user satisfaction.</p>

<p><strong>InfoTP</strong> is the result of research in technologies and standards applied to public transportation, systems engineering design, and service design, presented as a practical guide to design and implementation for decision makers.</p>

<p>With more than twenty open-source projects, a design with well-defined subsystems and interfaces, and a proven selection of robust technologies used in critical environments, this development functions as a technological map and backbone for an open digital ecosystem of public transportation and smart cities, with the academic and institutional support of the University of Costa Rica.</p>
</div>
</div>

<div class="absolute bottom-4 right-8 text-xs">
Full report available in March 2026.
</div>

---

## vision

::definition
We build our proposal based on the recommendations of leading international organizations in intelligent public transportation systems and software systems. **InfoTP** is a technological architecture and communication strategy based on an essential principle: **information uniqueness**.
::

This **joint design** allows us to offer information that is always **consistent**, **accurate**, **up-to-date**, and from a **single source**, through as many communication channels as possible.

<div class="grid grid-cols-4 gap-4">
<div class="flex flex-col items-center text-center p-3 border border-white rounded-lg">
<p class="font-bold">Open and standardized data</p>
</div>
<div class="flex flex-col items-center text-center p-3 border border-white rounded-lg">
<p class="font-bold">Unique architecture for the system</p>
</div>
<div class="flex flex-col items-center text-center p-3 border border-white rounded-lg">
<p class="font-bold">Interoperability</p>
</div>
<div class="flex flex-col items-center text-center p-3 border border-white rounded-lg">
<p class="font-bold">Technological independence</p>
</div>
</div>

---

## gtfs

::definition
We are the specialists in **GTFS** (_General Transit Feed Specification_) in Costa Rica. All of **InfoTP** design revolves around this specification and other complementary standards.
::

<div class="grid grid-cols-3 gap-6">
<div class="flex items-center justify-center text-center">
<p>We have more than 5 years of experience with <strong>GTFS</strong> <i>Schedule</i> and <strong>GTFS</strong> <i>Realtime</i> on websites and Google Maps.</p>
</div>
<div class="flex items-center justify-center text-center">
<p>We are academic members of <strong>MobilityData</strong>, the international organization that directs its evolution.</p>
</div>
<div class="flex items-center justify-center text-center">
<p>We develop specialized computer tools for its processing and analysis.</p>
</div>
</div>

<br>

<div class="flex justify-center">
<div class="grid grid-cols-2 gap-8 items-center">
<img src="/images/gtfs.png" width="50px" alt="Logo GTFS">
<img src="/images/mobilitydata_white.png" width="200px" alt="Logo MobilityData">
</div>
</div>

---
layout: section
---

# technology

---

## architecture

::definition
The **technological architecture** of **InfoTP** is an end-to-end solution for public transportation information systems. Its architecture has two main subsystems.
::

<div class="grid grid-cols-2 gap-8">
<div>

### Databus

Subsystem :badge{ value="A1" color="#6DC067" }

Collects official information and vehicle tracking and telemetry data for real-time publication with the **GTFS** specification, available for all compatible applications, including Google Maps, Moovit, Transit, and other providers.

</div>
<div>

### Infobus

Subsystem :badge{ value="A2" color="#F37021" }

Consumes **GTFS** data and distributes information through multiple channels, interfaces, and protocols for all system parties, including users, operators, planners, regulators, researchers, and other technology providers.

</div>
</div>

<div class="absolute bottom-4 right-8 text-xs">
Databus® and Infobus® are registered trademarks of the University of Costa Rica.
</div>

---

<div class="flex flex-col items-center justify-center h-full gap-8">
<div></div>
<img src="/images/databus_white.png" width="300px" alt="Logo Databus">
<div class="grid grid-cols-3 gap-6 w-full">
<div class="flex flex-col items-center text-center">
<material-symbols-location-on class="text-4xl mb-3" />
<p>Collection of vehicle tracking and telemetry data and official agency information.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-bolt class="text-4xl mb-3" />
<p>Processing and analysis of high-frequency real-time data.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-feed class="text-4xl mb-3" />
<p>Publication of <em>feeds</em> (data supplies) of <strong>GTFS</strong> <em>Schedule</em> and <strong>GTFS</strong> <em>Realtime</em>.</p>
</div>
</div>
</div>

---

<div class="flex flex-col items-center justify-center h-full gap-8">
<img src="/images/infobus_white.png" width="250px" alt="Logo Infobus">
<div class="grid grid-cols-4 gap-6 w-full">
<div class="flex flex-col items-center text-center">
<material-symbols-feed class="text-4xl mb-3" />
<p>Collection of <em>feeds</em> (data supplies) of <strong>GTFS</strong> from different transportation systems.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-database class="text-4xl mb-3" />
<p>Storage of historical data in specialized databases.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-analytics class="text-4xl mb-3" />
<p>Data analysis for optimization, research, or service regulation.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-send class="text-4xl mb-3" />
<p>Distribution of information through multiple channels, interfaces, and protocols.</p>
</div>
</div>
</div>

---

## complementary architecture

::definition
The **technological architecture** of **InfoTP** includes two complementary subsystems to simplify and strengthen its operation.
::

<div class="grid grid-cols-2 gap-8">
<div>

### Infobus Admin

Subsystem :badge{ value="A3" color="#FFDD00" }

Provides an interface with the administrative sector to manage all data related to the information system.

</div>
<div>

### Databus Admin

Subsystem :badge{ value="A4" color="#7B3400" }

Provides tools for information technology personnel to monitor the quality and security of the digital infrastructure.

</div>
</div>

---

<div class="flex flex-col items-center justify-center h-full gap-8">
<img src="/images/infobus_admin_white.png" width="400px" alt="Logo Infobus">
<div class="grid grid-cols-3 gap-6 w-full">
<div class="flex flex-col items-center text-center">
<material-symbols-edit class="text-4xl mb-3" />
<p>Web interface for editing <strong>GTFS</strong> <em>Schedule</em>.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-verified class="text-4xl mb-3" />
<p>Data validation and arrival time estimation.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-query-stats class="text-4xl mb-3" />
<p>Service performance metrics analysis.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-dashboard-customize class="text-4xl mb-3" />
<p>Management of communication channel content.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-science class="text-4xl mb-3" />
<p>Simulation of transportation data for testing.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-draw class="text-4xl mb-3" />
<p>Automated labeling with data and official designs.</p>
</div>
</div>
</div>

---

<div class="flex flex-col items-center justify-center h-full gap-8">
<img src="/images/databus_admin_white.png" width="400px" alt="Logo Databus">
<div class="grid grid-cols-5 gap-6 w-full">
<div class="flex flex-col items-center text-center">
<material-symbols-monitor-heart class="text-4xl" />
<p class="text-sm">Monitoring of digital infrastructure performance.</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-shield-lock class="text-4xl" />
<p class="text-sm">Attention to security threats and contingency measures against attacks.</p>
</div>
<div class="flex flex-col items-center text-center">
<simple-icons-python class="text-4xl" />
<p class="text-sm">Tools for Python, used in process orchestration, data analysis, and artificial intelligence.</p>
</div>
<div class="flex flex-col items-center text-center">
<simple-icons-typescript class="text-4xl" />
<p class="text-sm">Tools for TypeScript, used in web interfaces and mobile applications.</p>
</div>
<div class="flex flex-col items-center text-center">
<simple-icons-rust class="text-4xl" />
<p class="text-sm">Tools for Rust, used in critical high-performance processes for real-time processing.</p>
</div>
</div>
</div>

---

## technologies

::definition
We use a careful selection of robust open-source technologies.
::

<div class="grid grid-cols-6 gap-6">
<div class="flex flex-col items-center">
<simple-icons-django class="text-2xl"/>
<span class="text-center mt-2">Django</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-postgresql class="text-2xl"/>
<span class="text-center mt-2">PostgreSQL</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-redis class="text-2xl"/>
<span class="text-center mt-2">Redis</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-apacheairflow class="text-2xl"/>
<span class="text-center mt-2">Airflow</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-rabbitmq class="text-2xl"/>
<span class="text-center mt-2">RabbitMQ</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-timescale class="text-2xl"/>
<span class="text-center mt-2">TimescaleDB</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-mongodb class="text-2xl"/>
<span class="text-center mt-2">MongoDB</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-graphql class="text-2xl"/>
<span class="text-center mt-2">Strawberry</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-celery class="text-2xl"/>
<span class="text-center mt-2">Celery</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-apache class="text-2xl"/>
<span class="text-center mt-2">Fuseki</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-modelcontextprotocol class="text-2xl"/>
<span class="text-center mt-2">FastMCP</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-strapi class="text-2xl"/>
<span class="text-center mt-2">Strapi</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-vuedotjs class="text-2xl"/>
<span class="text-center mt-2">Vue</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-nuxtdotjs class="text-2xl"/>
<span class="text-center mt-2">Nuxt</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-capacitor class="text-2xl"/>
<span class="text-center mt-2">Capacitor</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-ionic class="text-2xl"/>
<span class="text-center mt-2">Ionic</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-grafana class="text-2xl"/>
<span class="text-center mt-2">Grafana</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-prometheus class="text-2xl"/>
<span class="text-center mt-2">Prometheus</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-docker class="text-2xl"/>
<span class="text-center mt-2">Docker</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-opentelemetry class="text-2xl"/>
<span class="text-center mt-2">OpenTelemetry</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-polars class="text-2xl"/>
<span class="text-center mt-2">Polars</span>
</div>
<div class="flex flex-col items-center">
<simple-icons-apacheparquet class="text-2xl"/>
<span class="text-center mt-2">Parquet</span>
</div>
<div class="flex flex-col items-center">
<mdi-lock class="text-2xl"/>
<span class="text-center mt-2">Wazuh</span>
</div>
<div class="flex flex-col items-center">
<mdi-magnify-scan class="text-2xl"/>
<span class="text-center mt-2">Zabbix</span>
</div>
</div>

---
layout: section
---

# communication

---

## strategy

::definition
The **communication strategy** of **InfoTP** is a comprehensive vision that promotes the use of public transportation and helps improve user satisfaction with the service. Communication is focused on various channels.

::

<div class="grid grid-cols-5 gap-6 text-center">
<div class="flex flex-col items-center gap-2">
<material-symbols-devices class="text-4xl" />
<span>Digital media</span>
</div>
<div class="flex flex-col items-center gap-2">
<material-symbols-map class="text-4xl" />
<span>Print media</span>
</div>
<div class="flex flex-col items-center gap-2">
<material-symbols-signpost class="text-4xl" />
<span>Signage</span>
</div>
<div class="flex flex-col items-center gap-2">
<material-symbols-share class="text-4xl" />
<span>Social media</span>
</div>
<div class="flex flex-col items-center gap-2">
<material-symbols-support-agent class="text-4xl" />
<span>Customer service</span>
</div>
</div>

---

## native design

<br>

<div class="grid grid-cols-3 gap-6">
<div>
<h5 class="font-bold mb-2">Digital native</h5>
<p>All digital channels are part of the information offering.</p>
</div>
<div>
<h5 class="font-bold mb-2">Mobile native</h5>
<p>The design is oriented to queries from personal devices.</p>
</div>
<div>
<h5 class="font-bold mb-2">Inclusive native</h5>
<p>Timely information with universal design facilitates use for all people.</p>
</div>
<div>
<h5 class="font-bold mb-2">Intelligent native</h5>
<p>New interfaces enable the use of natural language for queries.</p>
</div>
<div>
<h5 class="font-bold mb-2">Social native</h5>
<p>Social networks inform and build community around public transportation.</p>
</div>
<div>
<h5 class="font-bold mb-2">Multilingual native</h5>
<p>The system eliminates language barriers for visitors from any part of the world.</p>
</div>
<div>
<h5 class="font-bold mb-2">Costa Rican native</h5>
<p>It is part of our towns and cities, so public transportation should be a source of pride.</p>
</div>
</div>

---

## touch points

::definition
In service design, "touch points" are where users interact with the system. **InfoTP** seeks to create or enable all possible options, developed locally or offered by third parties, leveraging **InfoTP** infrastructure.
::

<div class="grid grid-cols-3 gap-6">
<div class="flex flex-col items-center text-center">
<material-symbols-language class="text-4xl mb-3" />
<p>Web pages</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-smartphone class="text-4xl mb-3" />
<p>Mobile applications</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-ambient-screen class="text-4xl mb-3" />
<p>External screens</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-route class="text-4xl mb-3" />
<p>Trip planning</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-search class="text-4xl mb-3" />
<p>Natural language searches</p>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-exposure-plus-1 class="text-4xl mb-3" />
<p>Other contact points</p>
</div>
</div>

---
layout: section
---

# proposal

---

## advantages

<br>

<div class="grid grid-cols-3 gap-6">
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-target-variant /> Specialization</h5>
<p>Proposal based on standards, specifications, and international standards.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-sync /> Consistency and uniqueness</h5>
<p>Information is <strong>consistent</strong> with each other and with official data from a <strong>single source</strong>.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-network /> Comprehensive communication management</h5>
<p>Unified management of all contact points with the system.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-puzzle /> Implementation flexibility</h5>
<p>Allows <strong>coexistence with other services</strong> and market providers.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-stairs /> Gradual implementation</h5>
<p>The modular design allows for gradual addition of new features.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-toolbox /> Custom solutions</h5>
<p>In coordination with authorities, the system can meet <strong>specific demands</strong>.</p>
</div>
</div>

---

## advantages

<br>

<div class="grid grid-cols-3 gap-6">
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-shield-lock /> Security and robustness</h5>
<p>The system has a design oriented to <strong>data security and reliability</strong>.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-school /> Academic support</h5>
<p>Proposal from the UCR School of Electrical Engineering in alliance with other <strong>specialized bodies</strong>.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-file /> Contractual guarantee</h5>
<p>Services provided through a contract with the University of Costa Rica.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-cash-multiple /> Financing flexibility</h5>
<p>The modular architecture allows for financing from different sources.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-hand-coin /> System monetization</h5>
<p>Various monetization options that help finance services.</p>
</div>
<div class="border border-white rounded-lg p-4">
<h5 class="font-bold mb-2"><mdi-github /> Open source</h5>
<p>Use in the national and international community through open-source projects.</p>
</div>
</div>

---

## catalogs

::definition
**InfoTP** research resulted in 17 catalogs divided into 5 domains that provide an exhaustive account of the relevant components of the public transportation information system. This follows the TOGAF architecture development methodology (ADM).
::

<div class="grid grid-cols-5 gap-6">
<div class="flex flex-col items-center text-center">
<material-symbols-foundation class="text-4xl mb-2" />
<p class="font-bold mb-2">Fundamentals</p>
<ul class="text-sm text-left">
<li>Principles</li>
<li>Applications</li>
<li>Requirements</li>
</ul>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-domain class="text-4xl mb-2" />
<p class="font-bold mb-2">Institutional</p>
<ul class="text-sm text-left">
<li>Stakeholders</li>
<li>Actors</li>
<li>Organizations</li>
</ul>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-database class="text-4xl mb-2" />
<p class="font-bold mb-2">Data</p>
<ul class="text-sm text-left">
<li>Entities</li>
<li>Components</li>
</ul>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-settings class="text-4xl mb-2" />
<p class="font-bold mb-2">Technology</p>
<ul class="text-sm text-left">
<li>Technologies</li>
<li>Standards</li>
<li>Interfaces</li>
</ul>
</div>
<div class="flex flex-col items-center text-center">
<material-symbols-campaign class="text-4xl mb-2" />
<p class="font-bold mb-2">Communication</p>
<ul class="text-sm text-left">
<li>Brands</li>
<li>Graphic elements</li>
<li>Signage</li>
<li>Visual interfaces</li>
<li>Templates</li>
</ul>
</div>
</div>

<div class="absolute bottom-4 right-8 text-xs">
Catalogs available in March 2026.
</div>

---

## about us

::definition
The Laboratory of Intelligent Mobility Systems (SIMOVI) of the School of Electrical Engineering (EIE) of the University of Costa Rica (UCR) conducts research and development in intelligent public transportation systems.
::

<div class="grid grid-cols-2 gap-3 text-small">
<div>
<p><strong>Fabián Abarca Calderón, M.Sc.</strong><br>
<em>Coordinator and lead developer</em></p>
</div>
<div>
<p><strong>Marvin Coto Jiménez, Ph.D.</strong><br>
<em>Data analysis and artificial intelligence</em></p>
</div>
<div>
<p><strong>Gustavo Núñez Segura, Ph.D.</strong><br>
<em>Telecommunications networks</em></p>
</div>
<div>
<p><strong>Jonathan Agüero Valverde, Ph.D.</strong><br>
<em>Transportation and spatial statistics</em></p>
</div>
<div>
<p><strong>Silvia Mata Marín, Ph.D.</strong><br>
<em>Service design and graphic design</em></p>
</div>
<div>
<p><strong>Fabiana Gama de Medeiros, Ph.D.</strong><br>
<em>Behavior and perception studies</em></p>
</div>
</div>

---

## projects

::definition
SIMOVI advances its research and development thanks to the contribution of more than 30 students from different majors in different academic works in the last year.
::

### Pilot plan

In 2026, SIMOVI will develop a pilot project of a public transportation information system for the internal bus service of the University of Costa Rica's central campus, which will be the **first intelligent public transportation system in the country** and will allow evaluation of the technological architecture proposal and communication strategy in a real application environment.

<div class="flex items-center justify-center">
<img src="/images/b_white.png" width="125px" alt="Logo bUCR">
</div>

---

## contact

<div class="absolute bottom-4 right-8 text-right">
<div class="mb-5">
<strong>Laboratory of Intelligent Mobility Systems</strong><br>
School of Electrical Engineering<br>
Faculty of Engineering<br>
University of Costa Rica<br>
<a url="mailto:simovi@ucr.ac.cr" target=_blank>simovi@ucr.ac.cr</a>
</div>
<div class="mt-5">
<strong>Fabián Abarca Calderón</strong><br>
Coordinator<br>
<a url="mailto:fabian.abarca@ucr.ac.cr" target=_blank>fabian.abarca@ucr.ac.cr</a><br>
</div>
</div>
