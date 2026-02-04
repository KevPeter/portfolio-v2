export const Button = ({className, size, children}) => {
    const baseClasses = "relative overflow-hidden rounded-sm font-medium bg-[#0f0f0e] text-[#faf9f5] hover:bg-[#3d3d3a] px-2 py-1"
    const classes = baseClasses;

    return (
        <button className={classes}>
            <span>{children}</span>
        </button>
    );

}