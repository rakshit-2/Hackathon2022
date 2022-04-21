import React, { useEffect } from 'react';
import './index.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
const LoadingScreen = () => {
  return(
      <>
      <div class="bars-container">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      </>
  );
};
 
export default LoadingScreen;