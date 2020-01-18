const file = require('fs');
/*
file.writeFile('example.txt', "Hello gorgeous people, How is going on?", (err) => {
   //create a file
    //writeFile('file name',data,(callback function)
            if (err)
                console.log(err);
            else {
                console.log('File successfully created');
                file.readFile('example.txt', 'utf8', (err, files) => {
                        //readFile('file name', 'encoding format', (error, file)
                        if (err)
                            console.log(err);
                        else
                            console.log(files);
                    }

                )

            }

        }

    )
   
    */

//Rename
/*
file.rename('example.txt', 'people.txt', (err) => 
{
 //rename(''old file name','new file name',(err) 
    if (err)
        console.log(err);
    else
        console.log('Renamed Successfully');
});
*/

//append data
/*
file.appendFile('people.txt', 'Some data being appended', (err) => {
    //appendFile('file name','data',callback(err)
    if (err)
        console.log(err);
    else
        console.log('Successfully data appended');

})
*/

//delete file
file.unlink('people.txt', (err) => {
    //unlink('file name', callback(err)
    if (err)
        console.log(err);
    else
        console.log('file deleted');
});