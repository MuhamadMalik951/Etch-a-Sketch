document.body.setAttribute('style',
' font-family:Arial, Helvetica, sans-serif ; font-size: 16px; display: flex; flex-direction: row-reverse; justify-content: center; align-items: center ; height: 1000px; ');
const colors = ['orange','#E07DE5','#FC6621','#DE1CDA','#42CADB',];
const finalColor = colors[Math.floor(Math.random() * 4)];
const bigContainer = document.createElement('div');
bigContainer.classList.add('big');
bigContainer.setAttribute('style','; background: tranparent; height: 1000px; width: 760px; display: flex; flex-direction: column-reverse; align-items: center; justify-content: flex-end ; gap: 20px; ');
document.body.appendChild(bigContainer);


const vid = document.createElement('video');
vid.src = './icons/bg.mp4';
vid.type = 'video/mp4';
vid.autoplay = true;
vid.loop = false;
vid.muted = true;
vid.style.position = 'fixed';
vid.style.top = '0';
vid.style.width = '100%';
vid.style.height = '100%';
vid.style.objectFit = 'cover';
vid.style.zIndex = '-1';
document.body.appendChild(vid);

// let reverse = false;
// function inverse()
// {
//     if(reverse)
//     {
//         vid.play();
//     }
//     else
//     {
//         vid.playbackRate = -1 ;
//         vid.play();
//     }
//     reverse = !reverse;
// }

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
slider.setAttribute('max', '64');
slider.setAttribute('type', 'range');
slider.setAttribute('value', '16');
slider.classList.add('slider');
slider.classList.add('hoveer');
slider.setAttribute('style','appearance: none;  height: 18px; width: 300px; background: transparent; border-radius: 12px; border: 4px solid '+ finalColor +';');

// var property = `input[type="range"]::-webkit-slider-thumb {
    // border-radius: '1px';
// }`;
// var styleElee = document.createElement('style');
// styleElee.innerHTML = property;
// styleElee.sheet.insertRule(rule, 0);


const sliderfunc = document.createElement('div');
sliderfunc.classList.add('sliderfunc');
sliderfunc.setAttribute('style','display: flex; flex-direction: row ; gap: 30px; margin-left: 12px; font-family:Arial, Helvetica, sans-serif; ')
sliderfunc.appendChild(slider);
// sliderfunc.textContent = "hello"
bigContainer.appendChild(sliderfunc);

const showslid  = document.createElement('span');
showslid.classList.add('showslid');
showslid.classList.add('hoveer');
showslid.setAttribute('style','color: '+ finalColor +';display: flex; justify-content: center; align-items: center; border: 3px solid '+ finalColor +'; border-radius: 10px; width: 110px; height: 25px')
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
    showspix.classList.add('hoveer');
showspix.setAttribute('style','color: '+ finalColor +';display: flex; justify-content: center; align-items: center; border: 3px solid '+ finalColor +'; border-radius: 10px; width: 120px; height: 25px')
showspix.textContent = "Pixels : " + slider.value * slider.value;
// showspix.textContent = "Pixel Size " ;
slider.addEventListener('input', function()
{
    showspix.textContent = "Pixels : " + slider.value * slider.value;
});
sliderfunc.appendChild(showspix);



var aniMationn =  `@keyframes titleAnimation
{
    0%{transform: translateY(-90px);}
    50%{transform: translateY(30px);}
    70%{transform: translateY(0px);}
    80%{transform: translateY(20px);}
    90%{transform: translateY(-10px);}
    100%{transform: translateY(-0px);}
    
}`;

var styleEle = document.createElement('style');

 styleEle.innerHTML = aniMationn;

document.head.appendChild(styleEle);



const title = document.createElement('div');
title.classList.add('title');
title.setAttribute('style','animation: titleAnimation 3s 1;display: flex;  ;font-family: "Oswald", sans-serif; font-family: "Teko", sans-serif; font-size: 50px; color: '+ finalColor +';')
title.textContent = "Etch-a-Sketch";
bigContainer.appendChild(title);

// var  myAnimation =
// ` @keyframes titleAnimation
// {
//     0%{transform: translateY(-20px)}
    
//     100%{transform: translateY(20px)}
    
// }`;

// var newStyle = document.createElement('style');
// newStyle.innerHTML = myAnimation;
// document.head.appendChild('newStyle');

// title.style.animation = 'titleAnimation';




const seccontainer = document.createElement('div');
seccontainer.classList.add('seccontainer');
seccontainer.setAttribute('style',' display: flex; flex-direction: column; justify-content: center; gap: 30px; align-items: center ; height: 1000px; padding-bottom: 200px');
document.body.appendChild(seccontainer);
// seccontainer.textContent = "helo";

const button = document.createElement('button');
button.classList.add('btn');
button.setAttribute('style','color: '+finalColor+';background: transparent; font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
button.textContent = "Black";
seccontainer.append(button);

const button2 = document.createElement('button');
button2.classList.add('btn');
button2.setAttribute('style','color: '+finalColor+'; background: transparent; font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
button2.textContent = "RGB ";
seccontainer.append(button2);

const button4 = document.createElement('button');
button4.classList.add('btn');
button4.setAttribute('style','color: '+finalColor+'; background: transparent; font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
button4.textContent = "Eraser";
seccontainer.append(button4);

const button3 = document.createElement('button');
button3.classList.add('btn');
button3.setAttribute('style','color: '+finalColor+'; background: transparent; font-family:Arial, Helvetica, sans-serif ; font-size: 16px ; border: 3px solid '+finalColor+'; border-radius: 8px; width: 120px; height: 30px;')
button3.textContent = "Clear ";
seccontainer.append(button3);


button.classList.add('hoveer');
button2.classList.add('hoveer');
button3.classList.add('hoveer');
button4.classList.add('hoveer');

const hoveer = document.querySelectorAll('.hoveer');
hoveer.forEach(function(e)
{
e.addEventListener('mouseover', function()
{       
        e.style.color = 'white'
        e.style.background = ''+finalColor+''
        e.style.transform = 'translateY(-10px)';
        e.style.transition = '0.5s ';
        
    })
    e.addEventListener('mouseout', function()
    {
        e.style.transform = 'translateY(0px)';
        e.style.color = ''+finalColor+'';
        e.style.background = 'transparent';
        e.style.transition = '1s ';

})
});

// hoveer.addEventListener('mouseover', function()
// {
// });












// slider.setAttribute('height','10px');
// bigContainer.appendChild(slider);
// seccontainer.append(button2);
let gridSize = 16;
container.setAttribute('style',' border: 5px solid '+ finalColor +'; width: 700px; height: 700px;  display: grid; grid-template-columns: repeat('+ gridSize +', 1fr); box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;')
let gridSizee =  gridSize * gridSize;
for(i=1; i <= gridSizee; i++)
{
    const gridItems = document.createElement('div');
    gridItems.classList.add('gridItem');
    gridItems.setAttribute('style', 'border: 1px solid '+finalColor+'; min-height: 2px; min-width: 2px; ; display: flex; flex-wrap: wrap; background: tranparent;');
    // gridItems.setAttribute('style', ' min-height: 2px; min-width: 2px; ; display: flex; flex-wrap: wrap;');
    container.appendChild(gridItems);
    gridItems.addEventListener('mouseover', function()   
                        {  
                            //    if(gridItems.classList.contains('gridIem'))
                            //    {
                                const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
                                gridItems.style.background = colors[Math.floor(Math.random() * 6)];
                                gridItems.style.transition = '0.5s';

                                // const gridhover = document.querySelectorAll('gridItem');
                                    // gridItems.addEventListener('mouseover', function()
                                    // {       
                                    //     // e.style.color = 'white'
                                    //         // e.style.background = ''+finalColor+''
                                    //         gridItems.style.zIndex = '-200px'
                                    //         gridItems.style.transform = 'translateY(-3px)';
                                    //  gridItems.style.transition = '0.2 ';
        
                                    // })
                                    //   gridItems.addEventListener('mouseout', function()
                                    //     {
                                    //         gridItems.style.transform = 'translateY(0px)';
                                    //         // e.style.color = ''+finalColor+'';
                                    //         // e.style.background = 'transparent';
                                    //         gridItems.style.transition = '1s ';
                                    // })
});


                            // })
                                
    // const hover = document.querySelectorAll('.gridItem');
    
    button2.addEventListener('click',function()
    {

        gridItems.addEventListener('mouseover', function()   
        {  
            //    if(gridItems.classList.contains('gridIem'))
            //    {
                const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
                gridItems.style.background = colors[Math.floor(Math.random() * 6)];
                gridItems.style.transition = '0.5s';

            })
            
        });

    button.addEventListener('click', function()
    {
        gridItems.addEventListener('mouseover', function()
        {
            
            // alert("now is the black color");
            gridItems.style.background = 'black';
            gridItems.style.transition = '0.5s';

            
        })
    });
            
    button4.addEventListener('click', function()
    {
        gridItems.addEventListener('mouseover', function()
        {

                    // alert("now is the black color");
                    gridItems.style.background = 'transparent';
                    gridItems.style.transition = '0.5s';

                })
            });
            
            
button3.addEventListener('click',function()
{
    gridItems.style.background = 'transparent';
    gridItems.style.transition = '2s';

})

}



    // container.style.borderRadius = '3%';
    container.style.border = '7px solid '+finalColor+''; 
        slider.addEventListener('input', function(event)
        {
            while(container.firstChild)
            {
                container.firstChild.remove();
            }
            gridSize= parseInt(event.target.value);
            container.setAttribute('style',' border: 7px solid '+ finalColor +'; width: 700px; height: 700px;  display: grid; grid-template-columns: repeat('+ gridSize +', 1fr); box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; ')
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
                    gridItems.setAttribute('style', 'background: tranparent; border: 1px solid ' +finalColor+ '; min-height: 2px; min-width: 2px; ; display: flex; flex-wrap: wrap;');
                    // gridItems.setAttribute('style', ' min-height: 2px; min-width: 2px; ; display: flex; flex-wrap: wrap;');
                    container.appendChild(gridItems);
                    // const hover = document.querySelectorAll('.gridItem');

                    gridItems.addEventListener('mouseover', function()   
                    {  
                        //    if(gridItems.classList.contains('gridIem'))
                        //    {
                            const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
                            gridItems.style.background = colors[Math.floor(Math.random() * 6)];
                            gridItems.style.transition = '0.5s';

                        })


                    button2.addEventListener('click',function()
                    {
                        
                        gridItems.addEventListener('mouseover', function()   
                        {  
                            //    if(gridItems.classList.contains('gridIem'))
                            //    {
                                const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
                                gridItems.style.background = colors[Math.floor(Math.random() * 6)];
                                gridItems.style.transition = '0.5s';

                            })
                                
                    });  
                    
                    button4.addEventListener('click', function()
                    {
                        gridItems.addEventListener('mouseover', function()
                        {
                
                                    // alert("now is the black color");
                                    gridItems.style.background = 'transparent';
                                    gridItems.style.transition = '0.5s';

                                    
                                })
                            });
                            

                    button.addEventListener('click', function()
                    {
                        gridItems.addEventListener('mouseover', function()
                        {
                            
                            // alert("now is the black color");
                            
                            gridItems.style.background = 'black';
                            gridItems.style.transition = '0.5s';
                                    
                        })
                    });

                    button3.addEventListener('click',function()
{
    gridItems.style.background = 'transparent';
    gridItems.style.transition = '2s';

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
