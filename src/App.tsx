import "./App.css"
import { Routes } from "./Routes"
import { Providers } from "./Providers"
import "@mantine/core/styles.css"
function App() {
    return (
        <Providers>
            <Routes />
        </Providers>
    )
}

export default App
