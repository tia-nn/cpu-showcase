#include "./obj_dir/Vonebit_cpu__Syms.h" // From Verilating "bin2bcd.v"
#include <emscripten.h>
#include <iostream>
#include <verilated.h> // Defines common routines

Vonebit_cpu *onebit = new Vonebit_cpu();

extern "C" {
EMSCRIPTEN_KEEPALIVE void onebit_clock(CData clock) { onebit->clock = clock; }
EMSCRIPTEN_KEEPALIVE void onebit_reset(CData reset) { onebit->reset = reset; }
EMSCRIPTEN_KEEPALIVE void onebit_data(CData data) { onebit->data = data; }
EMSCRIPTEN_KEEPALIVE CData onebit_ip() { return onebit->addr; }
EMSCRIPTEN_KEEPALIVE CData onebit_a() { return onebit->A; }
EMSCRIPTEN_KEEPALIVE void onebit_eval() { onebit->eval(); }

EMSCRIPTEN_KEEPALIVE CData onebit_next_a() {
  return onebit->rootp->onebit_cpu__DOT__next_a;
}
EMSCRIPTEN_KEEPALIVE CData onebit_next_ip() {
  return onebit->rootp->onebit_cpu__DOT__next_ip;
}
}
