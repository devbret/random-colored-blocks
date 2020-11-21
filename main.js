function main() {
    //Main program variables.
    const m = document.querySelector(`#m`);
    const g = document.querySelector(`#generate`);
    //Support function for random numbers.
    function rgbRandom(){
        return Math.floor(Math.random() * 255);
    }
    //The function responsible for generating random colored blocks.
    function generateSquares(){
        //Clears the body element of any previous contents.
        m.innerHTML = ``;
        //Creating and appending the info paragraph element to the body.
        const innerP = document.createElement(`p`);
        innerP.id = `innerP`;
        m.appendChild(innerP);
        //Enabling the info paragraph element to follow the mouse's position.
        window.addEventListener(`mousemove`, function(e){
            const x = e.clientX;
            const y = e.clientY;
            innerP.style.left = `${x + 15}px`;
            innerP.style.top = `${y + 15}px`;
        });
        //Where the main action takes place. Creating ten rows within the main element via a for loop.
        for (let i = 0; i < 10; i++) {
            const row = document.createElement(`div`);
            //Assigning a class and appending each row to the main element.
            row.classList.add(`rows`);
            m.appendChild(row);
            //Setting a counter variable to manage the size of each inner block.
            let remainder = 100;
            //Looping to create inner blocks while there is still space to house/frame them.
            while (remainder > 0) {
                //Assigning a random number (no larger than ten) to the value rN and subtracting that value from the remainder variable.
                const rN = Math.floor(Math.random() * 10);
                remainder -= rN;
                //Creating an inner block, assigning its class and appending it within the appropriate row div.
                const block = document.createElement(`div`);
                block.classList.add(`blocks`);
                row.appendChild(block);
                //Creating a random color for the background of the each block.
                block.style.backgroundColor = `rgb(${rgbRandom()},${rgbRandom()},${rgbRandom()})`;
                //Correctly sizing the inner block, based on how much space is left available.
                if (remainder > 0) {
                    block.style.width = `${rN}%`;
                } else {
                    block.style.width = `${rN - remainder}%`;
                }
                //Update the info paragraph element with each block's respective width.
                block.addEventListener(`mouseover`, function(){
                    innerP.innerHTML = `${block.offsetWidth}px wide`;
                });
            }
        }
    }
    generateSquares();
    //Enables the "Generate" button to produce ten new rows of randomly colored blocks.
    g.addEventListener(`click`, generateSquares);
}
main();
