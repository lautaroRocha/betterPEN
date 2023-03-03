import { saveToDatabase } from "../../services/saveToDatabase"
import {useState} from 'react'
import { useSelector } from "react-redux"
import toast from 'react-hot-toast';

const DEFAULT_VALUES = {
    author : 'Anonymus Programmer',
    title : 'Anonymos Prototype'
}

const SavingPenModal = ({isOpen, closeModal}) => {

    const code = useSelector((state) => state.code)

    const {title, author}  = code

    const recoveredValues = {
        author : author,
        title : title
    }
    
    const [penData, setPenData] = useState(Boolean(title) ? recoveredValues : DEFAULT_VALUES)

    const uploadPen = (e) => {
        e.preventDefault()
        const successNotify = () => toast.success('Pen saved!')
        const {title, author} = penData
        saveToDatabase(title, author, code)
        setTimeout(closeModal, 2000)
        setTimeout(successNotify, 3000)
    }

    return(
        <>
        <div className="saving-modal-overlay" style={isOpen ? {display: 'flex'} : {display: 'none'}} onClick={closeModal} />
          <form className="saving-modal" style={isOpen ? {display: 'flex'} : {display: 'none'}} onSubmit={uploadPen}> 
          <h2>
              Saving Pen
          </h2>
          <label htmlFor="author">Author:
              <input type="text" name="author" placeholder={penData.author} onChange={(e) => {setPenData({author : e.target.value, title: penData.title})}}/>
          </label>
          <label htmlFor="title">Title:
              <input type="text" name="title" placeholder={penData.title} onChange={(e) => {setPenData({author : penData.author, title: e.target.value})}}/>
          </label>
          <button>SAVE</button>
      </form>
      </>
    )

}

export default SavingPenModal