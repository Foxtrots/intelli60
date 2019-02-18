import React, { Component } from 'react';
import Error from './error.js';
import fuel from './icons/fuel.png';
import speed from './icons/speed.png';
import distance from './icons/distance.png';
import beacon from './icons/beacon.png';
import doorLock from './icons/doors.png';
import envTemp from './icons/temp.png';
import fuelFlow from './icons/fuel_flow.png';
import engineTemp from './icons/Engine.png';
import tyre from './icons/tyre.png';
import battery from './icons/Battery.png';
import vehName from './icons/car.png';
import brake from './icons/brake.png';
import vehType from './icons/vehicle_type.png';
import vehWeight from './icons/weight.png';
import mobile from './icons/mobile.png';
import crank from './icons/crank.png';
import breakdown from './icons/Breakdown.png';
import airbags from './icons/airbag.png';
import './App.css';
import Chat from "./chat";
import io from "socket.io-client";
import Small from "./small";
class App extends Component {
    state={
        id:0,
        data:[
            {
                key:'fuel',
                new_value:null,
                old_value:null,
                top:0,
                left:52,
                wid:28,
                len:1,
                heading:"FUEL CONSUMED",
                image:fuel,
                unit:'Liters'
            },
            {
                key:'distance',
                new_value:null,
                old_value:null,
                top:0,
                left:80,
                wid:20,
                len:1,
                heading:"DISTANCE COVERED",
                image:distance,
                unit:'Kms'
            },
            {
                key:'speed',
                new_value:null,
                old_value:null,
                top:0,
                left:40,
                wid:12,
                len:1,
                heading:"SPEED",
                image:speed,
                unit:'Km/hr'
            },
            {
                key:'becon',
                new_value:null,
                old_value:null,
                top:3,
                left:88,
                wid:12,
                len:1,
                heading:"BEACONS RECEIVED",
                image:beacon,
                unit:'per sec'
            },
            {
                key:'door_lock_status',
                new_value:null,
                old_value:null,
                top:0,
                left:0,
                wid:12,
                len:1,
                heading:"DOORS LOCKED",
                image:doorLock,
                unit:'Doors'
            },
//            {
//                key:'con_status',
//                value:null,
//                top:0,
//                left:6,
//                wid:1,
//                len:1
//                
//            },
//            {
//                key:'location',
//                value:null,
//                top:1,
//                left:7,
//                wid:2,
//                len:2
//            },
            {
                key:'env_temp',
                new_value:null,
                old_value:null,
                top:0,
                left:12,
                wid:28,
                len:1,
                heading:"ENVIRONMENT TEMP.",
                image:envTemp,
                unit:'Celcius'
            },
//            {
//                key:'gear_pos',
//                value:null,
//                top:1,
//                left:6,
//                wid:1,
//                len:1
//            },
//            {
//                key:'v_temp',
//                value:null,
//                top:0,
//                left:7,
//                wid:1,
//                len:1
//            },
//            {
//                key:'ac_status',
//                value:null,
//                top:0,
//                left:8,
//                wid:1,
//                len:1
//            },
            {
                key:'fuel_flow_rate',
                new_value:null,
                old_value:null,
                top:1,
                left:0,
                wid:12,
                len:1,
                heading:"FUEL FLOW RATE",
                image:fuelFlow,
                unit:'Liters/sec'
            },
            {
                key:'engine_temp',
                new_value:null,
                old_value:null,
                top:1,
                left:12,
                wid:20,
                len:1,
                heading:"ENGINE TEMP.",
                image:engineTemp,
                unit:'Celcius'
            },
            {
                key:'tyre_pressure',
                new_value:null,
                old_value:null,
                top:1,
                left:68,
                wid:20,
                len:1,
                heading:"TYRE PRESSURE",
                image:tyre,
                unit:'PSI'
            },
            {
                key:'battery_status',
                new_value:null,
                old_value:null,
                top:1,
                left:88,
                wid:12,
                len:1,
                heading:"BATTERY STATUS",
                image:battery,
                unit:'Volts'
            },
            {
                key:'vehicle_name',
                new_value:null,
                old_value:null,
                top:2,
                left:0,
                wid:20,
                len:1,
                heading:"VEHICLE NAME",
                image:vehName,
                unit:null
            },
            {
                key:'brake_cond',
                new_value:null,
                old_value:null,
                top:2,
                left:20,
                wid:12,
                len:1,
                heading:"BRAKE CONDITION",
                image:brake,
                unit:null
            },
            {
                key:'veh_type',
                new_value:null,
                old_value:null,
                top:2,
                left:68,
                wid:12,
                len:1,
                heading:"VEHICLE TYPE",
                image:vehType,
                unit:null
            },
            {
                key:'veh_weight',
                new_value:null,
                old_value:null,
                top:2,
                left:80,
                wid:20,
                len:1,
                heading:"VEHICLE WEIGHT",
                image:vehWeight,
                unit:'Kgs'
            },
//            {
//                key:'servicing_status',
//                value:null,
//                top:3,
//                left:8,
//                wid:1,
//                len:1
//            },
            {
                key:'mobilise_status',
                new_value:null,
                old_value:null,
                top:3,
                left:0,
                wid:12,
                len:1,
                heading:"MOVEMENT STATUS",
                image:mobile,
                unit:null
            },
            {
                key:'crank_status',
                new_value:null,
                old_value:null,
                top:3,
                left:12,
                wid:28,
                len:1,
                heading:"CRANK STATUS",
                image:crank,
                unit:null
            },
//            {
//                key:'veh_no',
//                value:null,
//                top:4,
//                left:4,
//                wid:1,
//                len:1
//            },
//            {
//                key:'sos',
//                value:null,
//                top:4,
//                left:5,
//                wid:1,
//                len:1
//            },
            {
                key:'breakdown_stat',
                new_value:null,
                old_value:null,
                top:3,
                left:40,
                wid:20,
                len:1,
                heading:"VEHICLES BREAKDOWN",
                image:breakdown,
                unit:null
            },
//            {
//                key:'seatbelt_status',
//                value:null,
//                top:4,
//                left:7,
//                wid:1,
//                len:1
//            },
            {
                key:'airbag_stat',
                new_value:null,
                old_value:null,
                top:3,
                left:60,
                wid:28,
                len:1,
                heading:"AIRBAGS USED",
                image:airbags,
                unit:null
            }
        ]
    }
    setting=(index,k,v)=>{
        const newmsg = this.state.data.slice();
        k.old_value=k.new_value;
        k.new_value=v;
        console.log(k.new_value,k.old_value)
        this.setState({
            data:newmsg
        })

    }
//setting=(k,v)=>{
//        const newmsg = this.state.data.slice();
//        k.old_value=k.new_value;
//        k.new_value=v;
//        console.log(k.new_value,k.old_value)
//        this.setState({
//            data:newmsg
//        })
//
//    }
    componentDidMount() {
        
        this.socket = io.connect('192.168.11.5:4000');
        this.socket.on('connect', msg=>{
            var popback=document.getElementById("out");
            popback.style.visibility="hidden";
            var popup=document.getElementById("pop");
            popup.style.visibility="hidden";
        })
        this.socket.on('message', msg=>{
            console.log(msg);
            this.state.lef= this.state.lef+1;
            this.state.data.map((k,index)=>(k.key===msg[index].key_value? this.setting(index,k,msg[index].value) :null))
//this.state.data.map((k)=>(k.key===msg.key? this.setting(k,msg.value) :null))
    })
    this.socket.on('connect', msg=>{
            console.log("connection successful");
        })
         this.socket.on('reconnect_attempt', function(err) {
            const reconnecting=()=>{
                var popback=document.getElementById("out");
                    let popup=document.getElementById("pop");
                    var close = document.getElementById("clsbtn");
                    var popupText=document.getElementById("popup-text");
                    popupText.innerHTML="Trying to Reconnect...";
                    popup.style.background="linear-gradient(to right,#00d2ff,#3a7bd5)";
                   popback.style.visibility="visible";
                   close.onclick=()=>{
                        popup.style.visibility="hidden";
                    popback.style.visibility="hidden";
                };
               }
               reconnecting();
              });
          
          this.socket.on('connect_error', function(err) {
           const popup=()=>{
                var popback=document.getElementById("out");
                var popup=document.getElementById("pop");
                var close = document.getElementById("clsbtn");
                var popupText=document.getElementById("popup-text");
               
                popup.style.background="linear-gradient(to right,#ED213A,#f12711)";
                popup.style.visibility="visible";
                popback.style.visibility="visible";
                popupText.innerHTML="Oops!!! Connection Lost";
     
                close.onclick=()=>{
                popup.style.visibility="hidden";
                popback.style.visibility="hidden";
                };
                
           }
           popup();
          });
    
};
  render() {
      return (
              <div className='container'>
      <Error />
                <Small data={this.state.data}/>
                                
            </div>);
  }}

export default App;
