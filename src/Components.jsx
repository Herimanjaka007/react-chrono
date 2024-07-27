export const Screen = ({ time }) => {
    const [hour, minute, second, milisecond] = Object.values(time).map(t => t.toString().padStart(2, "0"));

    return <section className="screen p-5">
        <p className='display-2 text-center text-info'>{`${hour}:${minute}:${second}:${milisecond}`}</p>
    </section>
}

export const Button = ({ buttonValue, bsColor, onClick, isDisable }) => {
    return <button
        className={"btn btn-" + bsColor}
        onClick={onClick}
        disabled={isDisable}
    >
        {buttonValue}
    </button>
}
