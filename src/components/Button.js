import Popup from "reactjs-popup";
// import 'reactjs-popup/dist/index.css';

export default function Button() {
  return (
    <>
            <Popup trigger=
                {<button> Question 1</button>}
                modal >
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
    </>

  )
}
