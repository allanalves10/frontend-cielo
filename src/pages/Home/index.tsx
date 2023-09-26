import { useEffect } from "react"
import Api from "../../services/Api"

export function Home() {
    useEffect(() => {
        (async() => {
            try {
                const { data } = await Api.get('/items')
                console.log(data)
            } catch (err) { 
                console.error(err);
            }
        })()
    }, [])

    return(
        <h1>Home</h1>
    )
}