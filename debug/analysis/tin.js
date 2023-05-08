class Triangle {

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        const A = b.x - a.x;
        const B = b.y - a.y;
        const C = c.x - a.x;
        const D = c.y - a.y;
        const E = A * (a.x + b.x) + B * (a.y + b.y);
        const F = C * (a.x + c.x) + D * (a.y + c.y);
        const G = 2 * (A * (c.y - b.y) - B * (c.x - b.x));
        let dx;
        let dy;

        // If the points of the triangle are collinear, then just find the
        // extremes and use the midpoint as the center of the circumcircle.
        this.x = (D * E - B * F) / G;
        this.y = (A * F - C * E) / G;
        dx = this.x - a.x;
        dy = this.y - a.y;
        this.r = dx * dx + dy * dy;
    }
}

function dedup(edges) {
    let j = edges.length;
    let a;
    let b;
    let i;
    let m;
    let n;

    outer: while (j) {
        b = edges[--j];
        a = edges[--j];
        i = j;
        while (i) {
            n = edges[--i];
            m = edges[--i];
            if ((a === m && b === n) || (a === n && b === m)) {
                edges.splice(j, 2);
                edges.splice(i, 2);
                j -= 2;
                continue outer;
            }
        }
    }
}

function triangulate(vertices) {
    if (vertices.length < 3) {
        return [];
    }
    vertices.sort((a, b) => b.x - a.x);
    let i = vertices.length - 1;
    const xmin = vertices[i].x;
    const xmax = vertices[0].x;
    let ymin = vertices[i].y;
    let ymax = ymin;
    const epsilon = 1e-12;
    let a, b, c, A, B, G;
    while (i--) {
        if (vertices[i].y < ymin) {
            ymin = vertices[i].y;
        }
        if (vertices[i].y > ymax) {
            ymax = vertices[i].y;
        }
    }

    // Find a supertriangle, which is a triangle that surrounds all the
    // vertices. This is used like something of a sentinel value to remove
    // cases in the main algorithm, and is removed before we return any
    // results.

    // Once found, put it in the "open" list. (The "open" list is for
    // triangles who may still need to be considered; the "closed" list is
    // for triangles which do not.)
    let dx = xmax - xmin;
    let dy = ymax - ymin;
    const dmax = dx > dy ? dx : dy;
    const xmid = (xmax + xmin) * 0.5;
    const ymid = (ymax + ymin) * 0.5;
    const open = [
        new Triangle(
            {
                __sentinel: true,
                x: xmid - 20 * dmax,
                y: ymid - dmax,
            },
            {
                __sentinel: true,
                x: xmid,
                y: ymid + 20 * dmax,
            },
            {
                __sentinel: true,
                x: xmid + 20 * dmax,
                y: ymid - dmax,
            }
        ),
    ];
    const closed = [];
    const edges = [];
    let j;

    // Incrementally add each vertex to the mesh.
    i = vertices.length;
    while (i--) {
        // For each open triangle, check to see if the current point is
        // inside it's circumcircle. If it is, remove the triangle and add
        // it's edges to an edge list.
        edges.length = 0;
        j = open.length;
        while (j--) {
            // If this point is to the right of this triangle's circumcircle,
            // then this triangle should never get checked again. Remove it
            // from the open list, add it to the closed list, and skip.
            dx = vertices[i].x - open[j].x;
            if (dx > 0 && dx * dx > open[j].r) {
                closed.push(open[j]);
                open.splice(j, 1);
                continue;
            }

            // If not, skip this triangle.
            dy = vertices[i].y - open[j].y;
            if (dx * dx + dy * dy > open[j].r) {
                continue;
            }

            // Remove the triangle and add it's edges to the edge list.
            edges.push(
                open[j].a,
                open[j].b,
                open[j].b,
                open[j].c,
                open[j].c,
                open[j].a
            );
            open.splice(j, 1);
        }

        // Remove any doubled edges.
        dedup(edges);

        // Add a new triangle for each edge.
        j = edges.length;
        while (j) {
            b = edges[--j];
            a = edges[--j];
            c = vertices[i];
            // Avoid adding colinear triangles (which have error-prone
            // circumcircles)
            A = b.x - a.x;
            B = b.y - a.y;
            G = 2 * (A * (c.y - b.y) - B * (c.x - b.x));
            if (Math.abs(G) > epsilon) {
                open.push(new Triangle(a, b, c));
            }
        }
    }

    // Copy any remaining open triangles to the closed list, and then
    // remove any triangles that share a vertex with the supertriangle.
    Array.prototype.push.apply(closed, open);

    i = closed.length;
    while (i--) {
        if (
            closed[i].a.__sentinel ||
            closed[i].b.__sentinel ||
            closed[i].c.__sentinel
        ) {
            closed.splice(i, 1);
        }
    }

    return closed;
}

function tin(points) {
    return triangulate(points).map(triangle => {
        const a = [triangle.a.x, triangle.a.y, triangle.a.z];
        const b = [triangle.b.x, triangle.b.y, triangle.b.z];
        const c = [triangle.c.x, triangle.c.y, triangle.c.z];
        return [a, b, c];
    });
}
