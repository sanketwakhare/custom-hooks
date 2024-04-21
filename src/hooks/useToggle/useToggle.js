import { useState } from "react";

const useToggle = (initValue) => {
    const [value, setValue] = useState(initValue);

    function toggleValue(value) {
        setValue((currentValue) => {
            return typeof value === 'boolean' ? value : !currentValue;
        });
    }

    return [value, toggleValue];
}

export default useToggle;