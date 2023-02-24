import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Carousel } from 'react-bootstrap';

// import Feed from './Feed.js'

import './InstaFeeds.css'

const InstaFeeds = ({token, limit}) => {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
            
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${token}`)
                .then((res) => {
                    setFeedsData(res.data.data)
                })
          } catch (err) {
              console.log('error')
          }
        }
        
        // manually call the fetch function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [limit])

    return (

        <Carousel interval={3000} indicators={false} id="feed_override">
            {feeds.map((image, index, images) => {
                if (index % 6 === 0) {
                    const imageSet = images.slice(index, index + 6);
                    return (
                        <Carousel.Item key={index}>
                            <div className="row">
                                {imageSet.map((image) => (
                                    <div className="col-md-2" key={image.id}>
                                        <img src={image.media_url} alt={image.caption} className="img-fluid" />
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    );
                }
                return null;
            })}
        </Carousel>
    );
}

export default InstaFeeds;