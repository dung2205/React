import React, { Component, useEffect, useState } from 'react';

function WhiteKey({config, play, highlightKey}){
    const defaultClass = 'piano-keys key-white'
    const [className, setClassName] = useState(defaultClass)
    useEffect(() => {
        if(highlightKey && highlightKey.key === config[2]){
            setClassName(defaultClass + ' key-highlight')
        } 
        setTimeout(() => {
            setClassName(defaultClass)
        }, 400)
    }, [highlightKey])

    return (
        <div 
            className={className}
            onClick={() => play(config)}>
            <div className="key">{config[2].toUpperCase()}</div>     
            <div className="node">{config[0] + config[1]}</div>        
        </div>
    );
}

export default WhiteKey;