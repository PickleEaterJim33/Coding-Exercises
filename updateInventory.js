/*

Task:

    Compare and update the inventory stored in a 2D array against
    a second 2D array of a fresh delivery. Update the current existing
    inventory item quantities(in arr1). If an item cannot be found,
    add the new item and quantity into the inventory array. The
    returned inventory array should be in alphanetical order by item.

*/

function updateInventory(arr1, arr2) {
    let inv = [...arr1];

    for (let i = 0, containsItem; i < arr2.length; ++i ) {
        containsItem = false;

        for (let j = 0; j < inv.length; ++j) {
            if (arr2[i][1] === inv[j][1]) {
                inv[j][0] += arr2[i][0];
                containsItem = true;
                break;
            }
        }

        if (!containsItem) {
            inv.push(arr2[i]);
        }
    }

    return inv.sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
