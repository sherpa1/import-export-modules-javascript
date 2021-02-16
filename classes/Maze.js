class Maze {
    constructor(cols = 0, rows = 0) {
        this.cols = cols;
        this.rows = rows;

        if (cols <= 0) throw new Error("Cols number must be > 0");
        if (rows <= 0) throw new Error("Rows number must be > 0");
    }

    generate() {
        console.log(`Maze generation :  ${this.rows} x ${this.cols}`);
    }
}

module.exports = Maze;