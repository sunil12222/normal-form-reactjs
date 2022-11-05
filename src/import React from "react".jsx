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
            
            <div>
                  <form>
                  <label>first 
                       <input type="text" />
               </label>   
              <label>middle 
                       <input type="text" />
              </label>
              <label>last*
                     <input type="text" />
              </label>
                 </form>
            </div>
            <div>sex        
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Male" name="gender" /> feMale <br></br>


                <label>Hight
                     
                     <select name="cars" id="cars">
    <option value="volvo">USA</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  
              </label>          <br></br>
             < label>Address1:
                     <input type="text" />
              </label>                       <br></br>
              <label>Address2:
                     <input type="text" />
              </label>        <br></br>
             <div>
                    <div><label>Country
              <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
   
  </select>
  
        </label>
        <div>
            <label htmlFor="">home phone
            <input type="text" />
            </label>
        </div>

                    </div>
                </div> 
                
              <label>State/province
              <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
              </label>        <br></br>
              <label>Home phone:
                     <input type="text" />
              </label>        <br></br>
              <label>Email:
                     <input type="text" />
              </label>        <br></br>



            </div>
            <div>employment information</div>
            <div>
            <label>country
                     <input type="text" />
              </label>        <br></br>
              <label>employment number
                     <input type="text" />har/day<input type="text" />har<input type="text" />
              </label>        <br></br>
              <div>
              <div><label>employment location</label>  </div>
              <div> 
                <div>
                <label>location</label>
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </select>
                </div>
                <div>
                <label>location</label>
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </select>
                </div>
                <div>
                <label>location</label>
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </select>
                </div>
                </div>
            


              </div>
              
            

            </div>

        </div>
        
        
    )
}
export default Sriram