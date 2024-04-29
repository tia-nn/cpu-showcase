import * as React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { OneBitCPUImage } from "./onebitcpu-image"
import { ToggleWithLED } from "./toggle-with-led"
import { ToggleVertical } from "./toggle-vertical"
import { useMemo } from "react"
import { LED } from "./led"

/**
 * @typedef {object} OneBitCPU
 * @prop {(clock: Number) => undefined} onebit_clock
 * @prop {(reset: Number) => undefined} onebit_reset
 * @prop {(data: Number) => undefined} onebit_data
 * @prop {() => Number} onebit_ip
 * @prop {() => Number} onebit_next_ip
 * @prop {() => Number} onebit_a
 * @prop {() => Number} onebit_next_a
 * @prop {() => undefined} onebit_eval
 */

/**
 * @param {object} props
 * @param {OneBitCPU} props.cpu
 * @returns {JSX.Element}
 */
export function OneBitCPU({ cpu }) {
    const [clock, _setClock] = useState(0)
    const [reset, _setReset] = useState(1)
    const [rom, _setRom] = useState(0b01)

    useMemo(() => {
        cpu.onebit_reset(0)
        cpu.onebit_clock(0)
        cpu.onebit_eval()
        cpu.onebit_clock(1)
        cpu.onebit_eval()

        cpu.onebit_clock(clock)
        cpu.onebit_reset(reset)
        cpu.onebit_data((rom >> cpu.onebit_ip()) & 0b01)
        cpu.onebit_eval()
    }, [])

    const setClock = (n) => {
        cpu.onebit_clock(n)
        cpu.onebit_eval()
        cpu.onebit_data((rom >> cpu.onebit_ip()) & 0b01)
        cpu.onebit_eval()
        _setClock(n)
    }
    const setReset = (n) => {
        cpu.onebit_reset(n)
        cpu.onebit_eval()
        cpu.onebit_data((rom >> cpu.onebit_ip()) & 0b01)
        cpu.onebit_eval()
        _setReset(n)
    }
    const setRom = (n) => {
        cpu.onebit_data((n >> cpu.onebit_ip()) & 0b01)
        cpu.onebit_eval()
        _setRom(n)
    }

    const ip = cpu.onebit_ip();

    return (<div>
        <OneBitCPUImage
            reset={reset}
            a={cpu.onebit_a()}
            not_a={cpu.onebit_a() === 1 ? 0 : 1}
            next_a={cpu.onebit_next_a()}
            ip={ip}
            next_ip={cpu.onebit_next_ip()}
            data={(rom >> cpu.onebit_ip()) & 0b01}
        ></OneBitCPUImage>

        <div className="flex justify-center">
            <span className="flex items-center">
                <LED label="A" checked={cpu.onebit_a()}></LED>
            </span>
            <span className="w-10"></span>
            <ToggleWithLED className="mx-1 my-1" label="CLOCK" checked={clock} onChange={() => setClock(clock === 1 ? 0 : 1)}></ToggleWithLED>
            <ToggleWithLED className="mx-1 my-1" label="RESET" checked={reset} onChange={() => setReset(reset === 1 ? 0 : 1)}></ToggleWithLED>
            <span className="w-10"></span>
            <span className="flex flex-col">
                <span>ROM (Instruction)</span>
                <span className="m-auto"></span>
                <span className="flex items-center">
                    <span dangerouslySetInnerHTML={{ __html: ip == 0 ? '->&nbsp;' : '&nbsp;&nbsp;&nbsp;' }}></span>
                    0:
                    <ToggleVertical className="mx-1 my-1" label0="NOP" label1="NOT" checked={rom & 0b01} onChange={(ev) => {
                        const v = ev.target.checked ? 1 : 0
                        setRom((rom & 0b10) | v)
                    }}></ToggleVertical>
                </span>
                <span className="flex items-center">
                    <span dangerouslySetInnerHTML={{ __html: ip == 0 ? '&nbsp;&nbsp;&nbsp;' : '->&nbsp;' }}></span>
                    1:
                    <ToggleVertical className="mx-1 my-1" label0="NOP" label1="NOT" checked={rom >> 1} onChange={(ev) => {
                        const v = ev.target.checked ? 1 : 0
                        setRom((v << 1) | (rom & 0b01))
                    }}></ToggleVertical>
                </span>
                <span className="m-auto"></span>
            </span>

        </div>
    </div>)
}
