import { readFromDatabase } from "../../services/readFromDatabase"
import { useEffect } from "react"

function PensGallery() {

    const getPens = async()=> {
        try{
            const snapshotValue = await readFromDatabase();
            console.log("Snapshot value:", snapshotValue);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error
        }
    } 

    useEffect(()=>{
        getPens()
    }, [])


  return (
    <div>PensGallery</div>
  )
}

export default PensGallery