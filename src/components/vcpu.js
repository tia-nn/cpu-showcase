import * as React from "react"
import { Script, withPrefix } from "gatsby"
import { useState } from "react"
import { OneBitCPU } from "./onebitcpu";

/**
 * @typedef {object} VCpuInterface
 * @property {() => Number} onebit_Q
 */

/**
 * @param {object} props
 * @property {int} test
 */
export function VCpu(props) {
    const [isLoaded, setLoaded] = useState(false);

    const contents = isLoaded ? (
        <>
            <h1 className="text-3xl font-medium">1-Bit CPU <span className="text-sm">
                (reference: <a href="https://book.mynavi.jp/ec/products/detail/id=22065" target="_blank">渡波 郁.CPUの創りかた.毎日コミュニケーションズ,2003,320p.</a>)
            </span></h1>
            <OneBitCPU cpu={window.wasmExports}></OneBitCPU>
        </>
    ) : (
        <p>loading...</p>
    )

    return (
        <>
            <Script src={withPrefix("/main.js")} onLoad={() => { window.Module.onRuntimeInitialized = () => setLoaded(true); }}></Script>
            {contents}
        </>
    )
}
