import React, { useState } from 'react';
import { Input, Label } from './InputLabel.styles';

const InputLabel = ({value, setValue}) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
        isFocus ? 
        <Input type="text" value={value} onChange={e => setValue(e.target.value)} onBlur={() => setIsFocus(false)} onKeyPress={(e) => e.key === 'Enter' && setIsFocus(false)} autoFocus/> 
        : 
        <Label onClick={() => setIsFocus(true)}>{value}</Label>
    );
};

export default InputLabel;