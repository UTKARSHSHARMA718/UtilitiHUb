import React from 'react'

const Facility = ({sideImg,logo,profilePic,name,title,sub_title,desc,review,occupation}) => {
  return (
    <>
        <div class="container flex company-review">
                <div class="image-content">
                    <img src={sideImg} alt=""/>
                </div>
                <div class="text-content">
                    <div class="top-heading-text">

                        <h3>{title}</h3>
                        <h2>{sub_title}</h2>
                        <p>{desc}</p>

                    </div>

                    <div class="bottom-text">

                        <div>
                            <img src={logo} class="company-review-logo" alt=""/>
                        </div>

                        <h3>{review}</h3>

                        <div class="customer flex">

                            <img src={profilePic} alt=""/>

                            <div>

                                <h3>{name}</h3>

                                <h4>{occupation}</h4>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

    </>
  )
}

export default Facility;