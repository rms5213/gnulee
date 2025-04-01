import React, {useState, useRef} from "react";
import "./TextField.css";
import sendIcon from "../assets/Vector.svg";

const TextField = ({
                       placeholder,
                       borderStyle = false,
                       onChange,
                       onSubmit,
                       value: externalValue,
                       ...props
                   }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState("");
    const [hasError, setHasError] = useState(false);
    const inputRef = useRef(null);

    const value = externalValue !== undefined ? externalValue : internalValue;


    const errorString = (text) => {
        const specialChars = /[!@#$%^&*()]/;
        return specialChars.test(text);
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInternalValue(newValue);
        setHasError(errorString(newValue));
        if (onChange) onChange(e);
    };

    const handleClear = () => {
        setInternalValue("");
        setHasError(false);
        if (onChange) onChange({target: {value: ""}});
        inputRef.current.focus();
    };

    const handleSubmit = () => {
        if (onSubmit && value && !hasError) {
            onSubmit(value);
        }
    };

    const getTextFieldClass = () => {
        let className = "text-field";
        className += borderStyle ? " border-style" : " underline-style";
        if (isFocused) className += " focused";
        if (hasError) className += " error";
        return className;
    };

    return (
        <div className={getTextFieldClass()}>
            <div className="input-container">
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    placeholder={isFocused ? "" : placeholder}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...props}
                />

                {value && value.length > 0 && (
                    <button type="button" className="clear-button" onClick={handleClear}>
                        ×
                    </button>
                )}

                {borderStyle && value && value.length > 0 && !hasError && (
                    <button type="button" className="send-button inside" onClick={handleSubmit}>
                        <img src={sendIcon} alt="Send"/>
                    </button>
                )}
            </div>

            {!borderStyle && value && value.length > 0 && !hasError && (
                <button type="button" className="send-button outside" onClick={handleSubmit}>
                    <img src={sendIcon} alt="Send"/>
                </button>
            )}

            {hasError && (
                <div className="error-message">Enter an email address with a valid format.</div>
            )}
        </div>
    );
};

export default TextField;
