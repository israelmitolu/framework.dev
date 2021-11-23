import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../../sprinkles/sprinkles.css"
import { pxToRem } from "../../../util/style-utils"
import { vars } from "../../../themes/themes.css"

export const cellStyle = style([
	sprinkles({
		border: "tableCell",
		paddingX: 24,
		paddingY: 20,
	}),
	{
		minWidth: "max-content",
		verticalAlign: "middle",
	},
])

export const cellTHButtonStyle = style([
	sprinkles({
		paddingRight: 12,
	}),
	{
		position: "relative",
		selectors: {
			"&:before,&:after": {
				position: "absolute",
				content: "",
				right: pxToRem(-10),
				width: 0,
				height: 0,
				border: "solid 5px transparent",
				background: "transparent",
			},
			"&:before": {
				borderBottom: `solid 7px ${vars.palette.neutral80}`,
				borderTopWidth: 0,
				top: "calc(50% - 9px)",
			},
			"&:after": {
				borderTop: `solid 7px ${vars.palette.neutral80}`,
				borderBottomWidth: 0,
				bottom: "calc(50% - 9px)",
			},
			[`${cellStyle}[aria-sort="ascending"] &:before`]: {
				borderBottom: `solid 7px ${vars.palette.neutral40}`,
				borderTopWidth: 0,
				top: 0,
			},
			[`${cellStyle}[aria-sort="ascending"] &:after`]: {
				borderTop: `solid 7px transparent`,
				borderBottomWidth: 0,
				bottom: 0,
			},
			[`${cellStyle}[aria-sort="descending"] &:before`]: {
				borderBottom: `solid 7px transparent`,
				borderTopWidth: 0,
				top: 0,
			},
			[`${cellStyle}[aria-sort="descending"] &:after`]: {
				borderTop: `solid 7px ${vars.palette.neutral40}`,
				borderBottomWidth: 0,
				bottom: 0,
			},
		},
	},
])

export const cellContentsStyle = style([
	sprinkles({
		display: "grid",
		gap: 12,
	}),
	{
		gridAutoFlow: "column",
		placeItems: "center",
	},
])