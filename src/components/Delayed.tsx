import { useEffect, useState } from "react";

interface Props {
    children: React.ReactElement;
    delay: number;
}

const Delayed = ({ children, delay }: Props) => {
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShown(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return shown ? children : null;
};

export default Delayed;