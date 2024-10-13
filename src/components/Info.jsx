import React from "react";

function Info() {
    return (
        <div className="Info--container">
            <img src="/DSC_5814.JPG" alt="" />
            <h3 className="Info--name">Saad Bin Masood</h3>
            <h4 className="Info--role">Full Stack Developer</h4>
            <a className="Info--mail-btn" href="mailto:saadmasood192@gmail.com">
                <i className="fa fa-envelope"> </i>
                <span> Email</span>
            </a>
        </div>
    );
}

export default Info;
