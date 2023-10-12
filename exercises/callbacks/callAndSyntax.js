function calculateSum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = a + b;
            if(result){
                console.log(result);
                resolve();
            }else{
                reject(error);
            };
        }, 2000);
    });
};
  
calculateSum("1", 3).catch((error)=>{
    console.log("Error: ", error)
});
  