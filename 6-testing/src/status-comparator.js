/**
 * Compares todos for sorting
 */
export function statusComparator(todo1, todo2) {
    if (todo1.done == todo2.done) {
        return 0;
    }
    else if (todo1.done) {
        return 1;
    }
    return -1;
}