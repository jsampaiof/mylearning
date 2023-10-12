async function fetchData(){
    const Data = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {message: 'Data fetched successfully'};
            resolve(data)
        }, 2000);
    });
    return Data;
};

async function processFetchedData(data){
    const processed = new Promise((resolve, reject) => {
        setTimeout(() =>{
            const processedData = `${data.message} and processed`;
            console.log(processedData);
            resolve();
        }, 1000);
    });
    return processed;
}

fetchData().then(processFetchedData);