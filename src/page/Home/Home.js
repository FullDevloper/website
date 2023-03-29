import React,{useState} from 'react'
import style from "./Home.module.css";
const Home = () => {
    const imageData=[{image:`GOLD-LOGO.png`,title:"ХӨРӨНГӨ ОРУУЛАЛТ"},{image:"logo-blue(1).png",title:"БАРИЛГА ТОНОГ ТӨХӨӨРӨМЖ ХУДАЛДАА"},{image:"logo-orenga.png",title:"БАРИЛГА МАТЕРИАЛ ХУДАЛДАА"},{image:"muuun.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"}]
    const CompanyData=[{image:`GOLD-LOGO.png`,title:"ХӨРӨНГӨ ОРУУЛАЛТ"},{image:"logo-blue(1).png",title:"БАРИЛГА ТОНОГ ТӨХӨӨРӨМЖ ХУДАЛДАА"},{image:"logo-orenga.png",title:"БАРИЛГА МАТЕРИАЛ ХУДАЛДАА"},{image:"muuun.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"},{image:"logo-hoh.png",title:"ЗУУЧ ХАУС ГАЗАР ХӨРӨНГӨ"}]
    const [noElement,setOffElement]=useState(4);
    const slice=CompanyData.slice(0,4);
    return (
    <div className={style.Container}>
    <div className={style.TextContainer}>
    <div className={style.Text}><h1>ХАМТЫН ХҮЧ</h1></div>
      <div className={style.Text}><h1>АМЖИЛТЫН ТҮЛХҮҮР</h1></div>
      <div className={style.Text}><hr style={{background: 'yellow',color: 'yellow',borderColor: 'yellow',borderRadius:"5px", height: '4px', width:"30%",marginTop:"10px"}}/></div>
      <div className={style.SpanContainer}>
      <span className={style.SpanText}>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore e Uplore magna. Quis ipsum suspendklfjslfkdsljfklsdjgdfjhgkjhkdisse ultrices gravida</span>
      </div>
      
      </div>
      <div className={style.LogoContainer}>
      {
        imageData && imageData.map((data)=>{
            return(
                <div className={style.Logo}><img src={ require(`../../img/${data.image}`) } style={{height:"20",width:"50"}} alt=""/>
                <div className={style.ImageText}><span>{data.title}</span></div>
                
                </div>
            )
        })
    }
      
      </div>
  
    <div className={style.ImContainer}>
    {
    
    }
        {
            slice.map((data)=>{
                return (
                    <div className={style.SectionContainer}>
                    <div className={style.SectionImage}>
                    <div className={style.Images}>Зураг</div>
                    
                    </div>
                    <div className={style.SectionImageCont}>
                    <div className={style.SectionText}>
                        <div className={style.SectionLogo}><img src={require(`../../img/${data.image}`)} style={{display:"flex",alignItems:"center",width:"100%",height:"100%"}}/></div>
                        <div className={style.SectionTitle}><span>{data.title}</span>
                        
                        
                        </div>
                       
                    </div>
                    </div>
                    
                    </div>

                )
                
            })
        }
        
    <div >

    
    </div>
    
    </div>
    <div className={style.ImContainer}>
    {
        slice.map((data)=>{
            return (
                <div className={style.SectionContainer}>
                <div>2</div>
                </div>

            )
            
        })
    }
<div >


</div>

</div>
          </div>
  )
}

export default Home
