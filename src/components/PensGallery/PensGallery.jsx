import { readFromDatabase } from "../../services/readFromDatabase"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setPens } from "../../redux/pensSlice";

function PensGallery() {

    const dispatch = useDispatch()
    const pens = useSelector((state) => state.pens.savedPens)

    const getPens = async()=> {
        try{
            const snapshotValue = await readFromDatabase();
            console.log(Object.values(snapshotValue))
            dispatch(setPens(Object.values(snapshotValue)));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    } 

    useEffect(()=>{
        getPens()
    }, [])
    
    
  return (
    <div>
        {pens && pens.map( (pen, idx) => {return(<h2 key={idx}>{pen.title}</h2>)})}
    </div>
  )
}

export default PensGallery