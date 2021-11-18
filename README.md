# Exploración de Espacios de Diseño 🧭

La exploración de espacios de diseño y modelado de desempeño son vitales para el desarrollo de sistemas computacionales modernos. Este tipo de estudios son necesarios para evaluar la viabilidad del desarrollo de proyectos de **diseño de micro-arquitecturas**.

En este proyecto se realizarán pruebas de rendimiento a dos *benchmarks* utilizando [GEM5](https://www.gem5.org/), una plataforma modular para la investigación de arquitectura de sistemas computacionales y de los sistemas de micro-arquitectura de procesadores.

## Estructura de Hardware 🎛️

Las pruebas se realizarán en distintos modelos de 24 micro-arquitecturas base, con el fin de evaluar el rendimiento de cada una ante las misma carga de trabajo.

Se escogieron dos ISAs para realizar esta prueba. Cada *set de instrucciones será la base* para 12 micro-arquitecturas distintas.

``` bash
  ISA
   ├── RISC-V
   └── ARM
```

Para cada ISA se probarán dos tipos de procesadores de los que provee `GEM5`. Cada procesador será modificado para construir 6 micro-arquitecturas con distintas configuraciones.

``` bash
  PROCESADOR
   ├── TimingSimple
   └── TraceCPU
```

Para realizar los cambios se deben seleccionar 2 parámetros del procesador y cambiar su valor 5 veces. Además, se deben evaluar los tipos de *branch-predictor*.

``` bash
  BRANCH PREDICTOR UNIT
   ├── 2bit_local
   ├── Bi_mode
   └── Tournament
```

Para cada branch-predictor se varían sus parámetros:

``` bash
  BRANCH PREDICTOR PARAMETERS
   ├── BTBEntries
   ├── localPredictorSize
   ├── globalPredictorSize
   └── choicePredictorSize
```

## Benchmarks 🧪

Los modelos de hardware serán probados con dos benchmarks: uno del tipo [SPEC](http://www.m5sim.org/SPEC_benchmarks) y otro del tipo [PARSEC](https://parsec.cs.princeton.edu/download/tutorial/2.0/parsec-2.0-tutorial.pdf).

### Tabla 1. Benchmarks escogidos por cada tipo

| Tipo     | Benchmark | Descripción |
| -------  | --------- | ----------- |
| SPEC2006 | 401.bzip  | [Algoritmo de compresión](https://github.com/MartijnB/compression-benchmark/blob/master/bzip2-1.0.6/bzip2.txt) de archivos en memoria |
| PARSEC   | canneal   | [Algoritmo de recocido simulado](https://es.wikipedia.org/wiki/Algoritmo_de_recocido_simulado) consiente de la caché para optimizar los costos de enrutamiento en el diseño de chips|

Estos benchmarks se seleccionaron por su alto uso de memoria, lo que nos permite variar parámetros de las memorias caché, como su tamaño, grado de asociatividad, cantidad de sets, entre otros y evaluar su rendimiento (*misses y hits*).

## Visualización de Estadísticas 📊

¿Cómo se visualizan los resultados de las pruebas? Creamos una herramienta que permite la visualización de los resultados obtenidos mediante gráficos. El sistema permite observar las cinco variaciones por parámetro para cada una de las combinaciones.

()[]

### Tabla 2. Combinaciones posibles para las micro-arquitecturas seleccionadas

| #  | Benchmark | ISA   | Procesador   | BPU        | cache-assoc | cache-size |
| -  | --------- | ---   | ----------   | ---        | ----------- | ---------- |
| 1  | 401.bzip  | ARM   | TimingSimple | 2bit_local | ----------- | ---------- |
| 2  | 401.bzip  | ARM   | TimingSimple | Bi_mode    | ----------- | ---------- |
| 3  | 401.bzip  | ARM   | TimingSimple | Tournament | ----------- | ---------- |
| 4  | 401.bzip  | ARM   | TraceCPU     | 2bit_local | ----------- | ---------- |
| 5  | 401.bzip  | ARM   | TraceCPU     | Bi_mode    | ----------- | ---------- |
| 6  | 401.bzip  | ARM   | TraceCPU     | Tournament | ----------- | ---------- |
| 7  | 401.bzip  | RISCV | TimingSimple | 2bit_local | ----------- | ---------- |
| 8  | 401.bzip  | RISCV | TimingSimple | Bi_mode    | ----------- | ---------- |
| 9  | 401.bzip  | RISCV | TimingSimple | Tournament | ----------- | ---------- |
| 10 | 401.bzip  | RISCV | TraceCPU     | 2bit_local | ----------- | ---------- |
| 11 | 401.bzip  | RISCV | TraceCPU     | Bi_mode    | ----------- | ---------- |
| 12 | 401.bzip  | RISCV | TraceCPU     | Tournament | ----------- | ---------- |
| -- | --------- | ----- | ----------   | ---------- | ----------- | ---------- |
| 13 | canneal   | ARM   | TimingSimple | 2bit_local | ----------- | ---------- |
| 14 | canneal   | ARM   | TimingSimple | Bi_mode    | ----------- | ---------- |
| 15 | canneal   | ARM   | TimingSimple | Tournament | ----------- | ---------- |
| 16 | canneal   | ARM   | TraceCPU     | 2bit_local | ----------- | ---------- |
| 17 | canneal   | ARM   | TraceCPU     | Bi_mode    | ----------- | ---------- |
| 18 | canneal   | ARM   | TraceCPU     | Tournament | ----------- | ---------- |
| 19 | canneal   | RISCV | TimingSimple | 2bit_local | ----------- | ---------- |
| 20 | canneal   | RISCV | TimingSimple | Bi_mode    | ----------- | ---------- |
| 21 | canneal   | RISCV | TimingSimple | Tournament | ----------- | ---------- |
| 22 | canneal   | RISCV | TraceCPU     | 2bit_local | ----------- | ---------- |
| 23 | canneal   | RISCV | TraceCPU     | Bi_mode    | ----------- | ---------- |
| 24 | canneal   | RISCV | TraceCPU     | Tournament | ----------- | ---------- |

***
