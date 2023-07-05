document.body.setAttribute('style',
' font-family:Arial, Helvetica, sans-serif ; font-size: 16px; display: flex; flex-direction: row-reverse; justify-content: center; align-items: center ; height: 1000px; background: #F7F1E4;');
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
const finalColor = colors[Math.floor(Math.random() * 6)];
const bigContainer = document.createElement('div');
bigContainer.classList.add('big');
bigContainer.setAttribute('style',' height: 1000px; width: 760px; display: flex; flex-direction: column-reverse; align-items: center; justify-content: center; gap: 20px; ');
document.body.appendChild(bigContainer);


const container = document.createElement('div');
container.classList.add('container');

// const container = document.querySelector('.container');
// container.textContent = "hello world";
bigContainer.appendChild(container);

//     `backGround: green; border: 10px solid red; width: 700px; height: 700px;  display: grid; grid-template-columns: repeat(${gridSize}, 1fr); box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;`)
// const slidercon = document.createElement('div');
// slidercon.setAttribute('style');
const slider = document.createElement('input');
slider.setAttribute('min', '1');
slider.setAttribute('max', '100');
slider.setAttribute('type', 'range');
slider.setAttribute('value', '16');
slider.classList.add('slider');
slider.setAttribute('style','-webkit-appearance: none; appearance : none; height: 15px; width: 300px; background: #fff; border-radius: 7px; border: 4px solid '+ finalColor +';');
const sliderfunc = document.createElement('div');
sliderfunc.setAttribute('style','display: flex; flex-direction: row; gap: 20px; margin-left: 12px; font-family:Arial, Helvetica, sans-serif; ')
sliderfunc.appendChild(slider);
// sliderfunc.textContent = "hello"
bigContainer.appendChild(sliderfunc);

const showslid  = document.createElement('span');
showslid.classList.add('showslid');
showslid.setAttribute('style','display: flex; justify-content: center; align-items: center; border: 3px solid '+ finalColor +'; border-radius: 10px; width: 110px; height: 25px')
showslid.textContent = "Grid Size : " + slider.value;
// showslid.textContent = "Pixel Size " ;
slider.addEventListener('input', function()
{
    showslid.textContent = "Grid Size :" + slider.value;
});
sliderfunc.appendChild(showslid);

// const showslid  = document.createElement('span');
// showslid.classList.add('showslid');
// showslid.setAttribute('style','display: flex; justify-content: center; align-items: center; border: 3px solid black; border-radius: 10px; width: 100px; height: 25px')
// showslid.textContent = "Grid Size : " + slider.value;
// // showslid.textContent = "Pixel Size " ;
// slider.addEventListener('input', function()
// {
    //     showslid.textContent = slider.value;
    // });
    // sliderfunc.appendChild(showslid);
    
    const showspix  = document.createElement('span');
    showspix.classList.add('showspix');
showspix.setAttribute('style','display: flex; justify-content: center; align-items: center; border: 3px solid '+ finalColor +'; border-radius: 10px; width: 120px; height: 25px')
showspix.textContent = "Pixels : " + slider.value * slider.value;
// showspix.textContent = "Pixel Size " ;
slider.addEventListener('input', function()
{
    showspix.textContent = "Pixels : " + slider.value * slider.value;
});
sliderfunc.appendChild(showspix);



const seccontainer = document.createElement('div');
seccontainer.setAttribute('style',' display: flex; flex-direction: column; justify-content: center; gap: 20px; align-items: center ; height: 1000px');
document.body.appendChild(seccontainer);
// seccontainer.textContent = "helo";

const button = document.createElement('button');
button.classList.add('btn');
button.setAttribute('style','font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
button.textContent = "Black";
seccontainer.append(button);

const button2 = document.createElement('button');
button2.classList.add('btn');
button2.setAttribute('style','font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
button2.textContent = "RGB ";
seccontainer.append(button2);

const button4 = document.createElement('button');
button4.classList.add('btn');
button4.setAttribute('style','font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
button4.textContent = "Eraser";
seccontainer.append(button4);

const button3 = document.createElement('button');
button3.classList.add('btn');
button3.setAttribute('style','font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
button3.textContent = "Clear ";
seccontainer.append(button3);














// slider.setAttribute('height','10px');
// bigContainer.appendChild(slider);
// seccontainer.append(button2);
let gridSize = 16;
container.setAttribute('style','backgroundColor: white; border: 5px solid '+ finalColor +'; width: 700px; height: 700px;  display: grid; grid-template-columns: repeat('+ gridSize +', 1fr); box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;')
let gridSizee =  gridSize * gridSize;
for(i=1; i <= gridSizee; i++)
{
    const gridItems = document.createElement('div');
    gridItems.classList.add('gridItem');
    gridItems.setAttribute('style', 'border: 1px solid black; min-height: 2px; min-width: 2px; ; display: flex; flex-wrap: wrap;');
    // gridItems.setAttribute('style', ' min-height: 2px; min-width: 2px; ; display: flex; flex-wrap: wrap;');
    container.appendChild(gridItems);
    // const hover = document.querySelectorAll('.gridItem');
    
    button2.addEventListener('click',function()
    {

        gridItems.addEventListener('mouseover', function()   
        {  
            //    if(gridItems.classList.contains('gridIem'))
            //    {
                const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
                gridItems.style.background = colors[Math.floor(Math.random() * 6)];
            })
            
        });

    button.addEventListener('click', function()
    {
        gridItems.addEventListener('mouseover', function()
        {

                    // alert("now is the black color");
                    gridItems.style.background = 'black';
                    
                })
            });
            
    button4.addEventListener('click', function()
    {
        gridItems.addEventListener('mouseover', function()
        {

                    // alert("now is the black color");
                    gridItems.style.background = 'transparent';
                    
                })
            });
            
            
button3.addEventListener('click',function()
{
    gridItems.style.background = 'transparent';
})

}



    container.style.borderRadius = '3%';
    container.style.border = '7px solid '+finalColor+''; 
        slider.addEventListener('input', function(event)
        {
            while(container.firstChild)
            {
                container.firstChild.remove();
            }
            gridSize= parseInt(event.target.value);
            container.setAttribute('style','backgroundColor: white; border: 7px solid '+ finalColor +'; width: 700px; height: 700px;  display: grid; grid-template-columns: repeat('+ gridSize +', 1fr); box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; border-radius: 3%; ')
            let gridSizee =  gridSize * gridSize;
            for(i=1; i <= gridSizee; i++)
            {
                
                // const showslid  = document.createElement('span');
                // showslid.classList.add('showslid');
                // showslid.addEventListener('input',function()
                // {
                    //     // event.target.value;
                    //     // slider.value;
                    
                    //     })
                    // bigContainer.appendChild(showslid);
                    
                    
                    
                    
                    const gridItems = document.createElement('div');
                    gridItems.classList.add('gridItem');
                    gridItems.setAttribute('style', 'border: 1px solid black; min-height: 2px; min-width: 2px; ; display: flex; flex-wrap: wrap;');
                    // gridItems.setAttribute('style', ' min-height: 2px; min-width: 2px; ; display: flex; flex-wrap: wrap;');
                    container.appendChild(gridItems);
                    // const hover = document.querySelectorAll('.gridItem');
                    button2.addEventListener('click',function()
                    {
                        
                        gridItems.addEventListener('mouseover', function()   
                        {  
                            //    if(gridItems.classList.contains('gridIem'))
                            //    {
                                const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
                                gridItems.style.background = colors[Math.floor(Math.random() * 6)];
                            })
                                
                    });  
                    
                    button4.addEventListener('click', function()
                    {
                        gridItems.addEventListener('mouseover', function()
                        {
                
                                    // alert("now is the black color");
                                    gridItems.style.background = 'transparent';
                                    
                                })
                            });
                            

                    button.addEventListener('click', function()
                    {
                        gridItems.addEventListener('mouseover', function()
                        {
                            
                            // alert("now is the black color");
                            gridItems.style.background = 'black';
                                    
                        })
                    });

                    button3.addEventListener('click',function()
{
    gridItems.style.background = 'transparent';
})

                    
                               //    }
                               
                            }         
            });    
            
            // hover.forEach(function(event) {
                            // event.addEventListener('mouseover', function() 
                            
                            
                            // console.log("this is the value of GridSize outside the slider " + gridSize);
                            
                            
                            // const seccontainer = document.createElement('div');
                            // seccontainer.setAttribute('style',' display: flex; flex-direction: column; justify-content: center; gap: 20px; align-items: center ; height: 1000px');
                            // document.body.appendChild(seccontainer);
                            // // seccontainer.textContent = "helo";
                            
                            // const button = document.createElement('button');
                            // button.classList.add('btn');
                            // button.setAttribute('style','font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
                            // button.textContent = "Black";
                            // seccontainer.append(button);
                            
                            // const button2 = document.createElement('button');
                            // button2.classList.add('btn');
                            // button2.setAttribute('style','font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
                            // button2.textContent = "RGB ";
                            // seccontainer.append(button2);
