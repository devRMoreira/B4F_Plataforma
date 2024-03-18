function umOuOutro(boolean1, boolean2, boolean3) {
    if (
        boolean1 && !boolean2 && !boolean3 ||
        !boolean1 && boolean2 && !boolean3 ||
        !boolean1 && !boolean2 && boolean3
    ) {
        return true
    }
    return false
}