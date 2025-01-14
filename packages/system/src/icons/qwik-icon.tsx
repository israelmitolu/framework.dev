import classNames from "classnames"
import React from "react"
import { iconStyle } from "./icon.css"
import { IconProps } from "./shared-icon-types"

export const QwikIcon = React.forwardRef<SVGSVGElement, IconProps>(
	function QwikIcon({ className, size, ...props }, ref) {
		return (
			<svg
				className={classNames(className, iconStyle({ size }))}
				fill="none"
				width="256px"
				height="274px"
				viewBox="0 0 256 274"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid"
				ref={ref}
				{...props}
			>
				<title>Qwik</title>
				<defs>
					<linearGradient
						x1="22.3466703%"
						y1="49.544504%"
						x2="77.5167035%"
						y2="50.3881932%"
						id="qwikLinearGradient-1"
					>
						<stop stopColor="#ab7ef3" offset="0%"></stop>
						<stop stopColor="#ab7ef3" offset="12%"></stop>
						<stop stopColor="#ab7ef3" offset="100%"></stop>
					</linearGradient>
					<linearGradient
						x1="38.8735478%"
						y1="49.8446404%"
						x2="60.8793852%"
						y2="50.3848308%"
						id="qwikLinearGradient-2"
					>
						<stop stopColor="#ab7ef3" offset="0%"></stop>
						<stop stopColor="#ab7ef3" offset="74%"></stop>
						<stop stopColor="#ab7ef3" offset="100%"></stop>
					</linearGradient>
					<linearGradient
						x1="-0.00369266634%"
						y1="49.529363%"
						x2="100.122955%"
						y2="50.2226751%"
						id="qwikLinearGradient-3"
					>
						<stop stopColor="#ab7ef3" offset="0%"></stop>
						<stop stopColor="#ab7ef3" offset="23%"></stop>
						<stop stopColor="#ab7ef3" offset="60%"></stop>
						<stop stopColor="#ab7ef3" offset="100%"></stop>
					</linearGradient>
					<linearGradient
						x1="35.3999594%"
						y1="49.4594565%"
						x2="64.8953491%"
						y2="50.0846115%"
						id="qwikLinearGradient-4"
					>
						<stop stopColor="#18b6f7" offset="0%"></stop>
						<stop stopColor="#18b6f7" offset="100%"></stop>
					</linearGradient>
					<linearGradient
						x1="-0.243451404%"
						y1="49.3660536%"
						x2="100.41142%"
						y2="50.4669186%"
						id="qwikLinearGradient-5"
					>
						<stop stopColor="#18b6f7" offset="0%"></stop>
						<stop stopColor="#18b6f7" offset="17%"></stop>
						<stop stopColor="#18b6f7" offset="47%"></stop>
						<stop stopColor="#18b6f7" offset="63%"></stop>
						<stop stopColor="#18b6f7" offset="100%"></stop>
					</linearGradient>
					<linearGradient
						x1="-0.124634779%"
						y1="49.6273118%"
						x2="100.224751%"
						y2="50.1006469%"
						id="qwikLinearGradient-6"
					>
						<stop stopColor="#18b6f7" offset="0%"></stop>
						<stop stopColor="#18b6f7" offset="30%"></stop>
						<stop stopColor="#18b6f7" offset="60%"></stop>
						<stop stopColor="#18b6f7" offset="86%"></stop>
						<stop stopColor="#18b6f7" offset="100%"></stop>
					</linearGradient>
					<linearGradient
						x1="4.55652121%"
						y1="50.1842666%"
						x2="99.3543954%"
						y2="51.297514%"
						id="qwikLinearGradient-7"
					>
						<stop stopColor="#ab7ef3" offset="0%"></stop>
						<stop stopColor="#ab7ef3" offset="12%"></stop>
						<stop stopColor="#ab7ef3" offset="100%"></stop>
					</linearGradient>
				</defs>
				<g>
					<polygon
						fill="url(#qwikLinearGradient-1)"
						points="175.050684 236.85937 200.213062 221.788423 249.510531 134.858942 173.224125 223.955775"
					></polygon>
					<path
						d="M242.336691,80.4078804 L237.411112,71.0078458 L235.479128,67.3449214 L235.278084,67.541062 L209.461087,20.5261781 C202.983546,8.64986934 190.631597,1.23085399 177.009637,1.07394157 L151.935523,1.27988912 L188.150419,114.801121 L164.191854,138.132037 L173.116248,224.377478 L246.884699,140.35578 C256.890318,128.768779 258.854175,112.266005 251.805375,98.7102431 L242.339143,80.4078804 L242.336691,80.4078804 Z"
						fill="url(#qwikLinearGradient-2)"
					></path>
					<path
						d="M201.112856,72.2557898 L157.93252,1.3485383 L83.4113789,0.00252394874 C70.1645382,-0.149484958 57.8297509,6.57323154 50.879021,17.8709258 L7.00974088,101.74797 L41.4520171,68.4138873 L84.7010028,8.35565856 L182.594739,120.508811 L200.89465,101.882816 C209.291916,93.7405326 206.43562,82.325154 201.115308,72.2582416 L201.112856,72.2557898 Z"
						fill="url(#qwikLinearGradient-3)"
					></path>
					<path
						d="M97.7835758,95.2606217 L84.5220246,8.79452298 L11.3738676,96.8248424 C-0.953564436,108.759993 -3.52300531,127.48651 4.95516888,142.314734 L47.9344614,217.041822 C54.4880067,228.506236 66.6903991,235.618781 79.9593056,235.77079 L122.904274,236.261142 L71.4590656,119.606564 L97.7835758,95.2606217 Z"
						fill="url(#qwikLinearGradient-4)"
					></path>
					<path
						d="M173.226577,223.899385 L71.3806094,119.023046 L58.1852556,131.612816 C47.3730092,141.861159 47.0787984,158.944998 57.4570839,169.534135 L101.4465,235.917896 L172.096317,236.825046 L173.224125,223.899385 L173.226577,223.899385 Z"
						fill="url(#qwikLinearGradient-5)"
					></path>
					<polygon
						fill="url(#qwikLinearGradient-6)"
						points="101.583799 235.903185 173.876293 224.303925 221.58012 273.768113"
					></polygon>
					<path
						d="M173.111344,224.482903 L200.279259,221.025926 L224.375122,270.941238 C225.434281,273.000714 222.656441,274.917987 221.001505,273.243438 L173.111344,224.482903 Z"
						fill="url(#qwikLinearGradient-7)"
					></path>
					<polygon
						fill="#FFFFFF"
						points="182.70752 120.057688 84.6813888 8.60083421 97.1828955 94.5594193 71.1599513 118.780322 172.932366 224.151916 165.336824 138.247269 182.70752 120.055236"
					></polygon>
				</g>
			</svg>
		)
	}
)
