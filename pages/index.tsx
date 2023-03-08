import Button from "@/components/Button";
import useDevide3 from "@/hooks/devide3Hook";

export default function Home() {

    const {num, setNum, isDividableBy3} = useDevide3(0)

    console.log(isDividableBy3)
    return (
        <div>
            <h1 className={"text-4xl text-center my-10"}>Hello World!</h1>
            <Button text={"FooBar"} onClick={() => {
                setNum(num+1)
            }}/>
            <p>{num}</p>
        </div>
    )
}