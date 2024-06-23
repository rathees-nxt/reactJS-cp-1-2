const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='image-card-container'>
      <img
        className='image1'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h1 className='heading1'>Kiran V</h1>
      <p className='para'>
        Vishnu Institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        className='image2'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
