import os
from shutil import copyfile

GEM5_DIR = os.getenv('GEM5_DIR')
BENCHMARK_DIR = os.getenv('SPEC_BENCHMARK_DIR')

config = {
    'output_dir':'m5out',
    'isa':'arm',
    'cpu':'TimingSimpleCPU'
}


def run_spec_bm(cpu='TimingSimpleCPU', isa='ARM', max_instructions=100000000):

    '''
    
    '''

    config['isa'] = isa.lower()
    config['cpu'] = cpu.lower()
    
    bm = BENCHMARK_DIR
    _isa = config['isa']
    out = config['output_dir']

    benchmark = f'{bm}/{_isa}/src/benchmark'
    arg = f'{bm}/{_isa}/data/test.txt'
    base_command = f'sudo time {GEM5_DIR}/build/{isa}/gem5.opt -d {out} {GEM5_DIR}/configs/example/se.py -I {max_instructions} -c {benchmark} -o {arg} --cpu-type={cpu} --caches'

    run_default(base_command)
    run_cache_size_variations(base_command)
    run_cache_assoc_variations(base_command)


def run_default(base_cmd):

    '''
    '''
    
    os.system(base_cmd)
    rename_stats_file('branch-predictor','tournament')


def run_cache_size_variations(base_cmd):

    '''
    '''
    
    caches = ['1kB','2kB','4kB','8kB','16kB']
    for cache_size in caches:
        cmd = f'{base_cmd} --l2cache --l1d_size={cache_size} --l1i_size={cache_size}'
        os.system(cmd)
        rename_stats_file('cache-size',cache_size)


def run_cache_assoc_variations(base_cmd):

    '''
    '''
    
    caches = ['1','2','4','8','16']
    for cache_assoc in caches:
        cmd = f'{base_cmd} --l2cache --l1d_assoc={cache_assoc} --l1i_assoc={cache_assoc}'
        os.system(cmd)
        rename_stats_file('cache-assoc',cache_assoc)


def rename_stats_file(test, value):

    '''
    '''
    
    bm = BENCHMARK_DIR
    isa = config['isa']
    out = 'm5out'#config['output_dir']
    cpu = config['cpu']

    # copy stats.txt
    original_stats_file = f'./m5out/stats.txt'
    new_stats_file = f'{bm}/{isa}/{out}/stats_{cpu}:{isa}:{test}:{value}.txt'
    copyfile(original_stats_file, new_stats_file)

    # copy config.ini
    original_config_file = f'./m5out/config.ini'
    new_config_file = f'{bm}/{isa}/{out}/config_{cpu}:{isa}:{test}:{value}.ini'
    copyfile(original_config_file, new_config_file)
    

def run(isa):
    cpu_types = ['TimingSimpleCPU','O3CPU']
    for cpu in cpu_types:
        run_spec_bm(cpu, isa)


if __name__ == '__main__':
    run('ARM')