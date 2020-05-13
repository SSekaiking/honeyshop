import React from 'react'

export default function SmallPost(props) {
    return (
        <div className="box">
            <a href="/post/1">
                <div className="thumb">
                    <img src={props.img} alt="honey" />
                </div>
                <div className="title">
                    <h2>{props.title}</h2>
                </div>
            </a>
            <style jsx>{`
            .box{
                width: 300px;
                border: 1px solid #eee;
                margin: 20px;
                background: #fff;
                overflow: hidden;
                border-radius: 20px;
            }
            .box:hover{
                border: 1px solid #fc9e01;
            }
            .box a{
                text-decoration: none;
                color: #101010;
            }
            .box .thumb{
                height: 300px;
                width: 100%;
            }
            .box .thumb img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .box .title {
                margin: 20px;
            }
            .box .title h2{
                font-size: 20px;
                font-weight: 600;
            }
            `}</style>
        </div>
    )
}
