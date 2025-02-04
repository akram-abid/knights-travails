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

class Links {
    constructor(pos, father){
        this.pos = pos
        this.father =father
    }
}

function have(arr, pair) {
    return arr.some((value) => {
        return value[0] == pair[0] && value[1] == pair[1];
    });
}

function isEqual(arr1, arr2) {
    if (arr1[0] == arr2[0] && arr1[1] == arr2[1]) {
        return true;
    }
    return false;
}


function getPath(pos, target, path = [], visited = [], ancessor = null, nodeFather = null) {
    const moves = possibleMoves(pos);
    let node 
    if( ancessor != null){
        if( isEqual(nodeFather, ancessor.pos)){
            node = new Links(pos, ancessor);
        }else{
            node = new Links(pos, ancessor.father)
        }
    }else{
        node = new Links(pos, ancessor)
    }
    visited.push(node);
    
    if (isEqual(target, pos)) {
        return node;
    } else {
        moves.map((i) => {
            if (!have(visited, i)) path.push(new Links(i, node));
        });

        if (path.length !== 0) {
            const next = path.shift()
            return getPath(next.pos, target, path, visited, next, next.father);
        }
    }
}

function knightMoves(pos, target){
    const path = []
    let parcourer = getPath(pos, target)
    while(parcourer != null){
        path.push(parcourer.pos);
        parcourer = parcourer.father
    }
    return path
}

const result = getPath([0, 0], [7, 7]); 

console.log("you made it here is theb path ", knightMoves([0, 0], [7, 7]))