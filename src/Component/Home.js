import React from 'react'
import "../App.css"
import Footer from './Footer';
import HomeCom from './HomeCom';


function Home() {
    return (
        
       <>
       <HomeCom
         head={"myanmr No-1 business parterner to sport to your besiness"}
         desc={"we will you life time when you any problem and dode "}
         button={"start now"}
         redirect={"/service"}
         img={"https://source.unsplash.com/500x500/?homepage"}
       />
       <Footer
         style={" text-center"}
       />
       </>
    )
}

export default Home
