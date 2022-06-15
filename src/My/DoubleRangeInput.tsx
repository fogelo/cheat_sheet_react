import React, {FormEvent, useEffect, useState} from "react";
import styled from "styled-components";

const DoubleRangeInput = () => {
    const [min, setMin] = useState(2500)
    const [max, setMax] = useState(7500)

    useEffect(() => {
    }, [])

    const changeMinValue = (e: FormEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value <= 10000 && +e.currentTarget.value >= 0) {
            setMin(+e.currentTarget.value)
        }
    }

    const changeMaxValue = (e: FormEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value <= 10000 && +e.currentTarget.value >= 0) {
            setMax(+e.currentTarget.value)
        }
    }

    const props = max > min ? {min, max} : {min: max, max: min}

    return (
        <SliderStyled>
            <div className={"container"}>
                <div className={"min-value numberVal"}>
                    <input type="number" min={0} max={10000} value={min} onInput={changeMinValue}/>
                </div>
                <div className={"range-slider"}>
                    <StyledProgress className={"progress"} {...props}/>
                    <input type="range" className={"range-min"} min={0} max={10000}
                           value={min}
                           onInput={changeMinValue}
                    />
                    <input type="range" className={"range-max"} min={0} max={10000}
                           value={max}
                           onInput={changeMaxValue}
                    />
                </div>
                <div className={"max-value numberVal"}>
                    <input type="number" min={0} max={10000} value={max} onInput={changeMaxValue}/>
                </div>
            </div>
        </SliderStyled>
    );
}

interface Props {
    max: number;
    min: number;
}

const SliderStyled = styled.div`
  display: flex;
  margin: auto;

  .container {
    display: flex;
    //margin: auto;
    justify-content: center;
    align-items: center;
  }

  .range-slider {
    position: relative;
    background-color: #b6b6b6;
    height: 5px;
    width: 400px;
    outline: none;
    margin: 0 10px;
  }

  .container .range-slider input[type="range"] {
    position: absolute;
    top: -8px;
    left: -5px;
    width: 101%;
    pointer-events: none;
    background: none;
    -webkit-appearance: none;
    outline: none;
  }

  .container .range-slider input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: auto;
    //transform: translateY(50%);
    height: 20px;
    width: 10px;
    background-color: darkcyan;
    border-radius: 50%;
  }
`

const StyledProgress = styled.div.attrs((props: Props) => ({
    style: {
        left: `${props.min / 10000 * 100}%`,
        right: `${100 - props.max / 10000 * 100}%`
    }
}))`
  position: absolute;
  height: 100%;
  background-color: #00a7a7;
  border-radius: 50px;
`

export default DoubleRangeInput;