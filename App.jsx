import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
   render() {
      return (
         <div>
            <Headertop/>
            <Headercenter/>
            <Headerbootam/>
         </div>
      );
   }
}

class Headertop extends React.Component {

   render() {
      return (
      
         
         <section className="header">

                  
                          <nav className="navbar navbar-top">
                       <div className="container">
                         <div className="navbar-header">
                            
                         </div>
                         <ul className="nav navbar-nav">
                             
                        <li><a href="#"   title="Facebook"><i className="facebook"></i></a></li>
                        <li><a href="#"   title="Twitter"><i className="twitter"></i></a></li>
                        
                        <li><a href="#"   title="Linkedin"><i className="linkedin"></i></a></li>
                        <li><a href="#"   title="youtube +"><i className="youtube" aria-hidden="true"></i></a></li>
                         </ul>
                          
                       </div>
                     </nav>



                     <nav className="navbar navbar-midel">
                       <div className="container">
                         <div className="navbar-header">
                            
                         </div>
                         <ul className="nav navbar-nav navbar-right">
                           <li ><a href="#">Aboutus</a></li>
                           <li><a href="#">Membership Beniefit</a></li>
                           <li><a href="#">Resources</a></li>
                           <li><a className="active" href="#">Blog</a></li>
                           <li><a href="#">Contact</a></li>
                         
                         <li><button className="btn btn-claim  navbar-btn">Claim Free Report</button></li>
                         <li><button className="btn btn-iogin navbar-btn">Login</button> </li>
                         </ul>
                       </div>

                       </nav>


                        <nav className="navbar navbar-bottam">
                       <div className="container">
                         <div className="navbar-header">
                            
                         </div>
                         <ul className="nav navbar-nav">
                           <li className="active"><a href="#">All</a></li>
                           <li><a href="#">Investment</a></li>
                           <li><a href="#">Finane</a></li>
                           <li><a href="#">Credit</a></li>
                           <li><a href="#">Other</a></li>
                            <li><a href="#">More</a></li>
                          <li><a href="#">Family</a></li>
                          <li><a href="#">Rupee</a></li>
                        </ul>
                          
                       </div>
                       </nav>
       
</section>   
      );
   }
}
 
class Headercenter extends React.Component {

   render() {
      return (
         
        <section className="mainbody">
        <div className="container">
                    <div className="smallnav">
                       
                        
                        <span> <a href="">Home /</a></span> <span className="text-muted">Blog</span>
                         
                      
                       
                      </div>
            <div className="row">
               
               <div className="col-md-9">

                 <div className="bolgs">

                     <h2>Customer can refuse to pay <b>"Service Charges"</b> at Restorant - Govt</h2>
                      <ul>
                      <li>
                        
                        <span className="text-muted">Posted  By</span> <span> Swapnil Patil</span>
                        <span className="text-muted"> on </span> <span>Mar 11,2017 10:32 AM</span> 
                      </li>
                      <li>
                        <span className="text-muted">Comments</span> <span> (1)</span>  
                      </li>
                      </ul>

                      <img src={"imgs/Blog_pic.jpg"} alt={"logo"}/>

                      <p>
                        In this tutorial we will show you how to combine components to make the app easier to maintain. This approach will allow you to update and 
                        change your components without affecting the rest of the page. In this tutorial we will show you how to combine components to make the app easier to maintain. This approach will allow you to update and change your components without affecting the rest of the page.
                        change your components without affecting the rest of the page. In this tutorial we will 
                        show you how to combine components to make the app easier to maintain. This approach will
                        allow you to update and change your components without affecting the rest of the page....
                        <span className="redmore"><a href=""> ReadMore </a></span>

                      </p> 
        
                  </div>

                  <div className="bolgs">

                     <h1>customer can refuse to pay <span>"service Charges"</span> at Restorant - Gov</h1>
                      <ul >
                     <li>
                        
                        <span className="text-muted">Posted  By</span> <span> Swapnil Patil</span>
                        <span className="text-muted"> on </span> <span>Mar 11,2017 10:32 AM</span> 
                      </li>
                      <li>
                        <span className="text-muted">Comments</span> <span> (1)</span>  
                      </li>
                      </ul>

                      <img src={"imgs/Blog_pic1.jpg"} alt={"logo"}/>

                      <p>
                        In this tutorial we will show you how to combine components to make the app easier to maintain. This approach will allow you to update and 
                        change your components without affecting the rest of the page. In this tutorial we will show you how to combine components to make the app easier to maintain. This approach will allow you to update and change your components without affecting the rest of the page.
                        change your components without affecting the rest of the page. 
                        In this tutorial we will show you how to combine components to make the app easier to
                         maintain. This approach will allow you to update and change your components without 
                         affecting the rest of the page.......
                        <span className="redmore"><a href=""> ReadMore </a></span>

                      </p> 
        
                  </div>


                  <div className="bolgs">

                     <h1>customer can refuse to pay <span>"service Charges"</span> at Restorant - Gov</h1>
                      <ul >
                      <li>
                        
                        <span className="text-muted">Posted  By</span> <span> Swapnil Patil</span>
                        <span className="text-muted"> on </span> <span>Mar 11,2017 10:32 AM</span> 
                      </li>
                      <li>
                        <span className="text-muted">Comments</span> <span> (1)</span>  
                      </li>
                      </ul>

                      <img src={"imgs/Blog_pic2.jpg"} alt={"logo"}/>

                      <p>
                        In this tutorial we will show you how to combine components to make the app easier to maintain. This approach will allow you to update and 
                        change your components without affecting the rest of the page. In this tutorial we will show you how to combine components to make the app easier to maintain. This approach will allow you to update and change your components without affecting the rest of the page.
                        change your components without affecting the rest of the page. In this tutorial we will show
                         you how to combine components to make the app easier to maintain.
                         This approach will allow you to update and change your components without affecting the rest of the page......
                        <span className="redmore"><a href=""> ReadMore </a></span>

                      </p> 
        
                  </div>

                  <div className="bolgs">

                     <h1>customer can refuse to pay <span>"service Charges"</span> at Restorant - Gov</h1>
                      <ul >
                      <li>
                        
                        <span className="text-muted">Posted  By</span> <span> Swapnil Patil</span>
                        <span className="text-muted"> on </span> <span>Mar 11,2017 10:32 AM</span> 
                      </li>
                      <li>
                        <span className="text-muted">Comments</span> <span> (1)</span>  
                      </li>
                      </ul>

                      <img src={"imgs/Blog_pic3.jpg"} alt={"logo"}/>

                      <p>
                        In this tutorial we will show you how to combine components to make the app easier to maintain. This approach will allow you to update and 
                        change your components without affecting the rest of the page. In this tutorial we will show you how to combine components to make the app easier to maintain. This approach will allow you to update and change your components without affecting the rest of the page.
                        change your components without affecting the rest of the page. In this tutorial we will show you how to combine components to make the app easier to maintain. This approach will allow you to update and change your components without affecting the rest of the page.
                        <span className="redmore"><a href=""> ReadMore </a></span>

                      </p> 
        
                  </div>

               </div> 
               <div className="col-md-3">
                  <div className="Blog-post">
                   
                         <div className="title"><h2> Popular Posts</h2></div>
                               <div className="blogscont">
                               <img src={"imgs/Blog_img.jpg"} alt={"logo"}/>

                               <h5> <a href="#">What peopel consider themeselev</a></h5>
                               <p>70$ investor are "asest pooer" - what about you  </p>
                               </div>
                     
 
                   <div className="blogscont">
                         <img src={"imgs/Blog_img1.jpg"} alt={"logo"}/>

                         <h5><a href="#"> What peopel consider themeselev</a></h5>
                         <p>70$ investor are "asest pooer" what about you  </p>
                   </div>
                 

                   
                         <div className="blogscont">
                               <img src={"imgs/Blog_img2.jpg"} alt={"logo"}/>

                               <h5> <a href="#">What peopel consider themeselev</a></h5>
                               <p>70$ investor are "asest pooer" what about you  </p>
                         </div>
                 

                   
                         <div className="blogscont">
                            <img src={"imgs/Blog_img3.jpg"} alt={"logo"}/>

                            <h5> <a href="#"> What peopel consider themeselev </a></h5>
                            <p>70$ investor are "asest pooer" what about you  </p>
                         </div>
                  </div>

                <div className="tolkit">
                <h2 className="text-muted"> Task</h2>
                      <ul>

                       <li> <a href="#"> Investment</a> </li>
                       <li> <a href="#"> Finance</a> </li>
                       <li> <a href="#"> Treading</a> </li>
                       <li> <a href="#">insurance </a> </li>
                       <li> <a href="#">webinars </a> </li>
                       <li> <a href="#">Fainceal Plannig </a> </li>
                       <li> <a href="#"> Mutual Founds</a> </li>
                       <li> <a href="#"> eBook</a> </li>
                       <li> <a href="#"> Memberships</a> </li>

                      </ul>
   
                          


                         
               </div>
 

               </div>
            </div>

         </div>

         
 
        </section>     
      );
   }
}
class Headerbootam extends React.Component {

   render() {
      return (
         
         
         <section className="footar">
         <hr></hr>
         <div className="container">
            <div className="row">

            <div className="col-md-3">


            <div className="map"> <img src={"imgs/Blog_Map.jpg"} alt={"map"}/></div>
            <div className="follows"> <h4 className="text-muted"> Follow us</h4>
 
              
            <span><a href="#"> <i className="fa fa-facebook color-facebook"></i> </a></span>
            <span><a href="#"> <i className="fa fa-twitter color-twitter"></i> </a></span>
            
            <span><a href="#"> <i className="fa fa-linkedin color-linkedin"></i> </a></span>
            <span><a href="#"> <i className="fa fa-youtube-play" aria-hidden="true"></i> </a></span>
             

            </div>
             </div>  
               <div className="col-md-1"></div>

            <div className="col-md-3"> 
            <h3> Quick Links</h3>

          <ul className="list">
          <li className="listitem">Exiting Members? Login</li>
          <li className="listitem">Dapibus ac facilisis in</li>
          <li className="listitem">Morbi leo risus</li>
          <li className="listitem">Porta ac consectetur ac</li>
          <li className="listitem">Vestibulum at eros</li>
        </ul>
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-4"> 
            <h3> Download Free Ebook</h3>

              <form> 
                
              <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                  <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
                </div>

              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon2" />
              </div>

                <input type="submit" value="Download Book"  className="btn btn-warning"/>
              </form>
            

            </div> 
 
           

            

         </div>

            <hr></hr>
<p className="text-center"> 2017 © All Rights Reserved </p>
</div>

         </section>
 
              
      );
   }
}
export default App;