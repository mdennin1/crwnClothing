import React from 'react';
import './homepage.css';

const HomePage = () =>{
    return(
        <div className="homepage">
            <div className="directoryMenu">
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">
                            Hats
                        </h1>
                        <div className="subtitle">
                            SHOP NOW
                        </div>
                    </div>
                </div>
                {/* item */}
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">
                            Jackets
                        </h1>
                        <div className="subtitle">
                            SHOP NOW
                        </div>
                    </div>
                </div>
                {/* item */}
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">
                            Sneakers
                        </h1>
                        <div className="subtitle">
                            SHOP NOW
                        </div>
                    </div>
                </div>
                {/* item */}
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">
                            Womens
                        </h1>
                        <div className="subtitle">
                            SHOP NOW
                        </div>
                    </div>
                </div>
                {/* item */}
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">
                            Mens
                        </h1>
                        <div className="subtitle">
                            SHOP NOW
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
//export
export default HomePage;