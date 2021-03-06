/**
 * Class to manage constrained variables
 */
class Constraint {
    /**
     * Stack which keeps track of dependencies which must be reevaluated
     * @property {Array}
     */
    static stack = []

    /**
     * Creates a new constrained object
     * @constructor
     */
    constructor() {
        /**
         * Last calculated value of the variable
         * @property {Number}
         */
        this.value = null

        /**
         * Whether or not the variable must be reevaluated
         * @property {Boolean}
         */
        this.valid = false

        /**
         * List of variables which depend on this variable
         * @property {Array}
         */
        this.deps = []

        /**
         * Function which evaluates the new value of the variable
         * @property {Function}
         */
        this.eval = () => ""

        /**
         * States whether the function is a primitive or variable
         * @property {String}
         */
        this.type = null
    }

    /**
     * Updates the values of invalid constrained variables
     * @returns {Number} The value of the recalculated variable
     */
    get() {
        if (Constraint.stack.length > 0)
            this.deps += Constraint.stack[Constraint.stack.length - 1]
        if (!this.valid) {
            this.valid = true
            Constraint.stack.push(this)
            this.value = this.eval()
            Constraint.stack.pop()
        }

        return this.value
    }

    /**
     * Set's the evaluation function for the provided variable and invalidates dependents
     * @param {Function} fn The function to evaluate the variable value
     */
    set(fn) {
        this.eval = fn
        for (let dep of this.deps) {
            if (dep.valid)
                dep.invalidate()
        }
    }

    /**
     * Function which invalidates the current variable and its dependents.
     * Also resets the dependencies of the variable
     */
    invalidate() {
        this.valid = false
        for (let dep of this.deps) {
            if (dep.valid)
                dep.invalidate()
        }
    }
}