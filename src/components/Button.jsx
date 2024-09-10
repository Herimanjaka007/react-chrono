const Button = ({ buttonValue, bsColor, onClick, isDisable=false }) => {
    return <button
        className={"btn btn-" + bsColor}
        onClick={onClick}
        disabled={isDisable}
    >
        {buttonValue}
    </button>
}

export default Button;