import React from 'react'

export default function Footer() {
    return (
        <footer className="container">
            <div className="left"></div>
            <div className="right">made with <i style={{color: 'red'}} className="fa fa-heart0"></i> by <a href="http://afaithraf.github.io/my-portfolio">Ashraf</a></div>
            <style jsx>{`
            .container {
                background: #f7d345;
                width: 100%;
                display: flex;
                padding: 10px 20vw;
                justify-content: space-between;
            }
            a {
                font-weight: bold;
                color: #010101;
                text-decoration: none;
            }

            `}</style>
        </footer>
    )
}
