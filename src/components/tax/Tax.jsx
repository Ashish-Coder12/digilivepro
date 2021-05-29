import React from 'react'
import Photo from "../../Images/1.1.jpg";
import './Tax.css'
import Tile from './Tile';

function tax() {
    return (
        <div className='tax'>
            <div className="image">
                <img src={Photo} alt=""/>
            </div>
            <div className="tax-advisory">
                <h1>Tax Advisory Services</h1>
                <p>We provide tax advisory and regulatory services in india and can help you to minimize your tax exposure and highlight any risk presented by constantly evolving and increasingly complex legislation.<br/> Tax Advisory Services include :</p>
                {/* <ul>
                    <li>Filing of Income-Tax-Return</li>
                    <li>Maximize Tax Saving through our Tax Planning Advisory</li>
                    <li>Due Diligence in resolution/response to Income-Tax Notices</li>
                    <li>Maintenance of Record accessible by out clients-Anytime Anywhere</li>
                    <li>Maintenance of Record accessible by out clients-Anytime Anywhere</li>
                </ul> */}
                <div className="text-tiel-row">
                        <div className="text-tiles">
                            <div className="tiles">
                            <p>Filing of Income-Tax-Return</p>
                            </div>
                            <div className="tiles">
                            <p>End to End Tax Advisory Services including GST Return</p>
                            </div>

                        </div>
                        <div className="text-tiles">
                            <div className="tiles">
                            <p>Due Diligence in response to Income-Tax Notice</p>
                            </div>
                            <div className="tiles">
                            <p>Maximize Tax Saving through our Tax Planning Advisory</p>
                            </div>
                        </div>

                            <div className="tiles tiles-last">
                            <p>Maintenance of Record accessible by out clients-Anytime Anywhere</p>
                            </div>
                    </div>
            </div>

        </div>
    )
}

 export default tax
