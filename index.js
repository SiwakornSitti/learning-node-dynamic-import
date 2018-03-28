
(async()=>{
    const selected = 'add';
    let fns;
    if(selected === 'add') {
        fns = await import("./libs/add")
    } else {
        fns = await import('./libs/subtract')
    }
    const result = fns(10,8);
    console.log(result)
})()
