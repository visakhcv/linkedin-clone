import React from 'react'
import './Rightsidebar.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Rightsidebar() {

    const newsArticle=(heading,subtitle)=>(
      <div className='widgets-article'>
        <div className='widget-articeleft'>
        <FiberManualRecordIcon style={{width:'10px',marginRight:'10px'}}/>
        </div>
        <div className='widget-articeright'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
      </div>
    )

  return (
    <div className='widgets '>
      <div className='widgets-header'>
      <h4>LinkedIn News</h4>
      <InfoIcon/>

      </div>
      {newsArticle ('Gig work surges across sectors','1d ago')}
      {newsArticle ('Edtech in offline expansion mode','1d ago')}
      {newsArticle ('Consumer firms get climate saavy','2d ago')}
      {newsArticle ("Charging up india's EV ride",'1d ago')}
      {newsArticle ('Data breach costs hit record high','2d ago')}
      
    </div>
  )
}

export default Rightsidebar