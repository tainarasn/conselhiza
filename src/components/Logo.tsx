import { Box } from "@mui/material"
import React from "react"

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
    const title_style = {
        fontFamily: "Teko",
        fontSize: "9vw",
        background: "linear-gradient(#37658C, #9FC7D5,  #E9DDBF,#D9C9B3)",
        WebkitBackgroundClip: "text",
        backgroundPosition: "0% 100%",
        color: "transparent",
        margin: 0,
        height: "14vw",
    }

    return (
        <Box sx={{ flexDirection: "row", alignItems: "end", width: "100%", height: "30%" }}>
            <p style={{ ...title_style, margin: 0 }}>t</p>
            {/* <h1 style={{ fontFamily: "Lucidity" }}>ainara</h1> */}
            <p style={{ ...title_style }}>s</p>
            {/* <h1 style={{ fontFamily: "Lucidity" }}>ilva</h1> */}
            <p style={{ ...title_style }}>.</p>
        </Box>
    )
}
