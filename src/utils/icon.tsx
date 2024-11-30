import React from "react"

export function Icon({icon, circle, click}: {icon: Spicetify.Icon, circle?: boolean, click: () => void}) {
    return <button className={(circle ? "circle " : "") + "icon-wrapper"} onClick={click}>
        <svg className="icon" width={16} height={16}  viewBox="0 0 16 16" dangerouslySetInnerHTML={{__html: Spicetify.SVGIcons[icon] + "</g>"}}></svg>
    </button>
}