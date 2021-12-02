var example = (() => {
    const con = constraints
    const area = document.querySelector('#constraints-area')
    let variables = {}

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

        variables[key] = con.create()
        
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
                console.log('num')
                variables[key].eval = () => {
                    con.set(variables[key], data)
                    return variables[key].value
                }
            } else if (type !== 'string') {
                console.log('symbol')
                variables[key].eval = () => {
                    const temp = con.get(variables[key])
                    console.log(temp)
                    return temp
                }
            }
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

            variables[line[0].attributes.key.value].deps.push(variables[line[1].attributes.key.value])

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
                case '+': return [ true,  ];
                case '-': return [ true, 'symbol' ];
                case '/': return [ true, 'symbol' ];
                case '*': return [ true, 'symbol' ];
                case '^': return [ true, 'symbol' ];
                case 'sqrt': return [ true, 'symbol' ]; 
                default: return [ false, 'string' ];
            }
        }
    }

    return {variables:variables}
})()