import React, {useContext} from 'react';
import { CodeContext } from '../../context/CodeContext';

const Result = () => {

    const {html, css, js} = useContext(CodeContext)

    const resultHtml = '<!DOCTYPE html><html><head><style>'+css+'</style></head><body>'+html+'</body><script>'+js+'</script></html>'

    console.log('render result')


    return (
        <iframe srcDoc={resultHtml} style={{backgroundColor: '#f5f5f5'}}>
        </iframe>
    );
}

export default Result;
