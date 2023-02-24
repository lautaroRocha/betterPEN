const SavingPenModal = ({isOpen, closeModal}) => {

    return(
        <>
        <div className="saving-modal-overlay" style={isOpen ? {display: 'flex'} : {display: 'none'}} onClick={closeModal} />
          <form className="saving-modal" style={isOpen ? {display: 'flex'} : {display: 'none'}}> 
          <h2>
              Saving Pen
          </h2>
          <label htmlFor="author">Author:
              <input type="text" name="author" placeholder='Anonymus Programmer'/>
          </label>
          <label htmlFor="title">Title:
              <input type="text" name="title" placeholder='Anonymus Programmer'/>
          </label>
          <button>SAVE</button>
      </form>
      </>
    )

}

export default SavingPenModal