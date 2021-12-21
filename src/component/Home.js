import { React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from '../Assets/img2.png';
import bob from '../Assets/bob.png';
import oval from '../Assets/oval.png';
import ple from '../Assets/ple.png';
import dot from '../Assets/dot.png'
import dotl from '../Assets/dotl.png'
import romain from '../Assets/romain.png'
import '../css/Home.css'


export default function Home() {

  const [inputField, setinputField] = useState({
    Country: ["India", "Canada", "Dubai", "Japan"],
    FirstName: '',
    LastName: '',
    Title: "",
    Company: '',
    State: ["Delhi", "Chennai", "Punjab"],
    Email: '',

  })
  const inputFieldHandler = (name, value) => {
    setinputField({ ...inputField, [name]: value })
  }
  return (
    <div>
      <div className="container">
        <div className="row" id="row1">
          <div className="col-md-4">
            <img id="bob" src={bob} alt="wrk" />
            <div className="" id="h1">SELLING YOUR SERVICES DURING A PANDEMIC!</div>
            <div className="" id="article">Download this article and we will teach you what the pandemic has done to transform the world of business.</div>
            <div className="">We discuss: </div>
            <div className="">
              <ul><li>Building a plan</li>
                <li>Targeting a plan</li>
                <li>How to connect with your customers</li>
                <li>Developing the right content plan</li></ul>
            </div>
            <div className="" id="l1">...and much more.!</div>
          </div>
          <div className="col-md-8" >
            <img id="ple" src={ple} alt="wrk" />
            <img id="dot" src={dot} alt="wrk" />
            <img id="oval" src={oval} alt="wrk" />
            <img id="romain" src={romain} alt="wrk" />
          </div>
        </div>
        <div className="row" id="row2">
          <div className="col-lg-6">
            <img id="img2" src={img2} alt="wrk" />
          </div>
          <div className="col-md-6">
            <h3 id="formHead">Business contact Information</h3>
            <form class="row g-1" id="form">
              <div class="col-md-6">
                <label for="validationDefault04" class="form-label">Country</label>
                <select class="form-select" id="validationDefault04" required>
                  <option selected disabled >India</option>
                  {inputField.Country.map(item => <option>{item}</option>)}
                </select>
              </div>
              <div class="col-md-6">
                <label for="validationDefault01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationDefault01" name="FirstName" value={inputField.FirstName} onChange={(e) => inputFieldHandler(e.target.name, e.target.value)} placeholder="Enter First name" required />
              </div>
              <div class="col-md-6">
                <label for="validationDefault02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationDefault02" name="LastName" value={inputField.LastName} onChange={(e) => inputFieldHandler(e.target.name, e.target.value)} placeholder="Enter First name" required />
              </div>
              <div class="col-md-6">
                <label for="validationDefault01" class="form-label">Title</label>
                <input type="text" class="form-control" id="validationDefault01" name="Title" value={inputField.Title} onChange={(e) => inputFieldHandler(e.target.name, e.target.value)} placeholder="Enter Title" required />
              </div>
              <div class="col-md-6">
                <label for="validationDefault01" class="form-label">Company</label>
                <input type="text" class="form-control" id="validationDefault01" name="Company" value={inputField.Company} onChange={(e) => inputFieldHandler(e.target.name, e.target.value)} placeholder="Enter Company" required />
              </div>
              <div class="col-md-6">
                <label for="validationDefault04" class="form-label">State</label>
                <select class="form-select" id="validationDefault04" required>
                  <option selected disabled value="">Choose...</option>
                  {inputField.State.map(item => <option>{item}</option>)}
                </select>
              </div>
              <div class="col-md-12">
                <label for="validationDefaultUsername" class="form-label">Work E-mail Address</label>
                <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend2">@</span>
                  <input type="text" class="form-control" id="validationDefaultUsername" name="Email" value={inputField.Email} onChange={(e) => inputFieldHandler(e.target.name, e.target.value)} aria-describedby="inputGroupPrepend2" required />
                </div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                  <label class="form-check-label" for="invalidCheck2">
                    Please keep me inform
                  </label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                  <label class="form-check-label" for="invalidCheck2">
                    keep me posted on your next free webinar
                  </label>
                </div>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" id="submit" type="submit">Download Now</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row" id="r3">
          <img src={dotl} alt="wrk" class="limg" />
          <p className="ltext">Bobby Sugar Inc.Copyright 2021</p>
        </div>
      </div>

    </div>
  )
}
