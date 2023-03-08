import {useEffect, useState} from "react";


export default function useDevide3(original: number) {
    const [num, setNum] = useState(original)
    const [isDividableBy3, setIsdividableBy3] = useState(original % 3 == 0)

    useEffect(() => {
        setIsdividableBy3(num % 3 == 0)
    }, [num])


    return {num, setNum, isDividableBy3}
}