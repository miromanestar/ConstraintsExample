# Constraint Based Programming Example

### [GitHub Link](https://github.com/miromanestar/ConstraintsExample)

### [Live Demo](https://constraints.miromanestar.com)

## Overview
Constraint based programming is the paradigm by which changes in other variables effect changes in their dependent variables.
In this specific case, constraints are used to ensure the dynamically created formulas are properly reevaluated when their
dependencies change

Each variable as specified by the constraints class has this structure:
```
{
    value: Number,
    valid: Boolean,
    deps: Array,
    eval: Function,
    type: String
}
```

- `value` contains the last evaluated value of the variable.

- `valid` defines whether or not the value must be reevaluated with `get()`.

- `deps` stores the list of variables which directly depend on the value of the current variable.

- `eval` is a dynamically created function which is generated as formulas are dynamically created by the user.

- `type` stores the type of formula the variable is. This isn't absolutely neccessary but it make certain checks much easier in the `Main` namespace when checking against user errors. Possible values include:
    - `"number"`
    - `"symbol"`
    - `"variable"`

Constraint variables also include several other members, including:

- `get()` which updates invalid variables by calling `eval()` and also readds dependents from the (static) `Constraint.stack` variable.

- `set(fn)` which takes a function as an argument and sets the `eval` property of the current variable while invalidating all dependents.

- `invalidate()` which is a recursive function called by `set()` to invalidate all dependents.

The `Main` namespace stores a list of variables and formulas in dictionaries keyed by their creation in epoch time (As they are created by the user) by which the connection between what the user builds on the screen and what the final formulas end up being are connected and checked for errors.