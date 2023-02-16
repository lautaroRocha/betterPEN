import {useSelector} from 'react-redux'
import useEncodeCode from '../../hooks/useEncodeCode';

const Result = () => {

    const code = useSelector((state) => state.code)

   const encodeOnChange = useEncodeCode()

    const {html, css, js} = code

    const resultHtml = '<!DOCTYPE html><html><head><style>'+css+'</style></head><body>'+html+'</body><script>'+js+'</script></html>'


    return (
        <iframe srcDoc={resultHtml} style={{backgroundColor: '#f5f5f5'}}>
        </iframe>
    );
}

export default Result;
