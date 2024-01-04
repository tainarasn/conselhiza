import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Box, SxProps, Tooltip } from "@mui/material"
import { fetchAdvice } from "../hooks/useAdvicesApi.ts"
import { Footer } from "../components/Footer.tsx"
import { Logo } from "../components/Logo.tsx"
import { WiCloudRefresh } from "react-icons/wi"

declare interface HomeProps {}
export const Home: React.FC<HomeProps> = () => {
    const [adviceCurrently, setAdviceCurrently] = useState()
    const [hasFetchedAdvice, setHasFetchedAdvice] = useState(false)

    const box_style: SxProps = {
        borderRadius: "0.3vw",
        bgcolor: "#fff",
        width: "max-content",
        position: "fixed",
        top: "0vw",
        right: "8vw",
    }
    const handleNew = () => {
        const fetchData = async () => {
            try {
                const advice = await fetchAdvice()
                setAdviceCurrently(advice.slip.advice)
                setHasFetchedAdvice(true)
            } catch (error) {
                console.error("Erro ao obter o conselho:", error)
            }
        }

        if (!hasFetchedAdvice) {
            fetchData()
        }
    }

    useEffect(() => {
        handleNew()
    }, [hasFetchedAdvice])

    return (
        <Box sx={{ width: "100%", height: "100%", justifyContent: "flex-end" }}>
            <Box sx={{ ...box_style, p: "1vw 1vw " }}>
                <Logo />
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    width: "30%",
                    height: "fit-content",
                    left: "33%",
                    top: "41%",
                    alignItems: "center",
                    gap: "2vw",
                }}
            >
                <Box sx={{ flexDirection: "column", alignItems: "center" }}>
                    <p style={{ color: "#37658C", fontFamily: "Josefin Sans", fontWeight: "bold", fontSize: "1.8vw" }}>
                        Conselhiza
                    </p>
                    <p
                        style={{
                            color: "#2b2b2b",
                            fontFamily: "Josefin Sans",
                            fontWeight: "300",
                            fontSize: "1.6vw",
                            textAlign: "center",
                        }}
                    >
                        {adviceCurrently}
                    </p>
                </Box>
                {/* <Tooltip title="New Advice">
                    <WiCloudRefresh
                        color="#37658C"
                        style={{ width: "2.9vw", height: "2.5vw", cursor: "pointer" }}
                        onClick={{ handleNew }}
                    />
                </Tooltip> */}
            </Box>
            <Footer />
        </Box>
    )
}
