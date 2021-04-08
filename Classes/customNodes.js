class Node {
    constructor (pos, index=0, size) {
        this.pos = pos;
        this.index = index;
        this.size = size;
        this.sizeHalf = this.size * 0.5;

        // this.mate = null;
        this.nodesConnected = new Set();
        this.connections = new Set();
    }

    show() {
        push();
            translate(this.pos);
            fill(100, 100, 100, 100);
            ellipse(0, 0, this.size);

            fill(255);
            // text(this.index, - this.sizeHalf, - this.sizeHalf, this.sizeHalf, this.sizeHalf)
            let offset = - this.size * 0.1;
            text(this.index, offset, offset, this.sizeHalf, this.sizeHalf)
        pop();
    }

    addConnection(destination, cost) {
        if (this.nodesConnected.has(destination)) {
            console.warn("already in");
            return
        }
        if (this == destination) {
            console.warn("same node as destination")
            return
        }
        this.connections.add(new Arch(this, destination, cost));
        this.nodesConnected.add(destination)
    }

    drawConnections() {
        // this code is to make the arrow point
        for (let arrow of this.connections) {
            arrow.show();
        }
    }
}