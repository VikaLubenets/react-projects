import React from "react"
import Image from 'next/image'
import pinIcon from '@/assets/pin.svg'

export const Footer = () => {
    return (
      <footer className='footer'>
        <div className="footer-block">
            <h3 className="footer-title">For questions and suggestions</h3>
            <div className="footer-line">
                        <a className="footer-line" href="mailto:email@shelter.com">
                            <p className="footer-text">email@shelter.com</p>
                        </a>
                    </div>
                    <div className="footer-line">
                        <a className="footer-line" href="tel:+136745677554">
                            <p className="footer-text">+13 674 567 75 54</p>
                        </a>
                    </div>
        </div>
        <div className="footer-block">
            <h3 className="footer-title">We are waiting for your visit</h3>
            <div className="footer-line">
                        <a className="footer-line" target="_blank"
                            href="https://www.google.com/maps/place/Central+St,+Boston,+MA,+%D0%A1%D0%A8%D0%90/@42.3588432,-71.0551304,17z/data=!4m15!1m8!3m7!1s0x89e370865345ba21:0x44f6c81aa9436fb7!2zQ2VudHJhbCBTdCwgQm9zdG9uLCBNQSwg0KHQqNCQ!3b1!8m2!3d42.3588393!4d-71.0529417!16s%2Fg%2F1tfvj6dm!3m5!1s0x89e370865345ba21:0x44f6c81aa9436fb7!8m2!3d42.3588393!4d-71.0529417!16s%2Fg%2F1tfvj6dm">
                            <Image className="location-icon"
                                src={pinIcon}
                                alt="pin-icon"
                                width={22}
                                height={32}
                                />
                            <p className="footer-text">1 Central Street, Boston (entrance&nbsp;from&nbsp;the&nbsp;store)</p>
                        </a>
                    </div>
                    <div className="footer-line">
                        <a className="footer-line" target="_blank"
                            href="https://www.google.com/maps/place/South+Park+Court,+18+S+Park+Rd,+London+SW19+8TD,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/@51.4202225,-0.2043792,17z/data=!3m1!4b1!4m6!3m5!1s0x487608baa7401b31:0x873a95ca58e122b2!8m2!3d51.4202192!4d-0.200152!16s%2Fg%2F11c1z48z8w">
                            <Image className="location-icon"
                                src={pinIcon}
                                alt="pin-icon"
                                width={22}
                                height={32}
                                />
                            <p className="footer-text">18 South Park, London </p>
                        </a>
                    </div>
        </div>

      </footer>
    );
}