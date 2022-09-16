import React from "react"
import Image from 'next/image'
class Header extends React.Component {

  render () {
    return (
        <div className="program_header">
            <div className="main_header">
                <div className="header_inner">
                    <h1 className="header_logo">
                        <a href="https://www.tvbs.com.tw/" title="TVBS">
                            <Image src="/TVBS_logo.svg" alt="arraw" width={102} height={49} />
                        </a>
                    </h1>

                    <div className="header_search_pc">
                        <input className="search_input" type="search" id="search" placeholder="關鍵字"/>
                        <button class="search_btn" id="search_button">
                            <Image src="/search_btn.svg" alt="arraw" width={50} height={50} />
                        </button>
                        <a class="en_page" href="https://www.tvbs.com.tw/ours/en" target="_new">EN</a>                        
                    </div>
                </div> 
            </div>            
        </div>
    );
  }
};
export default Header;