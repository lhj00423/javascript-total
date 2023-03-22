//두 수 사이에 랜덤 실수를 반환해 주는 함수
function randomFloat(min, max){
    return Math.random() * (max-min+1) + min;
}
//두점(x1,y1),(x2,y2) 사이의 거리를 반환해 주는 함수
function distance(x1,y1,x2,y2){
    let disX = x2 - x1;
    let disY = y2 - y1;
    //두점의 거리구하기 (공식임)
    return Math.sqrt( disX * disX + disY +disY);
}
export default {randomFloat, distance};