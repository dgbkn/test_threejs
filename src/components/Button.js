import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

export default function Button() {
  return (
    <>
            <Popup trigger=
                {<button> Question 1</button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Welcome to GFG!!!
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
    </>

  )
}
