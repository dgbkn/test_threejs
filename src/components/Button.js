import { Html } from "@react-three/drei";
import Popup from "reactjs-popup";
// import 'reactjs-popup/dist/index.css';

export default function Button({ position }) {
    return (
        <>
            <Html position={position} contextMenu="Dev" className="popupButton">

                <Popup trigger=
                    {<button> Question 1</button>}
                    modal nested={false}>
                    {
                        close => (
                            <div className='modal'>
                                <div className='content'>
                                    Welcome to CCS Event!!!
                                </div>
                                <div>
                                    <button onClick=
                                        {() => close()}>
                                        Close modal
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Popup>
            </Html>
        </>

    )
}
