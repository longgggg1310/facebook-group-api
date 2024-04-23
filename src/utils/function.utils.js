export const checkLimitOffset = (limit, offset )=>{
    if (limit <= 0 || offset < 0) {
        return false
    }
    return true
}