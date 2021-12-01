var example = (() => {
    const con = constraints
    const area = document.querySelector('#constraints-area')
    let variables = {}

    area.onmousedown = e => {
        const c = getCoords(e)
        createBox(c.x, c.y)
    }

    area.ondragover = e => {
        e.preventDefault()
    }

    area.ondrop = e => {
        e.preventDefault()

        const c = getCoords(e)
        let box = document.getElementById(e.dataTransfer.getData('id'))
        box.style.left = c.x
        box.style.top = c.y
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
        
        variables[key] = con.create()
        console.log(variables)

        box.onmousedown = e => {
            e.stopPropagation()
        }

        box.onmouseover = e => {
            e.target.focus()
        }

        box.ondragstart = e => {
            e.dataTransfer.setData('id', e.target.id)
        }

        box.onkeydown = e => {
            switch (e.key) {
                case 'x': area.removeChild(e.target); break;
                case 'f': createLine(e); break;
            }
        }
    }

    let tempLine = []
    const createLine = e => {
        tempLine.push(e.target)
        
        if (tempLine.length === 2) {
            const x1 = tempLine[0].style.left.replace('px', '')
            const y1 = tempLine[0].style.top.replace('px', '')
            const x2 = tempLine[1].style.left.replace('px', '')
            const y2 = tempLine[1].style.top.replace('px', '')

            const dist = Math.sqrt( Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) )
            let line = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            line.setAttributeNS('http://www.w3.org/2000/svg', 'viewBox', '0 0 100 100')
            line.innerHTML = `
                <defs>
                    <marker id="head" orient="auto" markerWidth="10" markerHeight="10" refX="0.1" refY="0.2">
                        <path d="M0, 0 V4 L2, 2 Z" fill="black" />
                    </marker>
                </defs>
                <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="black" stroke-width="2" marker-end="url(#head)" />
            `

            area.appendChild(line)
            tempLine = []
        }
    }

    const getCoords = e => {
        let rect = e.currentTarget.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top

        return { x: x, y: y }
    }
})()