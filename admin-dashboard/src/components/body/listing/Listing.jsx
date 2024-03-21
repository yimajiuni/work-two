import React from 'react'
import './listing.css'
import './listing.scss'

import img from "../../../assets/image1.png"
import img1 from "../../../assets/image4.png"
import img2 from "../../../assets/image5.png"
import img3 from "../../../assets/image8.png"
import img4 from "../../../assets/image3.png"
import img5 from "../../../assets/image10.png"
import user from "../../../assets/user2.png"
import user1 from "../../../assets/user1.png"
import user2 from "../../../assets/user2.png"
import user3 from "../../../assets/user1.png"


import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

const Listing = () => {
  return (
    <div className='listingSection'>

        <div className="heading flex">
            <h1>My Listings</h1>
            <button className='btn flex'>
                See All<BsArrowRightShort
                className='icon'/>
            </button>
        </div>
        <div className="secContainer flex">
            <div className="singleItem">
                <AiFillHeart className='icon'/>
                <img src={img} alt="/"/>
                <h3>Annual Vince</h3>
            </div>
            <div className="singleItem">
                <AiOutlineHeart className='icon'/>
                <img src={img1} alt="/"/>
                <h3>Coffee Plant</h3>
            </div>
            <div className="singleItem">
                <AiOutlineHeart className='icon'/>
                <img src={img2} alt="/"/>
                <h3>Button Fern</h3>
            </div>
            <div className="singleItem">
                <AiFillHeart className='icon'/>
                <img src={img3} alt="/"/>
                <h3>Spider Lily</h3>
            </div>
            <div className="singleItem">
                <AiFillHeart className='icon'/>
                <img src={img4} alt="/"/>
                <h3>Spider Lily</h3>
            </div>
            <div className="singleItem">
                <AiFillHeart className='icon'/>
                <img src={img5} alt="/"/>
                <h3>Spider Lily</h3>
            </div>
        </div>
        <div className="sellers flex">
            <div className="topSellers">
                <div className="heading flex">
                    <h3>Top Sellers</h3>
                    <button className="btn flex">
                        See All<BsArrowRightShort
                className='icon'/>
                    </button>
                </div>
                <div className="card flex">
                    <div className="users">
                        <img src={user} alt="/"/>
                        <img src={user1} alt="/"/>
                        <img src={user3} alt="/"/>
                        <img src={user2} alt="/"/>
                    </div>
                    <div className="cardText">
                        <span>
                            14.245 plants sold<br/>
                            <small>
                                21 Sellers <span className="date">7Days</span>
                            </small>
                        </span>
                    </div>
                </div>

            </div>
            <div className="featuredSellers">
                <div className="heading flex">
                    <h3>Featured Sellers</h3>
                    <button className="btn flex">
                        See All<BsArrowRightShort
                className='icon'/>
                    </button>
                </div>
                <div className="card flex">
                    <div className="users">
                        <img src={user} alt="/"/>
                        <img src={user3} alt="/"/>
                        <img src={user1} alt="/"/>
                        <img src={user2} alt="/"/>
                    </div>
                    <div className="cardText">
                        <span>
                            28.245 plants sold<br/>
                            <small>
                                42 Sellers <span className="date">30 Days</span>
                            </small>
                        </span>
                    </div>
                </div>

            </div>
            
        </div>
    
    </div>
  )
}

export default Listing