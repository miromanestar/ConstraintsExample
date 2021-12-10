var example = (() => {
    const con = constraints
    const area = document.querySelector('#constraints-area')
    let variables = {}
    let formulas = {}

    area.onmousedown = e => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        let y = e.clientY - rect.top

        if (e.button === 0)
            createBox(x, y)
    }

    area.oncontextmenu = e => {
        e.preventDefault()
    }

    window.onkeydown = e => {
        switch (e.key) {
            case 'Backspace': clearSelection(); break;
            case 'Escape': clearSelection(); break;
            case 'a': console.log(variables)
        }
    }

    const createBox = (x, y) => {
        const key = Date.now()

        let box = document.createElement('div')
        box.classList.add('box');
        box.setAttribute('tabindex', '0')
        box.setAttribute('key', key)
        area.appendChild(box)
        box.style.left = x - box.offsetWidth / 2
        box.style.top = y - box.offsetHeight / 2

        const draggable = new PlainDraggable(box, { onMove: () => {
            for (let li of lines) {
                if (box === li.start || box === li.end) {
                    li.position()
                }
            }
        }})
        
        box.onmouseover = e => {
            e.target.focus()
        }

        box.onmouseleave = e => {
            e.target.blur()
        }

        //Right clicking on a box enables editing
        box.oncontextmenu = e => {
            e.preventDefault()
            e.stopPropagation()
            
            //Save original value if box edit is canceled
            let oldVal = box.innerHTML

            //If right click again while editing, cancel edit
            if (box.lastChild && box.lastChild.nodeName === 'INPUT') {
                console.log(box.childNodes)
                box.removeChild(box.lastChild)
                box.classList.remove('active')
                box.innerHTML = oldVal

                return
            }

            let input = document.createElement('input')
            input.value = box.lastChild ? box.innerHTML : ''
            box.innerHTML = ''
            box.classList.add('active')
            box.appendChild(input)
            input.focus()

            input.onkeydown = e => {
                e.stopPropagation()
                
                if (e.key === 'Enter') {
                    const verify = verifyInput(input.value)
                    if (verify[0]) {
                        box.removeChild(input)
                        box.classList.remove('active')
                        box.innerHTML = input.value

                        setFunction(verify[0], verify[1], input.value)
                    } else {
                        box.classList.add('shake')
                        setTimeout(() => { box.classList.remove('shake')}, 500)
                    }
                }

                if (e.key === 'Escape') {
                    box.removeChild(input)
                    box.classList.remove('active')
                    box.innerHTML = oldVal
                }
            }

        }

        //Controls what to do when clicking on a particular box
        box.onkeydown = e => {
            e.stopPropagation()
            switch (e.key) {
                case 'x': deleteBox(e); break;
                case 'Delete': deleteBox(e); break;
                case 'f': drawLine(e); break;
                case 'Backspace': clearSelection(); break;
            }
        }

        //Set the function associated with a given variable
        const setFunction = (_, type, data) => {
            //If box is a primitive, function should return that value
            if (type === 'num') {
                if (!variables[key])
                    variables[key] = con.create()

                variables[key].value = parseInt(data)
                con.set(variables[key], () => { return variables[key].value })
            //If box is a pre-existing formula, update the formula and invalidate deps
            } else if (type === 'symbol' && formulas[key]) {
                createFormula(null, key, box, true)         
            }

            updateV()
        }
    }

    const deleteBox = e => {
        const removeLine = li => {
            li.remove()
            lines = lines.filter(el => { return el !== li })
        }

        for (let li of lines) {
            if (e.target === li.start || e.target === li.end) {
                if (e.target === li.end) {
                    li.hide()
                    setTimeout(() => removeLine(li), 500)
                } else {
                    removeLine(li)
                }

            }
        }

        //Clear deleted box from variables and deps

        //Clear deleted box from formulas

        delete variables[e.target.attributes.key.value]
        area.removeChild(e.target)
    }

    let lines = [] //Store all the lines on the board
    let line = [] //Temporary variable to store endpoints for new line
    const drawLine = e => {
        if (line[0] && line[0] === e.target) {
            clearSelection()
            return
        }

        line.push(e.target)
        e.target.classList.add('selected')

        //If two boxes have been selected, check to ensure you're not creating a circular dependency
        if (line.length === 2) {
            for (let li of lines) {
                if ( (line[0] === li.end && line[1] === li.start) || (line[0] === li.start && line[1] === li.end) ) {
                    clearSelection()
                    return
                }
            }

            //Determine the purpose of the first and second boxes, get their corresponding keys
            const result0 = verifyInput(line[0].innerHTML)
            const result1 = verifyInput(line[1].innerHTML)
            const key0 = line[0].attributes.key.value
            const key1 = line[1].attributes.key.value

            //If we're creating a new formula
            if (result1[1] === 'symbol') {
                createFormula(key0, key1, line[1])

            //If we're connecting a formula to an output box, create new variable
            } else if (result0[1] === 'symbol') {
                variables[key1] = con.create()

                //Set new variable eval function to formula function
                con.set(variables[key1], formulas[key0].fn)

                //Push dependencies (formula operands) to variable
                Object.keys(formulas[key0].op).map(key => {
                    variables[key].deps.push(variables[key1])
                })

                updateV()
            }

            const newLine = new LeaderLine(line[0], line[1], { hide: true })
            newLine['show']('draw') //Change line creation animation to draw instead of fade
            newLine.show() //Show lines
            lines.push(newLine)
            
            //Delay to allow animations to complete before truly deleting
            setTimeout(clearSelection, 500)
        }
    }

    //Clears the selected boxes for line connection
    const clearSelection = () => {
        for (let el of line) {
            el.classList.remove('selected')
        }

        //Clear the selected line endpoints
        line = []
    }

    //Determines whether a box is a primitive, symbol, variable, or invalid
    const verifyInput = input => {
        let val = parseInt(input)

        if (!isNaN(val)) {
            return [ true, 'num' ]
        } else {
            switch (input) {
                case '+': return [ true, 'symbol' ]
                case '-': return [ true, 'symbol' ]
                case '/': return [ true, 'symbol' ]
                case '*': return [ true, 'symbol' ]
                case '^': return [ true, 'symbol' ]
                case '': return [ true, 'variable' ]
                default: return [ false, 'string' ]
            }
        }
    }

    //Maps over all variables and update invalid values
    const updateV = () => {
        for (const key in variables) {
            const v = variables[key]

            if (!v.valid) {
                //Select element in DOM and update value
                const el = document.querySelector(`.box[key="${ key }"]`)
                el.innerHTML = con.get(v)
            }
        }
    }

    //Create formulas when connecting primitive boxes to symbol boxes
    const createFormula = (key0, key1, box, changeSymbol) => {
        
        //If formula doesn't exist, create it
        if (!formulas[key1])
            formulas[key1] = { symbol: null, fn: null, op: {} }
        //If formula is only changing operand value, update operand eval fn
        if (!changeSymbol)
            formulas[key1].op[key0] = variables[key0].eval

        //Get the symbol to be used for the formula
        formulas[key1].symbol = box.innerHTML

        //Map over operands of formula and set them to invalidate upper deps
        formulas[key1].fn = () => {
            //Build formula into a string of operand {symbol} operand {symbol} operand...
            let feval = Object.keys(formulas[key1].op).map(key => {
                con.set(variables[key], formulas[key1].op[key])
                return formulas[key1].op[key]() 
            })

            //Transform string into a function
            return Function('return ' + feval.join(formulas[key1].symbol))()
        }

        updateV()
    }

    return {v:variables, f: formulas}
})()