var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This little application is the outcome of an exercise in the excellent course from Andrew Mead
        on Udemy titled <Link to='https://www.udemy.com/the-complete-react-web-app-developer-course'>
        'The Complete React Web Developer Course'</Link>. I highly recommend it.</p>
      <dl>
        <dt>Weather Data</dt>
        <dd>
          The weather data comes from <Link to="https://openweathermap.org/">OpenWeatherMap</Link> who offer a really
          easy to use API with a free option as well as a range of subscription services. If you want to build something
          that uses weather data I recommend it.
        </dd>
        <dt>Styling</dt>
        <dd>
          The styling is courtesy of <Link to="http://foundation.zurb.com/">Foundation</Link> which provides a fully featured,
          responsive framework for styling your web application which works across mobile and desktop devices and is suitable for
          use with any language and locale. I think the defaults look nice too!
        </dd>
      </dl>
    </div>
  )
};

module.exports = About;
