// Create div totalling 16x16 grid cells
for (i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-cell");
    document.getElementById("grid-container").appendChild(div);
}

/*
Listen for hover to make hovered cells change color. 
If cell has rgb, then darken it by 10%.
*/
const cells = Array.from(document.querySelectorAll(".grid-cell"));
cells.forEach(cell => cell.addEventListener("mouseover", e => {
    let r, 
        g, 
        b, 
        rgb = e.target.style.backgroundColor;
    // create random RGB
    if ( rgb == "") {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        rgb = `rgb(${r}, ${g}, ${b})`;
        e.target.style.backgroundColor = `${rgb}`;
    } else {
        rgb = rgb.substring(5, rgb.length-1).split(",");
        // console.log(rgb);
        r = rgb[0] - 255 * .1;
        g = rgb[1] - 255 * .1;
        b = rgb[2] - 255 * .1;
        rgb = `rgb(${r}, ${g}, ${b})`;
        // console.log(rgb);
        e.target.style.backgroundColor = `${rgb}`;
    }
}));

/*
Add listener to clear button to:
1. Clear the grid.
2. Send popup asking for number of squares per side for new grid (maximum 100)
3. Generate new grid in the same total space as before (800px)
*/
const clearButton = document.getElementById("button-clear");
clearButton.addEventListener("click", e => {
    // clear grid
    const parent = document.getElementById("grid-container");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    // prompt for grid height with max=100
    const message = "How many squares per side would you like for the new grid?";
    let prompt = window.prompt(message);
    while (prompt > 100) {
        prompt = window.prompt(message);
    }
    // create the new grid with prompted height
    for (i = 0; i < prompt * prompt; i++) {
        let div = document.createElement("div");
        div.style.height = 800 / prompt + "px";
        let x = 1 / prompt * 100;
        div.style.flex = `${x}%`;
        div.classList.add("grid-cell");
        document.getElementById("grid-container").appendChild(div);

    }
    // Add hover listener to created cells
    const newCells = Array.from(document.querySelectorAll(".grid-cell"));
    newCells.forEach(cell => cell.addEventListener("mouseover", e => {
        let r, 
        g, 
        b, 
        rgb = e.target.style.backgroundColor;
    // create random RGB
    if ( rgb == "") {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        rgb = `rgb(${r}, ${g}, ${b})`;
        e.target.style.backgroundColor = `${rgb}`;
    } else {
        rgb = rgb.substring(5, rgb.length-1).split(",");
        // console.log(rgb);
        r = rgb[0] - 255 * .1;
        g = rgb[1] - 255 * .1;
        b = rgb[2] - 255 * .1;
        rgb = `rgb(${r}, ${g}, ${b})`;
        // console.log(rgb);
        e.target.style.backgroundColor = `${rgb}`;
    }}));
});

