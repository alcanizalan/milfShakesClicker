import {useState} from 'react'

export default function PointsButton({handleClickButton, idButton, imgButton, activeButton, costButton, index}) {
    const [show, setShow] = useState(false)
    return(
        <div 
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={`mensageBotones`}
            onClick={handleClickButton}
            key={idButton}
        >
            <button title='mensaje' className="shopItem">
                <img className={`imgShop ${activeButton ? "buttonActive" : ""}`} src={imgButton} alt="Imagen Milfo" />
            </button>
            <div className={`mensage ${show ? "show" : ""}`}>
                <span>{costButton}</span><img className='costImg' src="./src/assets/mpoints.png" alt="" />
            </div> 
        </div>
    )
}