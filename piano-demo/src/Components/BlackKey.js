import React, { Component, useEffect, useState } from 'react';

function BlackKey({config, play, highlightKey}){
    const defaultClass = 'piano-keys key-black'
    const [className, setClassName] = useState(defaultClass)
    useEffect(() => {
        if(highlightKey && highlightKey.key === config[3]){
            setClassName(defaultClass + ' key-highlight')
        } 
        setTimeout(() => {
            setClassName(defaultClass)
        }, 400)
    }, [highlightKey])

        return (
            <div 
                className={className}
                style={{left: config[2] + 'px', top: '5px'}}
                onClick={() => play(config)}>
                <div className="key">{config[3].toUpperCase()}</div>
                <div className="node">{config[0] + config[1]}</div>
            </div>
        );
}

export default BlackKey;