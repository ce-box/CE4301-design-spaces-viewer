import os

GEM5_DIR = os.getenv('GEM5_DIR')

def build_gem5():

    '''
    '''
    
    os.chdir(GEM5_DIR)
    cpus = int(input('Specify the number of CPUs: '))

    x68_cmd = f'scons build/X86/gem5.opt -j {cpus}'
    arm_cmd = f'scons build/ARM/arch/arm/generated/inst-constrs-3.o && scons build/ARM/gem5.opt -j {cpus}'
    riscv_cmd = f'scons build/RISCV/gem5.opt -j {cpus}'

    #print('Building X86 ...')
    #os.system(x68_cmd)
    print('Building ARM ...')
    os.system(arm_cmd)
    print('Building RISCV ...')
    os.system(riscv_cmd)


if __name__ == '__main__':
    build_gem5()