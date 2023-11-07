import { useState } from "react"

function ChangeQuestion({initialValue = 0,maxValue = Infinity, minValue = -Infinity}) {

    const [state, setState] = useState(initialValue)

    return {
        currentQuestion: state,
        increment: () => setState(v => v < maxValue ? v + 1 : v),
        decrement: () => setState(v => v > minValue ? v - 1: v)
    }

}

export default ChangeQuestion