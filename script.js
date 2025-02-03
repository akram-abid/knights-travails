function possibleMoves(pos) {
    const moves = [
        [pos[0] + 1, pos[1] + 2],
        [pos[0] + 2, pos[1] + 1],
        [pos[0] + 1, pos[1] - 2],
        [pos[0] + 2, pos[1] - 1],
        [pos[0] - 1, pos[1] - 2],
        [pos[0] - 2, pos[1] - 1],
        [pos[0] - 1, pos[1] + 2],
        [pos[0] - 2, pos[1] + 1],
    ];

    return moves.filter(
        (ele) => ele[0] >= 0 && ele[0] <= 7 && ele[1] >= 0 && ele[1] <= 7
    );
}

class Node {
    constructor(father, sonList){
        this.father = father
        this.sonList = sonList
    }
}

function have(arr, pair) {
    return arr.some((value) => {
        return value[0] == pair[0] && value[1] == pair[1];
    });
}

function isEqual(arr1, arr2){
    if(arr1[0] == arr2[0] && arr1[1] == arr2[1]){
        return true
    }
    return false
}

function knightMoves(pos, target, path = [], ready = []) {
    const moves = possibleMoves(pos);
    ready.push(pos);
    if (isEqual(target,pos)) {
        console.log("i fucking found it")
        return ready;
    } else {
        moves.map((i) => {
            if (!have(ready, i)) path.push(i);
        });
        
        if (path.length !== 0) {
            return knightMoves(path.shift(), target, path, ready);
        }
    }
}


console.log(knightMoves([0, 0], [0, 4]));
