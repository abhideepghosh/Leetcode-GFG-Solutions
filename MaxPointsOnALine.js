/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(points.length === 1) return 1;
    let count = 0;
    for(let coordinateFirst of points){
        const slope = new Map();
        for(let coordinateSecond of points){
           
            if(coordinateFirst === coordinateSecond) continue;
            else{
                let currentSlope = Infinity;
                if(coordinateSecond[0] - coordinateFirst[0] !== 0)
                    currentSlope = (coordinateSecond[1] - coordinateFirst[1]) / (coordinateSecond[0] - coordinateFirst[0]);
                if(slope.has(currentSlope)) {
                    slope.set(currentSlope, slope.get(currentSlope) + 1);
                }else {
                    slope.set(currentSlope, 1);
                }
                count = Math.max(count, slope.get(currentSlope));
            }
        }
    }
    return count + 1;
};
