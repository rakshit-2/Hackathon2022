import React from 'react';
import './diseaseform.styles.scss';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Disease = () => (
    <div>
        {/* <Link to="/">Home</Link> */}
        <h1>Please Enter ur details</h1>     
    <div>
    <label><input type="checkbox"/>Yes?</label>
    </div>

    <div>
    <label><input type="radio" name="choice-radio"/>Yes</label>
    <label><input type="radio" name="choice-radio"/>No</label>
    </div>

    <div>
    <label class="screen-reader-only" for="choice">Yes or No?</label>
    <span aria-hidden="true">No</span>
    <input type="range" max="1" id="choice" name="choice"/>
    <span aria-hidden="true">Yes</span>
    </div>

    <div>
    <label>
        Yes or no?
        <select>
        <option value="">---</option>
        <option value="">Yes</option>
        <option value="">No</option>
        </select>
    </label>
    </div>

    <div>
    <label>
        Type "yes" or "no"
        <input type="text" pattern="[Yy]es|[Nn]o"/>
    </label>
    </div>
    </div>
);

export default Disease;