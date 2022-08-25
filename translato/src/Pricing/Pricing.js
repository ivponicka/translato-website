import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import './Pricing.css';

const Pricing = () => {
    return (
        <div id="pricing" className='pricing'>
            <div className='pricing--title'>Our prices</div>
            <PricingTable highlightColor='#641C57' >

            <PricingSlot buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
                <PricingDetail className="pricing--info"> <b>30</b> projects</PricingDetail>
                <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                <PricingDetail> <b>Time tracking</b></PricingDetail>
            </PricingSlot>
            <PricingSlot highlighted buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
                <PricingDetail> <b>100</b> projects</PricingDetail>
                <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                <PricingDetail> <b>Time tracking</b></PricingDetail>
            </PricingSlot>
            <PricingSlot  buttonText='SIGN UP' title='ENTERPRISE' priceText='$210/month'>
                <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                <PricingDetail> <b>Time tracking</b></PricingDetail>
            </PricingSlot>
        </PricingTable></div>
    )
}


export default Pricing;