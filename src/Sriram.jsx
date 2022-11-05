import React from "react"
 
const Sriram=()=>{
    return(
        <div class="txt">
            <div class="radiobtn">
                  <input type="radio" value="Male" name="gender" /> order by first name
                  <input type="radio" value="Female" name="gender" /> order by last name
                  <input type="radio" value="Other" name="gender" /> order by employes name
            </div>
            <div class="btn-parent" align="center"> 
                <button>add</button>
                <button>Modife</button>
                <button>Save</button>
                <button>Cancel</button>
                <button>Remove</button>
            </div>
            <div>
                Gernal information
            </div>
        
            <div class="name">
                <div class="heading">
                    <div class="div-wid">first name</div>
                    <div class="div-wid">middle name</div>
                    <div class="div-wid">last name</div>
                </div>
                <div class="nameval">
                    <div class="div-wid"><input type="text" ></input></div>
                    <div class="div-wid"><input type="text" ></input></div>
                    <div class="div-wid"><input type="text" ></input></div>
                </div>
             </div>   

             <div class="section">
                 <div  class="sec-1">
                    <div>sex</div>
                    <div>Hight</div>
                    <div>address-1</div>
                    <div>address-2</div>
                    <div>Country</div>
                    <div>state</div>
                  </div>  
                  <div class="sec-2">
                    <div>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Male" name="gender" /> FeMale
                    </div>
                    <div>
                    <input type="text" />
                     </div>   

                     <div>
                    <input type="text" />
                     </div>
                     <div>
                    <input type="text" />
                     </div>
       
                    <div class="add-main"> 
                    <div>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                         <option value="saab">Saab</option>
                     </select>
                     </div>
                     <div>
                        <div>
                            city   <span>           <select name="cars" id="cars">
                                                           <option value="volvo">Volvo</option>
                                                         <option value="saab">Saab</option>
                                                   </select>
                                    </span>
                         </div>
                         <div>
                          </div>     
                     </div> 
                     </div>                

                  </div>
              </div>  
            
        </div>
        
        
    )
}
export default Sriram