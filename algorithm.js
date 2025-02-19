document.addEventListener("DOMContentLoaded", () => {
    const algoInfo = document.getElementById("algo-info");

    // Define descriptions globally
    window.algorithmDescriptions = {
        "Bubble": "Bubble Sort compares adjacent elements and swaps them if they are in the wrong order. This process repeats until the array is sorted.",
        "Selection": "Selection Sort repeatedly selects the smallest element from the unsorted part and places it at the beginning.",
        "Insertion": "Insertion Sort builds the sorted array one item at a time, inserting each new element into its proper position.",
        "Merge": "Merge Sort divides the array into two halves, sorts them recursively, and then merges the sorted halves.",
        "Quick": "Quick Sort selects a pivot element and partitions the array into two halves: one with elements less than the pivot and the other greater than the pivot.",
        "Heap": "Heap Sort builds a max heap from the array, then repeatedly extracts the maximum element and adjusts the heap."
    };
});
