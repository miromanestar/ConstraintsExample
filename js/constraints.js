var constraints = (() => {
    let stack = []

    /**
     * 
     * @param {Object} v The variable value to be updated
     * @returns The value of the recalculated variable
     * @description Updates the values of invalid constrained variables
     */
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

    /**
     * 
     * @param {Object} v A variable object as created by create()
     * @param {Function} fn The function to evaluate the variable value
     * @description Set's the evaluation function for the provided variable and invalidates dependents
     */
    const set = (v, fn) => {
        v.eval = fn
        for (let dep of v.deps) {
            if (dep.valid)
                invalidate(dep)
        }
    }

    /**
     * 
     * @param {Object} v The variable to be invalidated
     * @description Function which invalidates the current variable and its dependents
     */
    const invalidate = v => {
        v.valid = false
        for (let dep of v.deps) {
            if (dep.valid)
                invalidate(dep)
        }
        
        v.deps = []
    }

    const isCircular = v => {
        
        const recursive = va => {
            for (let dep of va.deps) {
                if (v === dep)
                    return true
                recursive(dep)
            }
        }
        const result = recursive(v)

        return Boolean(result)
    }

    /**
     * 
     * @returns Variable object
     * @description Function which returns the expected empty structure for a constrained variable
     */
    const create = () => {
        return {
            value: null,
            valid: false,
            deps: [],
            eval: () => ""
        }
    }

    return {
        get: get,
        set: set,
        isCircular: isCircular,
        create: create
    }
})()