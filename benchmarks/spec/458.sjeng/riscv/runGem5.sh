# -- an example to run SPEC 429.mcf on gem5, put it under 429.mcf folder --
export GEM5_DIR=/home/ealvarado/Documents/tec/ce4301-arquitectura-computadores/GEM5/gem5
export BENCHMARK=./src/benchmark
export ARGUMENT=./data/test.txt

time $GEM5_DIR/build/RISCV/gem5.opt -d m5out/ $GEM5_DIR/configs/example/se.py -c $BENCHMARK -o $ARGUMENT -I 100000000 --cpu-type=TimingSimpleCPU --caches
