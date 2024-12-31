// Drawing Function
export const drawHand = (predictions, ctx) =>{
    //Check if we have any predictions
    if (predictions.length >0){
        //Looping through each prediction 
        predictions.forEach((prediction) => {
            //Grabing Landmarks
             const landmarks = prediction.landmarks;

             //Looping throught the landmarks and drawing them
             for(let i = 0; i < landmarks.length; i++){
                //Get X point
                const x = landmarks[i][0];
                //Get Y point
                const y = landmarks[i][1];
                //Start Drawing
                ctx.beginPath();
                ctx.arc(x,y,5,0,3 * Math.PI);

                //Set Line Color
                ctx.fillStyle = "indigo";
                ctx.fill();
             }
            });
        }
};