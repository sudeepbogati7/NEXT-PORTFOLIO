import React from "react";

// Component for the first SVG
export const SvgComponent1 = () => (
    <svg viewBox="0 0 62 64" className="imageBox" width="320">
        <defs>
            <pattern id="img1" patternUnits="objectBoundingBox" width="100%" height="100%">
                <image
                    href="/profile.webp"
                    x="-50"
                    y="0"
                    width="320"
                    height="320"
                    preserveAspectRatio="xMidYMid slice"
                />
            </pattern>
        </defs>
        <g id="image3" className="image">
            <path d="M30.217 4.802l26.669 26.669-26.669 26.669-26.669-26.669 26.669-26.669z" />
        </g>
        <g className="lines2">
            <path d="M14.42 17.261l-0.387-0.391 16.166-16.145 7.286 7.237-0.387 0.391-6.895-6.85-15.783 15.758z" />
            <path d="M30.22 61.538l-9.715-9.715 0.387-0.391 9.328 9.328 7.772-7.772 0.387 0.387-8.159 8.163z" />
            <path d="M53.326 38.193l-0.387-0.391 6.442-6.377-6.447-6.825 0.399-0.379 6.813 7.22-6.821 6.751z" />
            <path d="M39.749 51.724l-0.194-0.194 0.49-0.494 0.194 0.194zM41.013 50.448l-0.194-0.194 0.774-0.782 0.194 0.194zM42.557 48.888l-0.194-0.194 0.774-0.782 0.194 0.194zM44.101 47.328l-0.194-0.194 0.774-0.782 0.194 0.194zM45.648 45.768l-0.194-0.194 0.774-0.782 0.194 0.194zM47.192 44.208l-0.194-0.194 0.753-0.79 0.194 0.194zM48.736 42.647l-0.194-0.194 0.774-0.782 0.194 0.194zM50.28 41.087l-0.194-0.194 0.774-0.782 0.194 0.194z" />
            <path d="M10.143 41.096l-0.778-0.774 0.194-0.194 0.778 0.774zM8.583 39.548l-0.762-0.774 0.194-0.194 0.778 0.774zM7.023 38l-0.778-0.774 0.194-0.194 0.778 0.774zM5.463 36.452l-0.778-0.774 0.194-0.194 0.778 0.774zM3.907 34.9l-0.778-0.774 0.193-0.194 0.795 0.774zM2.351 33.344l-0.782-0.766 0.194-0.194 0.778 0.774zM0.79 31.804l-0.79-0.782 0.194-0.185 0.091 0.099 0.687 0.683zM1.202 30.277l-0.189-0.198 0.799-0.753 0.189 0.198zM2.799 28.766l-0.189-0.198 0.799-0.753 0.189 0.198zM4.396 27.256l-0.189-0.198 0.774-0.753 0.189 0.198zM5.994 25.745l-0.231-0.198 0.823-0.753 0.189 0.198zM7.591 24.234l-0.189-0.198 0.103-0.099 0.189 0.198z" />
        </g>
        <g className="smallobjects">
            <path d="M58.755 21.414c0 0.396-0.321 0.716-0.716 0.716s-0.716-0.321-0.716-0.716c0-0.396 0.321-0.716 0.716-0.716s0.716 0.321 0.716 0.716z" />
            <path d="M19.768 5.331c0 0.396-0.321 0.716-0.716 0.716s-0.716-0.321-0.716-0.716c0-0.396 0.321-0.716 0.716-0.716s0.716 0.321 0.716 0.716z" />
            <path d="M4.055 42.927c0 0.396-0.321 0.716-0.716 0.716s-0.716-0.321-0.716-0.716c0-0.396 0.321-0.716 0.716-0.716s0.716 0.321 0.716 0.716z" />
            <path d="M48.090 2.145c0 0.396-0.321 0.716-0.716 0.716s-0.716-0.321-0.716-0.716c0-0.396 0.321-0.716 0.716-0.716s0.716 0.321 0.716 0.716z" />
        </g>
        <g className="objects">
            <path d="M2.593 17.063l8.772-5.063v10.131l-8.772-5.067z" />
            <path d="M47.143 52.169l4.421-3.874 0.572 2.886 0.572 2.882-5.566-1.894z" />
            <path d="M10.328 43.512l10.555-3.046-1.321 5.331-1.317 5.331-7.916-7.616z" />
            <path d="M48.843 8.785l5.529-1.461-1.498 5.516-2.013-2.029-2.017-2.025z" />
            <path d="M42.668 6.961l12.049 12.004-16.417 4.433 2.182-8.217 2.186-8.221z" />
        </g>
        <g className="extraobjects">
            <path d="M42.697 21.287l-3.133 0.844 1.745-6.566 1.387 5.722z" />
        </g>
    </svg>
);

// Component for the second SVG
const SvgComponent2 = () => (
    <svg viewBox="0 0 60 64" className="imageBox" width="320">
        <defs>
            <pattern id="img1" patternUnits="objectBoundingBox" width="100%" height="100%">
                <image
                    href="http://www.boogdesign.com/examples/svg/daisy-grass-repeating-background.jpg"
                    x="-60"
                    y="0"
                    width="320"
                    height="225"
                    preserveAspectRatio="xMidYMid"
                />
            </pattern>
        </defs>
        <g id="image3" className="image">
            <path d="M39.843 6.16l-14.149 25.875 28.247-0.090-14.098-25.785z" />
            <path d="M25.735 0.231l-7.657 13.998 15.284-0.040-7.627-13.958z" />
            <path d="M55.067 32.025l5.235-9.576-10.441 0.030 5.205 9.546z" />
            <path d="M24.318 31.925l9.104-16.651-18.168 0.060 9.064 16.59z" />
            <path d="M19.183 9.576l5.235-9.576-10.451 0.030 5.215 9.546z" />
            <path d="M33.814 49.721l9.094-16.651-18.158 0.060 9.064 16.59z" />
            <path d="M43.28 34.638l-8.29 15.174 16.56-0.060-8.27-15.113z" />
            <path d="M13.485 15.354l-13.485 24.659 26.91-0.090-13.425-24.569z" />
            <path d="M16.651 60.232l10.481-19.183-20.921 0.070 10.441 19.113z" />
            <path d="M27.825 42.174l-5.235 9.576 10.451-0.040-5.215-9.536z" />
            <path d="M46.505 60.232l5.235-9.576-10.451 0.030 5.215 9.546z" />
            <path d="M42.144 54.434l-5.235 9.576 10.451-0.040-5.215-9.536z" />
        </g>
    </svg>
);
