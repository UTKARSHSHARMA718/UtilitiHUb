import React,{useContext} from 'react';
import { languageContext } from '../../App';
import logo from '../../assets/asset 1.png';
import {content} from '../data'

const Navbar = () =>{

  const context = useContext(languageContext);
  const {language,setLanguage} = context;
  
  const onLanguaeChange = (index) =>{
    setLanguage(index);
    console.log(language);
  }

  return (
    <>
    <div class="banner">
        <div class="container">
            <div class="top-announcement small-bold-text">
                {content['banner-text'][language]} <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </div>
        </div>
        
    </div>

    <div className="language-btn">
        <div className="container" style={language_btn_div}>
        <button className='primary-btn lang-btn' style={style}  onClick={() => onLanguaeChange(0)}>Eng</button>
        <button className='primary-btn lang-btn' style={style} onClick={() => onLanguaeChange(1)}>Span</button>
        <button className='primary-btn lang-btn' style={style} onClick={() => onLanguaeChange(2)}>Jap</button>
        </div>
    </div>

    <nav>
        <div class="container navbar flex">
            <div class="flex">

                <a href="#" class="logo flex">
                    <img src={logo} alt="company logo"/>
                </a>

                <a href="#" id="logo-side-img" style={{color:'white',marginleft:'5px'}}>Become a tester</a>
            </div>
            <div class="links" id="nav-links">
                <ul class="flex">
                    <li><a href="#" class="nav-links hover-link">{content['nav-links'][language][0]}</a></li>
                    <li><a href="#" class="nav-links hover-link">{content['nav-links'][language][1]}</a></li>
                    <li><a href="#" class="nav-links hover-link">{content['nav-links'][language][2]}</a></li>
                    <li><a href="#" class="nav-links hover-link">{content['nav-links'][language][3]}</a></li>
                    <li><a href="#" class="nav-links secondary-btn">{content['nav-links'][language][4]}</a></li>
                    <li><a href="#" class="nav-links primary-btn">{content['nav-links'][language][5]}</a></li>
                </ul>
            </div>

            <a href="#" class="nav-toggle hover-link" id="nav-toggle">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
    </nav>
    </>
  )
}

const style = {
    fontSize:'18px',
    border:'0px',
    alignItems:'end',
    margin: '3px 10px',
    padding: '2px 3px',
    width:'auto'
}
const language_btn_div = {
    marginTop:'5px',
    marginBottom:'5px',
    padding:'0px 25px',
    display:"flex",
    justifyContent:'flex-end'
}

export default Navbar;