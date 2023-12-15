import * as React from 'react';
import './SepersStyle.css';
import perfectSong from "../../assets/music/perfect.mp3"; 
import perfectBg from "../../assets/images/music_bg/perfect.jpg"; 
import { useRef,  useState, useEffect  } from 'react';
import Snowfall from 'react-snowfall'


const Sepers = () => {
  const audioRef = useRef(null);
  const playheadRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowButton(false);
    setShowContent(true);
  };
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const playMusic = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const playhead = playheadRef.current;

    const updateTimeline = () => {
      const percentPlayed = (audio.currentTime / audio.duration) * 100;
      playhead.style.width = `${percentPlayed}%`;
    };

    audio.addEventListener('timeupdate', updateTimeline);

    return () => {
      audio.removeEventListener('timeupdate', updateTimeline);
    };
  }, [isPlaying]);

  // useLayoutEffect(() => {
  //   if (showContent) {
  //     // Animation code
  //     const love = setInterval(() => {
  //       const r_num = Math.floor(Math.random() * 40) + 1;
  //       const r_size = Math.floor(Math.random() * 65) + 10;
  //       const r_left = Math.floor(Math.random() * 100) + 1;
  //       const r_bg = Math.floor(Math.random() * 25) + 100;
  //       const r_time = Math.floor(Math.random() * 5) + 5;
  
  //       // Append hearts to the DOM
  //       const cardGift = document.querySelector('.card-gift');
  //       if (cardGift) {
  //         cardGift.innerHTML += `<div class='heart' style='width:${r_size}px;height:${r_size}px;left:${r_left}%;background:rgba(255,${r_bg - 25},${r_bg},1);-webkit-animation:love ${r_time}s ease;-moz-animation:love ${r_time}s ease;-ms-animation:love ${r_time}s ease;animation:love ${r_time}s ease'></div>`;
  //         cardGift.innerHTML += `<div class='heart' style='width:${r_size - 10}px;height:${r_size - 10}px;left:${r_left + r_num}%;background:rgba(255,${r_bg - 25},${r_bg + 25},1);-webkit-animation:love ${r_time + 5}s ease;-moz-animation:love ${r_time + 5}s ease;-ms-animation:love ${r_time + 5}s ease;animation:love ${r_time + 5}s ease'></div>`;
  //       }
  //     }, 500);
  
  //     // Cleanup function to stop the animation when the component is unmounted
  //     return () => clearInterval(love);
  //   }
  // }, [showContent]);
  
  
  return (
    <main>
      <section className="vh-100 gradient-custom" >
      
        <div >
          <div className="heading-title text-center mt-0" style={{ marginBottom: 0}}>
          <h4 className="fw-bold">Chào mừng các bạn đến với cộng đồng SEPers 😊</h4>
          <hr className="w-50 mx-auto border-dark-subtle"/>
      </div>
        </div>
      
        <div className="container-fluid mt-0" style={{ maxWidth: '80%' }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
            <div className="card mt-2 mb-6 pt-0" style={{ height: 'auto', zIndex: '100' }}>
                <div className="card-body py-2">
                {showButton && (
                    <div className="card-body text-center">
                      {/* Add a button with Font Awesome icon */}
                      <button className="btn btn-primary" onClick={toggleContent}>
                        <i className="fas fa-gift"></i> Xem quà hôm nay của bạn nào !
                      </button>
                    </div>
                  )}
                  <audio ref={audioRef} id="music" preload="true">
                    <source src={perfectSong}/>
                  </audio>
                  {showContent && (
                      <div className="card-body text-center">
                        
                        <p className="mb-2">
                      <i className="fas fa-cloud me-3" style={{ color: '#99c2f2', fontSize: '1em' }}></i>
                      <strong>Món quà S.E.P tặng bạn ngày <span style={{ color: 'var(--primary-color)' }}>{getCurrentDate()}</span></strong>
                      <i className="fas fa-sun ms-3" style={{ color: '#FFC300', fontSize: '1em' }}></i>
                    </p>




                        
                        <hr className="w-50 mx-auto border-dark-subtle mb-3"/>
                        
                        <div className="row d-flex justify-content-center">
                          <div className="col-md-11 col-lg-10 col-xl-8">
                            <div className="d-flex mb-4">
                              <div className="flex-grow-1 text-center">
                                <figure>
                                  <blockquote className="blockquote mb-4">
                                    <p>
                                      <i className="fas fa-quote-left fa-sm text-warning me-2"></i>
                                      <span className="font-italic">When we want something, all the universe conspires in helping us to achieve it.</span>
                                    </p>
                                  </blockquote>
                                  <div className="text-center">
                                    <figcaption className="blockquote-footer">
                                      Paulo Coelho, The Alchemist
                                    </figcaption>
                                  </div>
                                </figure>
                              </div>
                            </div>
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img
                              className="card-img-top mx-auto"
                              src={perfectBg}
                              alt=""
                              style={{ height: '200px', width: '100%', maxWidth: '100%', objectFit: 'cover' }}
                            />
                              <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                              </a>
                            </div>
                            <div class="card-body text-center">

                            <h5 class="h5 mb-1 font-weight-bold"><a href="https://www.youtube.com/watch?v=2Vv-BfVoq4g">Perfect</a></h5>
                  <p class="small text-muted mb-0">Ed Sheeran</p>

                      

                              
                              <div id="audioplayer">
                                <i id="pButton" className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} onClick={playMusic}></i>
                                <div id="timeline" ref={playheadRef}>
                                  <div id="playhead"></div>
                                </div>
                              </div>
                              {/* <div className="card-gift"></div> */}
                            </div>
                          </div>
                      
                        </div>
                          <Snowfall
                          color="#BEE1FA"
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            
                          }}
                
                        />
                      </div>
                      
                    )}
            
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
  
      </section>
    </main>
    
  );
}

export default Sepers;