import React from 'react';
import './Why.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Why = () => {
    return (
        <div className='why' >
            <div className='why--title' id='why'>Why should you choose us?</div>
            <div className='why--reasons'>
                <div className='quality'>
                    <div className='why--main'>
                        <StarBorderIcon className='why--icons' />
                        <div className='quality--title'>Guaranteed Quality</div>
                    </div>

                    <div>We provide comprehensive quality assurance techniques to the world's greatest translators. And that's not all: if you're not happy, we'll give you a free complete translation review.</div>
                    <div className='why--link'>
                        <a href='#'>Learn more</a>
                    </div>
                </div>
                <div className='delivery'>
                    <div className='why--main'>
                        <AccessTimeIcon className='why--icons' />
                        <div className='quality--title'>On-Time Delivery</div>
                    </div>

                    <div>We provide the highest levels of performance in the business, with an optimized workflow that ensures over 96% of deliveries arrive on time. In the odd case that we miss a deadline, we will refund the whole cost of the translation.</div>
                    <div className='why--link'>
                        <a href='#'>Learn more</a>
                    </div>
                </div>
                <div className='price'>
                    <div className='why--main'>
                        <AttachMoneyIcon className='why--icons' />
                        <div className='quality--title'>The best price</div>
                    </div>
                    <div>Translato offers top-notch human translation services at reasonable per-word costs. Our pricing are straightforward and competitive, and they are determined by the volume and type of services you require.</div>
                    <div className='why--link'>
                        <a href='#'>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Why;