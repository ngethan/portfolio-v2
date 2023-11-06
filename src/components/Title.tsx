const Title = ({
    text,

    large,
}: {
    text: string;
    large?: boolean;
}) => {
    return (
        <h1 className="flex flex-row">
            {text
                .replace(" ", "\xa0")
                .split("")
                .map((c: string, i: number) => {
                    return (
                        <span
                            className={
                                large
                                    ? "inline align-top duration-300 hover:text-primary-500"
                                    : "mb-[40px] inline-block border-b-[2px] border-primary-500 align-top font-mono text-4xl duration-300 hover:text-primary-500"
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
