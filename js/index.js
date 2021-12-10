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

        box.oncontextmenu = e => {
            e.preventDefault()
            e.stopPropagation()
            
            let oldVal = box.innerHTML
            if (box.lastChild && box.lastChild.nodeName === 'INPUT') {
                const verify = verifyInput(box.lastChild.value)
                if (verify[0]) {
                    box.classList.remove('active')
                    box.innerHTML = box.lastChild.value
                    setFunction(verify[0], verify[1], input.value)
                } else {
                    box.classList.add('shake')
                    setTimeout(() => { box.classList.remove('shake')}, 500)
                }

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

        box.onkeydown = e => {
            e.stopPropagation()
            switch (e.key) {
                case 'x': deleteBox(e); break;
                case 'Delete': deleteBox(e); break;
                case 'f': drawLine(e); break;
                case 'Backspace': clearSelection(); break;
            }
        }

        const setFunction = (_, type, data) => {
            if (type === 'num') {
                if (!variables[key])
                    variables[key] = con.create()

                variables[key].value = parseInt(data)
                con.set(variables[key], () => { return variables[key].value })
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

        delete variables[e.target.attributes.key.value]
        area.removeChild(e.target)
    }

    let lines = []
    let line = []
    const drawLine = e => {
        if (line[0] && line[0] === e.target) {
            clearSelection()
            return
        }

        line.push(e.target)
        e.target.classList.add('selected')

        if (line.length === 2) {
            for (let li of lines) {
                if ( (line[0] === li.end && line[1] === li.start) || (line[0] === li.start && line[1] === li.end) ) {
                    clearSelection()
                    return
                }
            }

            //variables[line[0].attributes.key.value].deps.push(variables[line[1].attributes.key.value])
            const result0 = verifyInput(line[0].innerHTML)
            const result1 = verifyInput(line[1].innerHTML)
            const key0 = line[0].attributes.key.value
            const key1 = line[1].attributes.key.value

            if (result1[1] === 'symbol') {
                createFormula(key0, key1, line[1])
            } else if (result0[1] === 'symbol') {
                variables[key1] = con.create()
                con.set(variables[key1], formulas[key0].fn)

                Object.keys(formulas[key0].op).map(key => {
                    variables[key].deps.push(variables[key1])
                })

                updateV()
            }

            const temp = new LeaderLine(line[0], line[1], { hide: true })
            temp['show']('draw')
            temp.show()
            lines.push(temp)
            
            setTimeout(clearSelection, 500)
        }
    }

    const clearSelection = () => {
        for (let el of line) {
            if (el.classList.contains('selected')) {
                el.classList.remove('selected')
            }
        }

        line = []
    }

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

    const updateV = () => {
        for (const key in variables) {
            const v = variables[key]

            if (!v.valid) {

                const el = document.querySelector(`.box[key="${ key }"]`)
                el.innerHTML = con.get(v)
            }
        }
    }

    const createFormula = (key0, key1, box, changeSymbol) => {
        if (!formulas[key1])
            formulas[key1] = { symbol: null, fn: null, op: {} }
        if (!changeSymbol)
            formulas[key1].op[key0] = variables[key0].eval

        formulas[key1].symbol = box.innerHTML

        formulas[key1].fn = () => {
            let feval = Object.keys(formulas[key1].op).map(key => { return formulas[key1].op[key]() })
            return eval(feval.join(formulas[key1].symbol))
        }

        updateV()
    }

    return {v:variables, f: formulas}
})()