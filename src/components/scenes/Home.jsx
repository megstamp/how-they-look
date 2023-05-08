import { useEffect } from "react";
export default function Home ({ })

useEffect ( () ) => {
    fetch ("https://how-they-look-api.web.app")
    .then(resp => resp.json())
    .then()
    .catch(alert)
}, []);