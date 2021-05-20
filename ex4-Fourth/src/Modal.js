import { useEffect, useState } from 'react';
import './Modal.css';

function Modal() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 2500);
    }, []);

    return (
        <>
            {show && (
                <footer className="footer">
                    <div>
                        <img
                            alt="hotChics"
                            src="https://image.winudf.com/v2/image1/Y29tLmtpYXNvLmdlaWVsX3NjcmVlbl8wXzE1ODg4MjIzNTZfMDc2/screen-0.jpg?fakeurl=1&type=.jpg"
                            height="250px"
                        />
                        <div onClick={(e) => setShow(false)}>[X]</div>
                    </div>
                </footer>
            )}
        </>
    );
}

export default Modal;
