import React, { Component, useEffect, useState } from 'react';
import WhiteKey from './WhiteKey.js';
import BlackKey from './BlackKey.js';
import {v4 as uuidv4} from 'uuid';

import {
    whiteKeys,
    whiteKeysMapping,
    blackKeys,
    blackKeysMapping
} from '../key.js';

function Piano(){ 
        const [highlightKey, setHighLightKey] = useState(null)
        const play = (config) => window.piano.play(config[0], config[1], 2)
        const whiteKeysComponent = 
            whiteKeys.map((key, index) => <WhiteKey config={key} highlightKey={highlightKey} key={index} play={play}/>)

        const blackKeysComponent = 
            blackKeys.map((key, index) => <BlackKey config={key} highlightKey={highlightKey} key={index} play={play}/>)  

        const playNode = event => {
            const key = event.key
            const config = whiteKeysMapping[key] || blackKeysMapping[key]
            if(config){
                setHighLightKey({
                    key,
                    uuid: uuidv4()
                })
                play(config)
            }
        }

        useEffect(() => {
            const doc = window.document
            doc.addEventListener('keypress', playNode)
        }, [])
        return (
            <div>
                <div className="page">
                    <div className="piano">
                        {blackKeysComponent}
                        <div>
                            {whiteKeysComponent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Piano;