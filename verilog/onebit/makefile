CXX='em++'
LINK='em++'
OBJCACHE=
CXXFLAGS='-D VL_IGNORE_UNKNOWN_ARCH'

lib: interface.cpp
	cd obj_dir && make -B -f ./Vonebit_cpu.mk CXX=${CXX} LINK=${LINK} OBJCACHE=${OBJCACHE} CXXFLAGS=${CXXFLAGS}
	$(CXX) -I ./obj_dir/vlt/include/ ./interface.cpp ./obj_dir/*.o $(CXXFLAGS) -sINCOMING_MODULE_JS_API=print,printErr,onRuntimeInitialized -o main.js
