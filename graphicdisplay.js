class GraphicDisplay{
    constructor(height,width){
        this.height = 40;
        this.width = 40;
    }
    pixlarcol = [];
    canvas = document.getElementById("canvas").getContext("2d");

    Pixelmap(){
        for(y = 0; y < 400; y += 10){
            for(x = 0; x < 400; x +=10){
                r = Math.floor(Math.random()*256);
                g = Math.floor(Math.random()*256);
                b = Math.floor(Math.random()*256);
                canvas.fillStyle = `rgb(${r},${g},${b})`;
                canvas.fillRect(x, y, 10, 10);
                pixlarcol.push([r,g,b]);
            }        
        }
    }

    clear(r,g,b){
        canvas.fillStyle = `rgb(${r},${g},${b})`;
        canvas.fillRect(0,0,400,400);
    }

    fadeOut(){
        var r = 0;
        var g = 0;
        var b = 0;
        z = 0;
        for(y = 0; y < 400; y += 10){
            for(x = 0; x < 400; x += 10){
                r += 6.375;
                g += 6.375;
                b += 6.375;
                canvas.fillStyle = `rgb(${r},${g},${b})`;
                canvas.fillRect(x, y, 10, 10);
                pixlarcol[z] = [r,g,b];
                z++;
            }  
            r = 0;
            g = 0;
            b = 0;      
        }   
    }

    scrollLeft(gånger){
        for(y = 0; y < 400; y += 10){
            for(x = 0; x < gånger*10; x += 10){
                r = 0;
                g = 0;
                b = 0;
                canvas.fillStyle = `rgb(${r},${g},${b})`;
                canvas.fillRect(x, y, 10, 10);
            }          
        }
    }

    scrollRight(gånger){
        for(y = 0; y < 400; y += 10){
            for(x = 0; x < 400-gånger*10; x += 10){
                r = pixlarcol[x/10*y/10][0];
                g = pixlarcol[x/10*y/10][1];
                b = pixlarcol[x/10*y/10][2];
                canvas.fillStyle = `rgb(${r},${g},${b})`;
                canvas.fillRect(x, y, 10, 10);
            }
            for(x = 400-gånger*10; x < 400; x +=10){
                r = 0;
                g = 0;
                b = 0;
                canvas.fillStyle = `rgb(${r},${g},${b})`;
                canvas.fillRect(x, y, 10, 10);
            }
        }
    }

    PutPixel(x,y,r,g,b){
        canvas.fillStyle = `rgb(${r},${g},${b})`;
        canvas.fillRect(x, y, 10, 10);
    }

    line(x1,y1,x2,y2){
        if(x1 < x2 && y1 < y2){
            for(x1 = x1; x1 <= x2; x1 +=10){
                canvas.fillStyle = `rgb(${0},${0},${0})`;
                canvas.fillRect(x1, y1, 10, 10); 
                y1 += 10;
            }
        }
        else if(x1 > x2 && y1 < y2){
            for(y1 = y1; y1 <= y2; y1 += 10){
                canvas.fillStyle = `rgb(${0},${0},${0})`;
                canvas.fillRect(x1, y1, 10, 10); 
                x1 -= 10;
            }
        }
        else if(x1 < x2 && y1 > y2){
            for(x1 = x1; x1 <= x2; x1 +=10){
                canvas.fillStyle = `rgb(${0},${0},${0})`;
                canvas.fillRect(x1, y1, 10, 10); 
                y1 -= 10;
            }
        }
        else
        for(x1 = x1; x1 >= x2; x1 -=10){
            canvas.fillStyle = `rgb(${0},${0},${0})`;
            canvas.fillRect(x1, y1, 10, 10); 
            y1 += 10;
        }
    }

    Circle(x,y,rad,r,g,b){
        canvas.beginPath();
        canvas.arc(x, y, rad, 0, 2 * Math.PI);
        canvas.strokeStyle = `rgb(${r},${g},${b})`;
        canvas.stroke();
    }

    CirclePattern(){
        for(y = 0; y < 400; y += 10){
            for(x = 0; x < 400; x += 10){
                r = pixlarcol[x/10*y/10][0];
                g = pixlarcol[x/10*y/10][1];
                b = pixlarcol[x/10*y/10][2];
                canvas.fillStyle = `rgb(${r},${g},${b})`;
                canvas.fillRect(x, y, 10, 10);
            }
        }
    }

    StairsPattern(){
        for(y = 0; y < 400; y += 10){
            for(x = 0; x < 400; x += 10){
                r = pixlarcol[x/10+y/10][0];
                g = pixlarcol[x/10+y/10][1];
                b = pixlarcol[x/10+y/10][2];
                canvas.fillStyle = `rgb(${r},${g},${b})`;
                canvas.fillRect(x, y, 10, 10);
            }
        }
    }
}

const Display = new GraphicDisplay;
