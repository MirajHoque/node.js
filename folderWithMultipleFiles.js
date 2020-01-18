const fs = require('fs');
fs.readdir('newFolder', (err, files) =>
    //readdir(folder name,callback(err,files)
    //files is an array that contains the files name inside folder
    {
        if (err)
            console.log(err);
        else
        //console.log(files);
            for (let elements of files) {
            fs.unlink('./newFolder/' + elements, (err) => {
                //fs.unlink('./folder name/'+name of the files, (err)
                if (err)
                    console.log(err);
                else
                    console.log('File deleted');
            });
        }
    }
);