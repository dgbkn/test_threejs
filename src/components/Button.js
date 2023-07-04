import { Html } from "@react-three/drei";
import Popup from "reactjs-popup";
// import 'reactjs-popup/dist/index.css';
import styles from './Button.module.css';
import ScrollingModal from "./ScrollingModal";

export default function Button({ position,onClick }) {
    return (
        <>
            <Html position={position} contextMenu="Dev">

                {/* <Popup trigger=
                    {<button  className={styles.buttonSexy}> Question 1</button>}
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
                </Popup> */}
        <Button colorScheme='blue' className={styles.buttonSexy} mt={3} onClick={onClick}>
                Trigger modal
            </Button>
            </Html>
        </>

    )
}
