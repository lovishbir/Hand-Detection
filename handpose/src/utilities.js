// Points for the Fingers
const fingerJoints = {
    thumb: [0,1,2,3,4],
    indexFinger: [0,5,6,7,8], 
    middleFinger: [0,9,10,11,12],
    ringFinger: [0,13,14,15,16],
    pinky: [0,17,18,19,20],
};
const style = {
    0:{ color: "yellow", size: 15},
    1:{ color: "gold", size: 6},
    2:{ color: "green", size: 10},
    3:{ color: "gold", size: 6},
    4:{ color: "gold", size: 6},
    5:{ color: "purple", size: 10},
    6:{ color: "gold", size: 6},
    7:{ color: "gold", size: 6},
    8:{ color: "gold", size: 6},
    9:{ color: "blue", size: 10},
    10:{ color: "gold", size: 6},
    11:{ color: "gold", size: 6},
    12:{ color: "gold", size: 6},
    13:{ color: "red", size: 10},
    14:{ color: "gold", size: 6},
    15:{ color: "gold", size: 6},
    16:{ color: "gold", size: 6},
    17:{ color: "orange", size: 10},
    18:{ color: "gold", size: 6},
    19:{ color: "gold", size: 6},
    20:{ color: "gold", size: 6},
}


// Drawing Function
export const drawHand = (predictions, ctx) => {
    if (predictions.length > 0) {
        predictions.forEach((prediction) => {
            const landmarks = prediction.landmarks;

            // Draw dots
            for (let i = 0; i < landmarks.length; i++) {
                const x = landmarks[i][0];
                const y = landmarks[i][1];

                ctx.beginPath();
                ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);
                //line color
                //ctx.fillStyle = "gray";
                ctx.fillStyle = style[i]['color'];
                ctx.fill();
            }

            // Draw lines
            const fingers = Object.keys(fingerJoints);
            for (let i = 0; i < fingers.length; i++) {
                const finger = fingers[i];
                const points = fingerJoints[finger];
                
                for (let j = 0; j < points.length - 1; j++) {
                    const firstIndex = points[j];
                    const secondIndex = points[j + 1];

                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstIndex][0],
                        landmarks[firstIndex][1]
                    );
                    ctx.lineTo(
                        landmarks[secondIndex][0],
                        landmarks[secondIndex][1]
                    );
                    ctx.strokeStyle = "gold";
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
            }
        });
    }
};