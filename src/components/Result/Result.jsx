import React from 'react';

const Result = ({code}) => {


    return (
        <iframe srcDoc={'<!DOCTYPE html><html><head><style>'+code.css+'</style></head><body>'+code.html+'</body><script>'+code.js+'</script></html>'}>
        </iframe>
    );
}

export default Result;
