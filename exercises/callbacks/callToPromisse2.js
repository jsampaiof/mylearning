async function readFile() {
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const fileContent = 'This is the file content.';
                console.log(fileContent);
                resolve(fileContent);
            }, 2000);
        });
    }catch(error){
        console.error(error);
    };
};

readFile();
