import React from 'react'

export default function Navbar() {
    return (
        <div className="container">
            <div className="content">
                <div className="logo">
                    <img src="assets/img/logo.png" alt="logo" />
                </div>
                <ul className="navigation">
                    <li><a href="/">Home</a></li>
                    <li className="active"><a href="/">About</a></li>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Help</a></li>
                    <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>

            <style jsx>{`
            .container{
                position: absolute;
                top: 0;
                width: 100%;
                display: flex;
            }
            .content{
                width: 70%;
                height: 100px;
                margin: 0 auto;
                background: #ebebebb0;
                border-bottom-left-radius: 60px;
                border-bottom-right-radius: 60px;
                display: flex;
            }
            .logo{
                margin: auto;
                margin-left: 100px;
            }
            .logo img{
                height: 33px;
            }
            .navigation{
                list-style: none;
                display: flex;
                margin: auto;
                margin-right: 50px;
            }
            .navigation li{
                margin: 0 20px;
            }
            .navigation a{
                padding: 5px;
                text-decoration: none;
                font-size: 24px;
                color: #010101;
                font-weight: bold;
            }
            .navigation a:hover{
                text-decoration: underline;
            }
            .navigation .active a{
                color: #fc9e01;
            }
            @media only screen and (max-width: 800px) {
                .navigation{
                    display: none;
                }
                .logo{
                    margin: auto;
                }
            }
            `}</style>
        </div>
    )
}
