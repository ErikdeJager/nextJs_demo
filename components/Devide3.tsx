import {useContext, useEffect} from "react";
import NumberContext from "@/contexts/NumberContext";

interface props {
}

export default function Devide3({}: props) {

    const {num} = useContext(NumberContext)

    useEffect(() => {
        console.log("Num changed")
    }, [num])

    return (
        <>
            {
                num % 3 == 0
                    ? <p>True</p>
                    : <p>False</p>
            }
        </>
    )
}