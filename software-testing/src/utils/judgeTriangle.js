export const judgeTriangle = ({A,B,C})=>{
    const sides = [A,B,C].map(item =>{
        if(item !==''){
            return isNaN(+item) ? item : +item
        }
    })
    console.log(sides)
    if(!sides.every(item => typeof item === 'number'))
        return 'error'
    sides.sort((a,b)=>a-b)
    if(sides[0]<=0||sides[0]+sides[1]<=sides[2])
        return '不构成三角形'
    if(sides[0]===sides[2])
        return '等边三角形'
    if(sides[0]===sides[1]||sides[1]===sides[2])
        return '等腰三角形'

    return '一般三角形'
}