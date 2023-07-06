import "./App.css";
import Toggle from "./Components/Toggle";
import Plus from "./Components/Plus";
import Current_tab from "./Components/Current_tab";
import Three_dot from "./Components/Three_dot";
import Humidity from "./Components/Humidity";
import UV_index from "./Components/UV_index";
import Temperature from "./Components/Temperature";
import Rain_chance from "./Components/Rain_chance";
import Precipitation from "./Components/Precipitation";
import Wind from "./Components/Wind";
import Chart from "./Components/Chart";
function App() {
  return (
    <div className="main_content">
      <div className="left_section">
        <div className="opt_bar">
          <div>
            <Plus />
          </div>
          <div>
            <Current_tab />
          </div>
          <div>
            <Toggle />
          </div>
        </div>
        <div className="city_div">
          <div className="newyork">
            <img className="mr-1" src="mouse3.png"></img>
            <p className=" left_text">New York, USA</p>

            <img className="ml-7 mr-1" src="sunrise48.png"></img>
            <p className="left_text_time">07:19</p>
          </div>

          <div className="newyork ">
            <p className="text-xs text-white mr-10 text-[#ffffffd7] ">
              Today 28 Sept
            </p>
            <img className="ml-11 mr-1" src="sunset.png"></img>
            <p className="left_text_time">19:32</p>
          </div>
        </div>

        <div className="temp_div mt-11">
          <img src="left.png"></img>
          <div className="temp_main ml-4">
            <p className="text-7xl text-white ">
              27<sup>&deg;</sup>
            </p>
            <div className="temp-text"><img src="sun.png"></img>
              <p className="text-lg text-white text-center">Sunny</p></div>
            
          </div>

          <img src="right.png"></img>
        </div>
        <div>
          <img id="building" src="building4.png"></img>
        </div>
      </div>
      <div className="right_section">
        <div className="user_detail mt-8 mb-0">
          <div className="user_detail_text ml-10">
            <p className="text-s font-bold">Welcome back Isabella!</p>
            <p className="text-xs  font-semibold">
              Check out today's weather information
            </p>
          </div>
          <div className="user_detail_pic mr-10 ">
            <Three_dot />
            <img
              className="ml-6"
              id="user_pic"
              src="user-pic.jpg"
              alt="Picture of the user"
            />
          </div>
        </div>
        <div className="chart ">
          <Chart />
        </div>
        <div className="more_details">
          <p className="font-bold text-xs mt-3 mb-2 ml-10">
            More details of today's weather
          </p>
          <div className="weather_props_div ml-10">
            <Humidity />
            <Wind />
            <Precipitation />
            <UV_index />
            <Temperature />
            <Rain_chance />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
