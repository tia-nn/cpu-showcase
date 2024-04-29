import * as React from "react"

/**
 * @param {object} props
 * @param {boolean} props.checked
 * @param {string} props.label
 * @param {import("react").ChangeEventHandler | undefined} props.onChange
 * @param {string} props.className
 */
export function ToggleWithLED(props) {
    return <label class={"inline-flex flex-col items-center cursor-pointer " + (props.className || '')}>
        <input type="checkbox" value="" class="sr-only peer"
            checked={props.checked}
            onChange={props.onChange}
        />
        <div class="relative w-6 h-6 m-1 bg-gray-700 rounded-full peer-checked:bg-red-600"></div>
        <div class="
        relative w-7 h-12 peer

        bg-gray-700

        after:content-['']
            peer-checked:after:-translate-y-full
            peer-checked:after:border-white
            after:absolute
            after:top-6
            after:start-1
            after:bg-white
            after:border-gray-300
            after:h-5
            after:w-5
            after:transition-all
            after:duration-100
        "></div>
        {props.label}
    </label>
}
