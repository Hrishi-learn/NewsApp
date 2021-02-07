import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./News.css"

function News({news}) {
    return (
        <div className='news-container'>
            <div className='news-subcontainer'>
                    {news.map(article=>{
                        return (
                            <div className='card' key={uuidv4()}>
                                <div className='card-body'>
                                    <h5 className='card-title'>{article.title}</h5>
                                    <img src={article.urlToImage} className='card-img' alt='article-image'/>
                                    <p className='card-text'>{article.description}<a href={article.url} target='blank'>read more</a></p>
                                    <h6 className='card-subtitle '>Source: {article.source.name}</h6>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default News
