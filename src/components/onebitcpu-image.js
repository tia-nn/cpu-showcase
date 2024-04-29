import React, { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { DrawIoEmbed } from "react-drawio";

/**
 * @param {object} props
 * @param {number} props.reset
 * @param {number} props.a
 * @param {number} props.not_a
 * @param {number} props.next_a
 * @param {number} props.ip
 * @param {number} props.next_ip
 * @param {number} props.data
 * @returns {JSX.Element}
 */
export function OneBitCPUImage(props) {
    /** @type {import("react").MutableRefObject<import("react-drawio").DrawIoEmbedRef>} */
    const drawioRef = useRef()
    const [wrapperStyle, setWrapperStyle] = useState({})

    const handleLoad = useCallback((ev) => {
        // TODO: レスポンシブ対応
        setWrapperStyle({
            // スクロールバー対策で 1px 足す
            height: ev.page.height + 1 + 'px',
        })
    })

    if (drawioRef.current) {
        drawioRef.current.merge({
            xml: xml(props),
        })
    }

    return (
        <div style={{ ...wrapperStyle, width: '100%' }}>
            <DrawIoEmbed
                urlParameters={{
                    modified: false,
                    saveAndExit: false,
                    noSaveBtn: true,
                    noExitBtn: true,
                    chrome: false,  // read only
                    returnbounds: true,
                    spin: true,
                }}
                xml={initialXML}
                ref={drawioRef}
                onLoad={handleLoad}
            ></DrawIoEmbed>
        </div>
    )
}

const initialXML = xml({ ip: '', next_ip: '', reset: '', next_a: '', a: '', not_a: '', data: '' })

function xml(params) {
    let vars = ''
    for (let key in params) {
        vars += key + '="' + params[key] + '" '
    }
    return `<mxfile host="app.diagrams.net" modified="2024-04-29T19:34:23.011Z"
    agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    etag="gBVAYpKN8fOb1obddeN8" version="24.3.1" type="device">
    <diagram name="ページ1" id="GioqARGYyL1sx10F9N2v">
        <mxGraphModel dx="942" dy="557" grid="1" gridSize="10" guides="1" tooltips="1" connect="1"
            arrows="1" fold="1" page="1" pageScale="1" pageWidth="1160" pageHeight="400" math="0"
            shadow="0">
            <root>
                <object label="" ${vars} id="0">
                    <mxCell />
                </object>
                <mxCell id="1" parent="0" />
                <mxCell id="PtS226W7eZGDzv1y1cwP-38"
                    style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-15" target="PtS226W7eZGDzv1y1cwP-35"
                    edge="1">
                    <mxGeometry relative="1" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-15" value=""
                    style="verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.inverter_2"
                    parent="1" vertex="1">
                    <mxGeometry x="760" y="220" width="100" height="60" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-29"
                    style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-3" target="PtS226W7eZGDzv1y1cwP-15"
                    edge="1">
                    <mxGeometry relative="1" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-30" value=""
                    style="edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-3" target="PtS226W7eZGDzv1y1cwP-34"
                    edge="1">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="750" y="160" as="sourcePoint" />
                        <mxPoint x="850" y="200" as="targetPoint" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-37" value="" style="group" parent="1" vertex="1"
                    connectable="0">
                    <mxGeometry x="980" y="140" width="80" height="120" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-28" value=""
                    style="shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;html=1;fixedSize=1;rotation=90;"
                    parent="PtS226W7eZGDzv1y1cwP-37" vertex="1">
                    <mxGeometry x="-20" y="20" width="120" height="80" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-34" value="&amp;nbsp;&amp;nbsp;"
                    style="text;strokeColor=none;align=center;fillColor=none;verticalAlign=middle;rounded=0;horizontal=1;textShadow=0;labelBorderColor=none;fontSize=25;html=1;"
                    parent="PtS226W7eZGDzv1y1cwP-37" vertex="1">
                    <mxGeometry y="20" width="40" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-35" value="&amp;nbsp;&amp;nbsp;"
                    style="text;strokeColor=none;align=center;fillColor=none;verticalAlign=middle;rounded=0;horizontal=1;textShadow=0;labelBorderColor=none;fontSize=25;html=1;"
                    parent="PtS226W7eZGDzv1y1cwP-37" vertex="1">
                    <mxGeometry y="60" width="40" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-36" value="&amp;nbsp;&amp;nbsp;"
                    style="text;strokeColor=none;align=center;fillColor=none;verticalAlign=middle;rounded=0;horizontal=1;textShadow=0;labelBorderColor=none;fontSize=25;html=1;"
                    parent="PtS226W7eZGDzv1y1cwP-37" vertex="1">
                    <mxGeometry x="40" y="40" width="40" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-44" value="" style="group" parent="1" vertex="1"
                    connectable="0">
                    <mxGeometry x="840" y="60" width="100" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-43" value=""
                    style="html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=20.12;notch=0;"
                    parent="PtS226W7eZGDzv1y1cwP-44" vertex="1">
                    <mxGeometry width="100" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-40" value="DATA"
                    style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;"
                    parent="PtS226W7eZGDzv1y1cwP-44" vertex="1">
                    <mxGeometry width="80" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-45" value=""
                    style="edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-43" target="PtS226W7eZGDzv1y1cwP-28"
                    edge="1">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="890" y="100" as="sourcePoint" />
                        <mxPoint x="970" y="100" as="targetPoint" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-47" value="" style="group" parent="1" vertex="1"
                    connectable="0">
                    <mxGeometry x="340" y="160" width="100" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-48" value=""
                    style="html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=20.12;notch=0;rotation=-180;"
                    parent="PtS226W7eZGDzv1y1cwP-47" vertex="1">
                    <mxGeometry width="100" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-49" value="ADDR"
                    style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;"
                    parent="PtS226W7eZGDzv1y1cwP-47" vertex="1">
                    <mxGeometry x="20" width="80" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-50" value=""
                    style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-9" target="PtS226W7eZGDzv1y1cwP-48"
                    edge="1">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="210" y="130" as="sourcePoint" />
                        <mxPoint x="290" y="130" as="targetPoint" />
                        <Array as="points" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-51" value="" style="group" parent="1" vertex="1"
                    connectable="0">
                    <mxGeometry x="20" y="340" width="120" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-52" value=""
                    style="html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=20.12;notch=0;"
                    parent="PtS226W7eZGDzv1y1cwP-51" vertex="1">
                    <mxGeometry width="120" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-53" value="RESET"
                    style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;"
                    parent="PtS226W7eZGDzv1y1cwP-51" vertex="1">
                    <mxGeometry width="100" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-54" value=""
                    style="edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-52" target="PtS226W7eZGDzv1y1cwP-4"
                    edge="1">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="220" y="340" as="sourcePoint" />
                        <mxPoint x="420" y="340" as="targetPoint" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-55"
                    style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-52" target="PtS226W7eZGDzv1y1cwP-10"
                    edge="1">
                    <mxGeometry relative="1" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-56" value="" style="group" parent="1" vertex="1"
                    connectable="0">
                    <mxGeometry x="800" y="120" width="100" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-57" value=""
                    style="html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=20.12;notch=0;rotation=-180;"
                    parent="PtS226W7eZGDzv1y1cwP-56" vertex="1">
                    <mxGeometry width="100" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-58" value="A"
                    style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;"
                    parent="PtS226W7eZGDzv1y1cwP-56" vertex="1">
                    <mxGeometry x="20" width="80" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-61"
                    style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-3" target="PtS226W7eZGDzv1y1cwP-57"
                    edge="1">
                    <mxGeometry relative="1" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-64" value=""
                    style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;"
                    parent="1" edge="1">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="1140" y="20" as="sourcePoint" />
                        <mxPoint x="480" y="20" as="targetPoint" />
                        <Array as="points" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-65" value=""
                    style="edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-36" edge="1">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="1090" y="200" as="sourcePoint" />
                        <mxPoint x="1140" y="20" as="targetPoint" />
                        <Array as="points">
                            <mxPoint x="1140" y="200" />
                            <mxPoint x="1140" y="40" />
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-66" value=""
                    style="edgeStyle=elbowEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;"
                    parent="1" target="PtS226W7eZGDzv1y1cwP-2" edge="1">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="480" y="20" as="sourcePoint" />
                        <mxPoint x="560" y="120" as="targetPoint" />
                        <Array as="points">
                            <mxPoint x="480" y="110" />
                            <mxPoint x="490" y="100" />
                            <mxPoint x="150" y="110" />
                        </Array>
                    </mxGeometry>
                </mxCell>
                <object label="%next_ip%" data-id="next_ip" placeholders="1"
                    id="PtS226W7eZGDzv1y1cwP-68">
                    <mxCell
                        style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;fontColor=#FF6666;"
                        parent="1" vertex="1">
                        <mxGeometry x="100" y="140" width="80" height="40" as="geometry" />
                    </mxCell>
                </object>
                <object label="%ip%" data-id="ip" placeholders="1" id="PtS226W7eZGDzv1y1cwP-69">
                    <mxCell
                        style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;fontColor=#FF6666;"
                        parent="1" vertex="1">
                        <mxGeometry x="260" y="180" width="80" height="40" as="geometry" />
                    </mxCell>
                </object>
                <object label="%next_a%" data-id="next_a" placeholders="1"
                    id="PtS226W7eZGDzv1y1cwP-71">
                    <mxCell
                        style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;fontColor=#FF6666;"
                        parent="1" vertex="1">
                        <mxGeometry x="480" y="140" width="80" height="40" as="geometry" />
                    </mxCell>
                </object>
                <mxCell id="PtS226W7eZGDzv1y1cwP-74" value="" style="group" parent="1" vertex="1"
                    connectable="0">
                    <mxGeometry x="170" y="40" width="100" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-72" value=""
                    style="html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=10;notch=10;rotation=-180;"
                    parent="PtS226W7eZGDzv1y1cwP-74" vertex="1">
                    <mxGeometry width="100" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-73" value="+1"
                    style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;"
                    parent="PtS226W7eZGDzv1y1cwP-74" vertex="1">
                    <mxGeometry x="10" width="80" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-76"
                    style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-9" target="PtS226W7eZGDzv1y1cwP-73"
                    edge="1">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="300" y="180" />
                            <mxPoint x="300" y="60" />
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-78"
                    style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;"
                    parent="1" source="PtS226W7eZGDzv1y1cwP-72" target="PtS226W7eZGDzv1y1cwP-8"
                    edge="1">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="100" y="60" />
                            <mxPoint x="100" y="180" />
                        </Array>
                    </mxGeometry>
                </mxCell>
                <object label="%reset%" data-id="reset" placeholders="1"
                    id="PtS226W7eZGDzv1y1cwP-79">
                    <mxCell
                        style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;fontColor=#FF6666;"
                        parent="1" vertex="1">
                        <mxGeometry x="140" y="320" width="80" height="40" as="geometry" />
                    </mxCell>
                </object>
                <object label="%a%" data-id="a" placeholders="1" id="PtS226W7eZGDzv1y1cwP-80">
                    <mxCell
                        style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;fontColor=#FF6666;"
                        parent="1" vertex="1">
                        <mxGeometry x="640" y="140" width="80" height="40" as="geometry" />
                    </mxCell>
                </object>
                <object label="%not_a%" data-id="not_a" placeholders="1"
                    id="PtS226W7eZGDzv1y1cwP-82">
                    <mxCell
                        style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;fontColor=#FF6666;"
                        parent="1" vertex="1">
                        <mxGeometry x="840" y="210" width="80" height="40" as="geometry" />
                    </mxCell>
                </object>
                <object label="%next_a%" data-id="next_a" placeholders="1"
                    id="PtS226W7eZGDzv1y1cwP-83">
                    <mxCell
                        style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;fontColor=#FF6666;"
                        parent="1" vertex="1">
                        <mxGeometry x="1060" y="160" width="80" height="40" as="geometry" />
                    </mxCell>
                </object>
                <object label="%data%" data-id="data" placeholders="1" id="PtS226W7eZGDzv1y1cwP-84">
                    <mxCell
                        style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;fontColor=#FF6666;"
                        parent="1" vertex="1">
                        <mxGeometry x="940" y="40" width="80" height="40" as="geometry" />
                    </mxCell>
                </object>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-15" value="" style="group" vertex="1"
                    connectable="0" parent="1">
                    <mxGeometry x="180" y="120" width="80" height="160" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-6" value="" style="group"
                    parent="ouSIH6S6w9UxhhlXyrai-15" vertex="1" connectable="0">
                    <mxGeometry y="40" width="80" height="120" as="geometry" />
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-5" value="" style="group" vertex="1"
                    connectable="0" parent="PtS226W7eZGDzv1y1cwP-6">
                    <mxGeometry width="80" height="120" as="geometry" />
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-14" value="" style="group" vertex="1"
                    connectable="0" parent="ouSIH6S6w9UxhhlXyrai-5">
                    <mxGeometry width="80" height="120" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-7" value=""
                    style="rounded=0;whiteSpace=wrap;html=1;horizontal=0;verticalAlign=bottom;align=center;"
                    parent="ouSIH6S6w9UxhhlXyrai-14" vertex="1">
                    <mxGeometry width="80" height="120" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-8" value="D"
                    style="text;strokeColor=none;align=center;fillColor=none;verticalAlign=middle;rounded=0;horizontal=1;textShadow=0;labelBorderColor=none;fontSize=25;html=1;"
                    parent="ouSIH6S6w9UxhhlXyrai-14" vertex="1">
                    <mxGeometry width="40" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-9" value="Q"
                    style="text;strokeColor=none;align=center;fillColor=none;verticalAlign=middle;rounded=0;horizontal=1;textShadow=0;labelBorderColor=none;fontSize=25;html=1;"
                    parent="ouSIH6S6w9UxhhlXyrai-14" vertex="1">
                    <mxGeometry x="40" width="40" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-10" value="reset"
                    style="text;strokeColor=none;align=center;fillColor=none;verticalAlign=middle;rounded=0;fontSize=25;html=1;fontStyle=0"
                    parent="ouSIH6S6w9UxhhlXyrai-14" vertex="1">
                    <mxGeometry y="80" width="80" height="40" as="geometry" />
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-2" value=""
                    style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;endArrow=none;endFill=0;"
                    edge="1" parent="ouSIH6S6w9UxhhlXyrai-14">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="30" as="sourcePoint" />
                        <mxPoint x="40" y="10" as="targetPoint" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-3" value=""
                    style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;endArrow=none;endFill=0;"
                    edge="1" parent="ouSIH6S6w9UxhhlXyrai-14">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="40" y="10" as="sourcePoint" />
                        <mxPoint x="50" as="targetPoint" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-12" value=""
                    style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;endArrow=none;endFill=0;"
                    edge="1" parent="ouSIH6S6w9UxhhlXyrai-14">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="10" y="90" as="sourcePoint" />
                        <mxPoint x="70" y="90" as="targetPoint" />
                        <Array as="points" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-12" value="IP"
                    style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;"
                    parent="ouSIH6S6w9UxhhlXyrai-15" vertex="1">
                    <mxGeometry width="80" height="40" as="geometry" />
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-18" value="" style="group" vertex="1"
                    connectable="0" parent="1">
                    <mxGeometry x="560" y="120" width="80" height="160" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-5" value="" style="group"
                    parent="ouSIH6S6w9UxhhlXyrai-18" vertex="1" connectable="0">
                    <mxGeometry y="40" width="80" height="120" as="geometry" />
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-9" value="" style="group" vertex="1"
                    connectable="0" parent="PtS226W7eZGDzv1y1cwP-5">
                    <mxGeometry width="80" height="120" as="geometry" />
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-17" value="" style="group" vertex="1"
                    connectable="0" parent="ouSIH6S6w9UxhhlXyrai-9">
                    <mxGeometry width="80" height="120" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-1" value=""
                    style="rounded=0;whiteSpace=wrap;html=1;horizontal=0;verticalAlign=bottom;"
                    parent="ouSIH6S6w9UxhhlXyrai-17" vertex="1">
                    <mxGeometry width="80" height="120" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-2" value="D"
                    style="text;strokeColor=none;align=center;fillColor=none;verticalAlign=middle;rounded=0;horizontal=1;textShadow=0;labelBorderColor=none;fontSize=25;html=1;"
                    parent="ouSIH6S6w9UxhhlXyrai-17" vertex="1">
                    <mxGeometry width="40" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-3" value="Q"
                    style="text;strokeColor=none;align=center;fillColor=none;verticalAlign=middle;rounded=0;horizontal=1;textShadow=0;labelBorderColor=none;fontSize=25;html=1;"
                    parent="ouSIH6S6w9UxhhlXyrai-17" vertex="1">
                    <mxGeometry x="40" width="40" height="40" as="geometry" />
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-4" value="reset"
                    style="text;strokeColor=none;align=center;fillColor=none;verticalAlign=middle;rounded=0;fontSize=25;html=1;"
                    parent="ouSIH6S6w9UxhhlXyrai-17" vertex="1">
                    <mxGeometry y="80" width="80" height="40" as="geometry" />
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-7" value=""
                    style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;endArrow=none;endFill=0;"
                    edge="1" parent="ouSIH6S6w9UxhhlXyrai-17">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="30" as="sourcePoint" />
                        <mxPoint x="40" y="10" as="targetPoint" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-8" value=""
                    style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;endArrow=none;endFill=0;"
                    edge="1" parent="ouSIH6S6w9UxhhlXyrai-17">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="50" as="sourcePoint" />
                        <mxPoint x="40" y="10" as="targetPoint" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="ouSIH6S6w9UxhhlXyrai-13" value=""
                    style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;endArrow=none;endFill=0;"
                    edge="1" parent="ouSIH6S6w9UxhhlXyrai-17">
                    <mxGeometry width="80" relative="1" as="geometry">
                        <mxPoint x="10" y="90" as="sourcePoint" />
                        <mxPoint x="70" y="90" as="targetPoint" />
                        <Array as="points" />
                    </mxGeometry>
                </mxCell>
                <mxCell id="PtS226W7eZGDzv1y1cwP-13" value="A"
                    style="text;strokeColor=none;align=center;fillColor=none;html=1;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=25;"
                    parent="ouSIH6S6w9UxhhlXyrai-18" vertex="1">
                    <mxGeometry width="80" height="40" as="geometry" />
                </mxCell>
            </root>
        </mxGraphModel>
    </diagram>
</mxfile>
`
}
