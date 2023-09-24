import { useEffect, useState } from "react"

export const useKeyPress = (keyTarget: any) => {
    const [isKeyPressed, setKeyPressed] = useState(false);

    const downHandler = ({ key }: any) => {
        if (key === keyTarget) setKeyPressed(true);
    }
    const upHandler = ({ key }: any) => {
        if (key === keyTarget) setKeyPressed(false);
    }


    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.addEventListener("keydown", downHandler);
            window.addEventListener("keyup", upHandler);
        }

    }, [])

    return isKeyPressed;
}