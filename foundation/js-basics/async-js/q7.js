/*
Sequential Execution with Callbacks:
- Create a function 'series' that sequentially does the following.
1. Read the contents of a.txt using UTF-8 encoding.
2. Wait for 3 seconds.
3. Write the contents of 'a.txt in 'b.txt'
4. Remove any extra spacing from 'a. txt' (refer to kirat's async 'file-cleaner' problem from week 1)
5. delete the contents of 'a. txt
6. delete the contents of 'b. txt"
*/

const fs= require('fs')

function cleaner(data){
    var a= data.split(' ');
    var ar='';
    for(var i=0;i<a.length;i++){
        if(a[i]!=' ')
            ar+=a[i]+' ';
    }
    return ar;
}

function series(){
    fs.readFile('a.txt', 'utf-8', (err, data)=>{
        setTimeout(()=>{
            fs.writeFile('b.txt', data, 'utf-8', (err)=>{
                if(err)
                    throw err;
            })
        }, 3000)
        var cdata= cleaner(data);
        fs.writeFile('a.txt', cdata, 'utf-8', (err)=>{
            if(err)
                throw err
        })
    })
    function deleteContents(err){
        if(err)
            console.error(err);
    }
    fs.truncate('a.txt', 0, deleteContents);
    fs.truncate('b.txt', 0, deleteContents);
}

series()