function partition(arr, start, end) {

    const pivotValue = arr[end]
    let pivotIndex = start
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
            pivotIndex++
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex
}

function quickSortRecursive(arr, start, end) {
    if (start >= end) {
        return
    }

    let index = partition(arr, start, end)

    quickSortRecursive(arr, start, index - 1)
    quickSortRecursive(arr, index + 1, end)
}

array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
quickSortRecursive(array, 0, array.length - 1)
console.log(array)