import * as React from "react"

/**
 * @param {object} props
 * @param {boolean} props.checked
 * @param {string} props.label
 * @param {import("react").ChangeEventHandler | undefined} props.onChange
 * @param {string} props.className
 */
export function LED(props) {
    return <label class={"inline-flex flex-col items-center cursor-pointer " + (props.className || '')}>
        <input type="checkbox" value="" class="sr-only peer"
            checked={props.checked}
            onChange={props.onChange}
        />
        <div class="relative w-10 h-10 m-1 bg-gray-700 rounded-full peer-checked:bg-red-600"></div>
        {props.label}
    </label>
}
