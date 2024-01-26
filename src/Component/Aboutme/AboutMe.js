import React from 'react';
// import './AboutMe.css';
import ProfileImg from '../../Assets/profileImg.jpg'

export default function AboutMe() {
  return (
    <div style={{marginTop: '100px'}} className="container">
    <div className="card1 card">
      <div className="row">
        <div className="col-md-4 left-container">
          <img
            src={ProfileImg}
            alt="Profile Image"
            className="rounded-circle img-fluid"
            style={{
              border: 'double 5px transparent',
              borderRadius: '50%',
              backgroundImage:
                'linear-gradient(white, white), linear-gradient(to right, #ee00ff,#fbff00)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              width: '200px',
              height: '200px',
              maxWidth: '200px',
              marginTop: '70px',
            }}
          />
          <h2 className="gradienttext">Giorgi Kirtadze</h2>
          <p className="text-white">Web Developer</p>
        </div>
        <div className="col-md-8 right-container">
          <h3 className="gradienttext text-center">Profile Details</h3>
          <table className="table table-dark">
            <tbody>
              <tr>
                <td>Name :</td>
                <td>Giorgi Kirtadze</td>
              </tr>
              <tr>
                <td>Age :</td>
                <td>17</td>
              </tr>
              <tr>
                <td>Mobile :</td>
                <td>+995 598-97-62-**</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>giorgikirtadze2006@gmail.com</td>
              </tr>
              <tr>
                <td>Address :</td>
                <td>khoni</td>
              </tr>
            </tbody>
          </table>
          <div className="social-icons text-center">
            <a href="https://www.facebook.com/profile.php?id=100052519382784" className="btn btn-primary me-2">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-primary me-2">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/giorgi-kirtadze-aba927250/" className="btn btn-primary me-2">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/giorgikirtadze?tab=repositories" className="btn btn-primary me-2">
              <i className="fa fa-github"></i>
            </a>
          </div>
          {/* <div className="credit">
            Made with <span style={{ color: 'tomato', fontSize: '20px' }}>❤ </span>by
            <a href="https://www.learningrobo.com/"> Learning Robo</a>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  );
}
