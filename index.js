function receivesAFunction(func) {
    func()
    return func
}

function returnsANamedFunction() {
    let namedFunction = () => {}
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return () => {}
}