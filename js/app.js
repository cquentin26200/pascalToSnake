export const pascalToSnake = (entry) => {
    let newArray = [];
    for (let counter of entry) {
        if (typeof entry === "string") {
            if (counter === counter.toUpperCase() && counter !== entry[0] && entry.startsWith("Play") && !parseInt(counter)) {
                counter = "-" + counter;
            } else if (counter === counter.toUpperCase() && counter !== entry[0] && entry !== "PlayMovie" && counter !== "_" && counter !== "t".toUpperCase() && !parseInt(counter)) {
                counter = "_" + counter;
            } 
            newArray += counter.toLowerCase();
        } else {
            newArray = parseInt(entry)
        }
    } 
    return newArray;
}