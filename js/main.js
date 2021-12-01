var example = (() => {
    const con = constraints
    const area = document.querySelector('#constraints-area')
    let variables = {}

    area.onmousedown = e => {
        const c = getCoords(e)

        if (e.button === 0)
            createBox(c.x, c.y)
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
        const key = Date.now()

        let box = document.createElement('div')
        box.classList.add('box');
        box.setAttribute('draggable', 'true')
        box.setAttribute('tabindex', '0')
        box.id = `box-${key}`;
        box.style.left = x
        box.style.top = y
        area.appendChild(box)

        const draggable = new PlainDraggable(box, { onMove: () => {
            for (let li of lines) {
                if (box === li.start || box === li.end) {
                    li.position()
                }
            }
        } })
        
        variables[key] = con.create()

        box.onmousedown = e => {
            e.stopPropagation()
        }

        box.onmouseover = e => {
            e.target.focus()
        }

        box.onmouseleave = e => {
            e.target.blur()
        }

        box.oncontextmenu = e => {
            e.preventDefault()
            e.stopPropagation()
            console.log('test')
        }

        box.onkeydown = e => {
            e.stopPropagation()
            switch (e.key) {
                case 'x': deleteBox(e); break;
                case 'f': drawLine(e); break;
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

    const getCoords = e => {
        let rect = e.currentTarget.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top

        return { x: x, y: y }
    }
})()