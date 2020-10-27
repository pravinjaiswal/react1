

const add = (a,b) =>{

        let sum =a+b;
        return sum;
}


const sub = (a,b) =>{

    let diff =a-b;
    return diff;
}


const mul =(a,b) =>{
    let tot =a*b;
    return tot;
}

const divi = (c,d) =>{
    let p = c/d;
    p=p.toFixed(2);
    return p;
}
export { add , sub , mul ,divi };