import React,{useState, useEffect} from 'react';
import axios from 'axios'

export const Reactapi = () => {
    const [patient, setpatient] = useState({})
    const [files, setfiles] = useState({})
    const [details, setdetails] = useState({})
    const [doctor, setdoctor] = useState({})
    useEffect(() => {
        axios.get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails").then((res)=>{
            console.log(res.data[0])
            setpatient(res.data[0]) 
        })
    }, [])
    // console.log(patient.Member Status)
    useEffect(() => {
        axios.get("https://619f39821ac52a0017ba467e.mockapi.io/Files").then((res)=>{
            console.log(res.data)
            setfiles(res.data) 
        })
    }, [])
    useEffect(() => {
        axios.get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details").then((res)=>{
            console.log(res.data)
            setdetails(res.data) 
        })
    }, [])
    useEffect(() => {
        axios.get("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails").then((res)=>{
            console.log(res.data)
            setdoctor(res.data) 
        })
    }, [])


    return (
        <div id="container" class="card">
            <section id="left" class="card">
                <i class="fas fa-bars fa-2x"></i>
                <strong style={{ "fontSize": "30px", "margin": "-38px 0px 0px 0px" }}>Zendenta</strong>
                <p>Cabout gigi tan-po sakit</p>
                <nav>
                    <ul class="card">
                        <li>Overview</li>
                        <i class="far fa-calendar-alt fa-2x"></i>  <li>Calendar</li>
                        <i class="far fa-user fa-2x" id="user1"></i> <li>Patient List</li>
                        <i class="far fa-sticky-note fa-2x"></i> <li>Messages</li>
                        <i class="fas fa-rupee-sign fa-2x"></i> <li>Payment information</li>
                        <i class="fas fa-sliders-h fa-2x"></i> <li>Settings</li>
                        
                    </ul>
                </nav>
                <div id="doctordetails">
                <i class="fas fa-info-circle"></i> &nbsp;&nbsp;&nbsp;&nbsp;Help ?
                <hr />
                   <tr>
                       <td>
                           
                       {Object.keys(doctor).map((img) => {
                       
                    if (img == 'avatar') {
                      return <img src={doctor[img]} width="10px" height="10px"/>;
                        }
                       })}
                       </td>
                          <td>
                           {/* <h5 style={{"margin-left":"40px","margin-top":"15px"}}>{doctor.name}</h5> */}
                           <h5 style={{"margin-left":"40px","margin-top":"15px"}}> Drg. Adam H.</h5>
                            <p style={{"margin-left":"40px"}}>Dentist</p>
                       </td>
                   </tr>
                </div>
               
            </section>
            <article id="right">
                <header>
                    <i class="far fa-user fa-2x" id="user2"></i>
                    <strong style={{ "fontSize": "30px", "float": "left", "margin": "10px 0px 0px 14px", }}>Diane Cooper</strong>
                    <input type="text" placeholder='Search' style={{ "float": "right", "width": "220px", "margin": "10px 144px 0px 0px", "height": "45px", "border-radius": "25px" }} />
                    <i class="fas fa-search"></i>
                    <i class="fas fa-plus fa-2x"></i>
                    <i class="fas fa-bell fa-2x"></i>
                    <i class="fas fa-circle"></i>
                    <hr id="hr1" />
                    <p style={{ "fontSize": "25px", "color": "blue", }}>Patient List&nbsp;&nbsp;</p>
                    <p style={{ "fontSize": "25px", "position": "relative", "left": "140px", "bottom": "50px" }}> <i class="fas fa-greater-than"> &nbsp;</i>Diane Cooper</p>
                    <div id="icons">
                        <input type="text" placeholder='Edit Patient' />
                        <i class="fas fa-edit" style={{ "position": "relative", "right": "193px", "bottom": "1px" }}></i>
                        <i class="fas fa-edit" style={{ "position": "relative", "right": "36px", "bottom": "31px" }}></i>
                    </div>
                </header>


                <div id="contents">
                    <section id="sec1">
                            <div>
                                        <div id="div2" class="card">
                                        <img src="https://i.ytimg.com/vi/KKlrE-Rbphg/maxresdefault.jpg" alt="" />
                                        <h3>{patient.name}</h3>
                                        <p>{patient.email}</p>
                                        <center><tr>
                                            <td style={{"paddding":" 0px 30px 0px 0px"}}><h3>{patient.Past}</h3>
                                            <label htmlFor="">Past</label>
                                                </td> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                                <td> 
                                                    <h3>{patient.Upcoming}</h3>
                                                    <label htmlFor="">Upcoming</label>
                                                    </td>
                                        </tr>
                                        </center>
                                        <button id="btn1">Send Message</button>
                                        </div>
                                    </div>
                                    <div >
                                       
                                        <div id="div3" class="card">
                                            <tr>
                                              <td>
                                                  <label htmlFor="">Gender</label> <br />
                                                  <h5>{patient.Gender}</h5>
                                              </td>  
                                              <td>
                                                  <label htmlFor="">Birthday</label> <br />
                                                  <h5>{patient.Birthday}</h5>
                                              </td>
                                              <td>
                                                  <label htmlFor="">Phone Number</label> <br />
                                                  <h5>111111</h5>
                                              </td>
                                            </tr>
                                            <br /> <br />
                                            <tr>
                                                <td>
                                                    <label htmlFor="">Street Address</label> <br />
                                                    <h5>JI. Diponegoro No. 21</h5>
                                                </td>
                                                <td>
                                                    <label htmlFor="">City</label> <br />
                                                    <h5>Diponegoro</h5>
                                                </td>
                                                <td>
                                                    <label htmlFor="">Zip Code</label> <br />
                                                    <h5>655849</h5>
                                                </td>
                                            </tr>
                                            <br /><br />
                                            <tr>
                                            <td>
                                                    <label htmlFor="">Member Status</label> <br />
                                                    <h5>Active Member</h5>
                                                </td>
                                                <td>
                                                    <label htmlFor="">Registered Date</label> <br />
                                                    <h5>Feb 24th, 1997</h5>
                                                </td>
                                            </tr>
                                        </div>
                                    </div>
                    </section>

                    <section id="sec2" class="card">
                        <header id="horizan1">
                        <h5 style={{"float":"left","padding":"15px 0px 0px 18px"}}>Notes</h5>
                        <h5 style={{"float":"right", "color":"blue","padding":"15px 10px 0px 0px"}}>See all</h5>
                        </header>
                        <div id="middle">
                            <h5>-This patient is lorem ipsum dolor sit amet</h5>
                            <h5>-Lorem ipsum dolor sit amet</h5>
                            <h5>-hos alergic history with Cataflam</h5>
                            <button id="btn2"> save note</button>
                        </div>
                        <div id="lorem">
                            <h5>Lorem ipsum dolor sit amet</h5>
                            <p style={{"float":"left"}}>Drg.Mega Nanode</p>
                            <p style={{"float":"right"}}>20 Nov 19</p>
                        </div>

                    </section>

                    <section id="sec3" class="card">
                        <div id="horizan">
                            <p style={{"background":"white", "margin":"5px","height": "39px", "padding": "5px 27px 2px 6px","margin-top": "4px","text-align": "center"}}>Upcomimg Appoinments</p> 
                            <p style={{"padding":"10px"}}>Post Appoinments</p>
                            <p style={{"padding":"10px"}}>Medical Records</p>
                        </div>
                        <div id="rootshow">
                            <h5 style={{    "float": "left","padding": "15px 0px 0px 23px"}}>Root Canal Treatment</h5>
                            <p style={{"float":"right","width":"212px","height":"46px","margin":"10px","background":"white","padding":"10px 9px 0px 21px"}}>Show Previous Treatment</p>
                            <i class="fas fa-chevron-down"></i>
                        
                        <div id="div4" >
                            <tr>
                            
                            <td >
                                    <h5>26 Nov'19</h5>
                                    <p>09.00-10.00</p>
                                </td>
                                <td>
                                    <p>Treatment</p>
                                    <h5>Open Access</h5>
                                </td>
                                <td>
                                    <p>Dentist</p>
                                    <h5>Drg. Adam H.</h5>
                                </td>
                                <td>
                                    <p>Nurse</p>
                                    <h5>Jessicamila</h5>
                                </td>
                                <td>
                                <span style={{"color":"blue"}}><i class="far fa-clipboard"></i> Note</span>
                                </td>
                            </tr>
                        </div>

                        <div id="div5" >
                            <tr>
                                <td>
                                    <h5>26 Nov'19</h5>
                                    <p>09.00-10.00</p>
                                </td>
                                <td>
                                    <p>Treatment</p>
                                    <h5>Open Access</h5>
                                </td>
                                <td>
                                    <p>Dentist</p>
                                    <h5>Drg. Adam H.</h5>
                                </td>
                                <td>
                                    <p>Nurse</p>
                                    <h5>Jessicamila</h5>
                                </td>
                                <td>
                                <span style={{"color":"blue"}}><i class="far fa-clipboard"></i> Note</span>
                                </td>
                            </tr>
                        </div>
                        </div>
                    </section>
                    <section id="sec4">
                        <div id="div6" class="card">
                            <h5 style={{"padding":"10px 0px 0px 20px","float":"left","width":"174px"}}>Files/Documents</h5>
                            <h5 style={{"float":"right","bottom":"38px","left":"300px","position":"relative","padding":"10px 20px 0px 0px"}}><i class="fas fa-folder-plus"></i> Add Files</h5>
                        
                            <div id="filesdiv">
                            <tr>
                                <td>
                                <i style={{"position":"relative","right":"30px"}} class="fas fa-folder-plus fa-2x"></i> 
                                {/* <h5 style={{"margin":"-28px 11px 7px 31px"}}>{files.name} </h5> */}
                                <h5 style={{"margin":"-28px 11px 7px 31px"}}>Danielle Ledner</h5>
                                <p style={{"position":"relative","left":"257px","bottom":"27px"}}>123kb</p>   
                                </td>
                            </tr>
                            </div>
                            <div id="filesdiv">
                            <tr>
                                <td>
                                <i style={{"position":"relative","right":"30px"}} class="fas fa-folder-plus fa-2x"></i> 
                                {/* <h5 style={{"margin":"-28px 11px 7px 31px"}}>{files.name}</h5> */}
                                <h5 style={{"margin":"-28px 11px 7px 31px"}}>Terrance Corwin</h5>
                                <i class="far fa-trash-alt fa-1x"></i><i class="far fa-arrow-alt-circle-down"></i>
                                </td>
                            </tr>
                            </div>
                            <div id="filesdiv">
                            <tr>
                                <td>
                                <i style={{"position":"relative","right":"30px"}} class="fas fa-folder-plus fa-2x"></i> 
                                {/* <h5 style={{"margin":"-28px 11px 7px 31px"}}>{files.name}</h5> */}
                                <h5 style={{"margin":"-28px 11px 7px 31px"}}>Myron West</h5>
                                <p style={{"position":"relative","left":"257px","bottom":"27px"}}>87kb</p>
                                </td>
                            </tr>
                            </div>
                            <div id="filesdiv">
                            <tr>
                                <td>
                                <i style={{"position":"relative","right":"30px"}} class="fas fa-folder-plus fa-2x"></i> 
                                {/* <h5 style={{"margin":"-28px 11px 7px 31px"}}>{files.name}</h5> */}
                                <h5 style={{"margin":"-28px 11px 7px 31px"}}> Simon Mann</h5>
                                <i class="far fa-trash-alt fa-1x"></i><i class="far fa-arrow-alt-circle-down"></i>
                                </td>
                            
                            </tr>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    )
}
export default Reactapi;
