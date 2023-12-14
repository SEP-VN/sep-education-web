import * as React from 'react';
import './SepersStyle.css';
import perfectSong from "../../assets/music/perfect.mp3"; 
import { useRef,  useState, useEffect  } from 'react';



const Sepers = () => {
  const audioRef = useRef(null);
  const playheadRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
  
  return (
    <main>
      <section className="vh-100 gradient-custom" >
        <div >
          <div className="heading-title text-center mt-1" style={{ marginBottom: 0}}>
          <h4 className="fw-bold">Chào mừng các bạn đến với cộng đồng SEPers 😊</h4>
          <hr className="w-50 mx-auto border-dark-subtle"/>
      </div>
        </div>
      
        <div className="container-fluid mt-0" style={{ maxWidth: '80%' }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
            <div className="card mt-2 mb-6" style={{ maxHeight: '530px', zIndex: '100' }}>
                <div className="card-body py-2">
                  <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                    <div className="carousel-inner pt-2 pb-5">
                      <div className="carousel-item active">
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
                              src="https://e1.pxfuel.com/desktop-wallpaper/374/155/desktop-wallpaper-perfect-ed-sheeran-ed-sheeran.jpg"
                              alt=""
                              style={{ height: '200px', width: '100%', maxWidth: '100%', objectFit: 'cover' }}
                            />
                              <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                              </a>
                            </div>
                            <div class="card-body text-center">

                              <h5 class="h5 font-weight-bold"><a href="https://www.youtube.com/watch?v=2Vv-BfVoq4g">Perfect</a></h5>
                              <p class="mb-0">Ed Sheeran</p>

                              <audio ref={audioRef} id="music" preload="true">
                                <source src={perfectSong}/>
                              </audio>
                              <div id="audioplayer">
                                <i id="pButton" className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} onClick={playMusic}></i>
                                <div id="timeline" ref={playheadRef}>
                                  <div id="playhead"></div>
                                </div>
                              </div>

                            </div>
                          </div>
                      
                        </div>
                      </div>
                    </div>
                  </div>
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