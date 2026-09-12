

const ButtonComp = ({bottontext, color, bgc, width}) => {
  return (
    <>
      <button className="customized-button" 
        style={{color, backgroundColor: bgc, width: width ? null : width }}>

        {bottontext}

      </button>
    </>
  )
    
}

export default ButtonComp;