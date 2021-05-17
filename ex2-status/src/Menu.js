import { useState } from "react"

function Menu(){
    const [open, setOpen] = useState(false);
    return (
        <>
            <button className="Jesse" onClick={() => setOpen(true)}>
                Touch Me!
            </button>
            {open && (
                <div className="modal-bg">
                    <div className="modal-fg">
                        <h1>Hi BiTCH!</h1>
                        <img
                            onClick={() => setOpen(false)}
                            src="https://i.pinimg.com/originals/8a/f2/ab/8af2ab34e376ca4b1d1b0a0babdc0a47.jpg"
                            alt="Jesse P."
                            width="300px"
                            height="400px"
                        />
                        
                    </div>
                </div>
            )}
        </>
    );
}


export default Menu