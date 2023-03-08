import {createContext} from "react";

interface NumberContextType {
    num: number;
    setNum: (newNum: number)=>void;
}

const NumberContext = createContext<NumberContextType>({
    num: 0,
    setNum: ()=>{}
})

export default NumberContext