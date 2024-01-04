// interface AdviceForm {
//     slip: {
//         id: number
//         advice: string
//     }
// }

export async function fetchAdvice(): Promise<any> {
    try {
        const response = await fetch("https://api.adviceslip.com/advice")
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados da API")
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error("Ocorreu um erro:", error)
        throw error
    }
}

export async function handleAPIData() {
    try {
        const apiData = await fetchAdvice()
        // Faça algo com os dados recebidos da API
        console.log(apiData.slip.advice)
        return apiData.slip
    } catch (error) {
        // Lidar com erros, se houver
        console.error("Erro ao processar os dados:", error)
        throw error
    }
}
