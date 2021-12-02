var constraints = (() => {
    let stack = []

    const get = v => {
        if (stack.length > 0)
            v.deps += stack[stack.length - 1]
        if (!v.valid) {
            v.valid = true
            stack.push(v)
            v.value = v.eval()
            stack.pop()
        }

        return v.value
    }

    const set = (v, val) => {
        v.value = val
        for (let dep of v.deps) {
            if (dep.valid)
                invalidate(dep)
        }
    }

    const invalidate = v => {
        v.valid = false
        for (let dep of v.deps) {
            if (dep.valid)
                invalidate(dep)
        }
        
        v.deps = []
    }

    const create = () => {
        return {
            value: null,
            valid: false,
            deps: [],
            eval: () => {
                return value
            }
        }
    }

    return {
        get: get,
        set: set,
        create: create
    }
})()