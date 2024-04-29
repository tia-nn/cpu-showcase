import * as React from "react"
import { VCpu } from "../components/vcpu"

const IndexPage = () => {
    return (
        <main>

            <nav class="w-full p-2 mb-2 shadow-md">
                <div class="flex justify-between max-w-5xl mx-auto">
                    <div class="">
                        <h1 class="text-4xl font-semibold"> CPU Showcase</h1>
                    </div>
                </div>
            </nav>

            <div class="container mx-auto">
                <VCpu></VCpu>
            </div>

        </main>
    )
}

export default IndexPage
