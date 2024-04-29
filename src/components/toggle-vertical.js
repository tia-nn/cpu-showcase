import * as React from "react"

/**
 * @param {object} props
 * @param {boolean} props.checked
 * @param {string} props.label
 * @param {string} props.label0
 * @param {string} props.label1
 * @param {import("react").ChangeEventHandler | undefined} props.onChange
 * @param {string} props.className
 */
export function ToggleVertical(props) {
    return <label class={"flex flex-col items-center cursor-pointer " + (props.className || '')}>
        {props.label}
        <span className="flex items-center">
            <span className="mx-1">{props.label1}</span>
            <input type="checkbox" value="" class="sr-only peer"
                checked={props.checked}
                onChange={props.onChange}
            />
            <div class="
                relative w-12 h-7 peer

                bg-gray-700

                after:content-['']
                    peer-checked:after:-translate-x-full
                    peer-checked:after:border-white
                    after:absolute
                    after:top-1
                    after:start-6
                    after:bg-white
                    after:border-gray-300
                    after:h-5
                    after:w-5
                    after:transition-all
                    after:duration-100
        "></div>
            <span className="mx-1">{props.label0}</span>
        </span>
    </label>
}
