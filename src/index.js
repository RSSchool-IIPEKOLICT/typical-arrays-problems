
exports.min = function min(n) {
    switch (n) {
        case undefined: return 0
        default: return (n.length > 0) ? n.reduce((p, c) => (p <= c) ? p : c) : 0
    }
}

exports.max = function max(n) {
    switch (n) {
        case undefined: return 0
        default: return (n.length > 0) ? n.reduce((p, c) => (p >= c) ? p : c) : 0
    }
}

exports.avg = function avg(n) {
    switch (n) {
        case undefined: return 0
        default: return (n.length > 0) ? n.reduce((p, c) => p + c) / n.length : 0
    }
}
