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
        }
    }

    const createBox = (x, y) => {
        let box = document.createElement('div')
        box.classList.add('box');
        box.setAttribute('tabindex', '0')
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

        variables[Date.now()] = con.create()
        
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
                if (verifyInput(box.lastChild.value)) {
                    box.classList.remove('active')
                    box.innerHTML = box.lastChild.value
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
                    if (verifyInput(input.value)) {
                        box.removeChild(input)
                        box.classList.remove('active')
                        box.innerHTML = input.value
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
        const key = Date.now()

        let val = parseInt(input)

        if (val !== 'NaN') {
            return true
        } else {
            switch (input) {
                case '+': return true;
                case '-': return true;
                case '/': return true;
                case '*': return true;
                case '^': return true;
                case 'sqrt':  console.log('lol'); return true; 
                default: return false;
            }
        }
    }
})()