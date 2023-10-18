const Title = ({ text, large }: { text: string; large?: boolean }) => {
    return (
        <h1>
            {text
                .replace(" ", "\xa0")
                .split("")
                .map((c: string, i: number) => {
                    return (
                        <span
                            className={
                                large
                                    ? "hover:text-primary-500 duration-300 inline align-top"
                                    : "hover:text-primary-500 border-primary-500 text-4xl mb-[40px] duration-300 inline-block align-top border-b-[2px]"
                            }
                            key={i}
                        >
                            {c}
                        </span>
                    );
                })}
        </h1>
    );
};

export default Title;
