import './Footer.css'
import React from "react";
function Footer(){
    return(
        <div className="footer">
        <section className="socialMedia" id="social">
             <a href=''> <i class="fa-brands fa-facebook"></i></a>
            <a href=''><i class="fa-brands fa-whatsapp"></i></a>
            <a href=''> <i class="fa-solid fa-phone"></i></a>
            <a href=''><i class="fa-brands fa-instagram"></i></a>
            <a href=''><i class="fa-brands fa-twitter"></i></a>
        </section>
        <p>Author : Bayan Banat </p>
        </div>
        
    );
}

export default Footer;