import { Container } from '@mui/material';
import React from 'react';
import cl from './CoruselFBP.module.scss'
 
const CoruselFBP = () => {
    return (
        <Container maxWidth='md' className={cl.corusel_fbp}>
            <section>
                <div className={cl.container}>
                    <div className={cl.carousel}>
                        <input type="radio" name="slides"  id="slide-1"/>
                        <input type="radio" name="slides" id="slide-2"/>
                        <input type="radio" name="slides" id="slide-3"/>
                        <input type="radio" name="slides" id="slide-4"/>
                        <input type="radio" name="slides" id="slide-5"/>
                        <input type="radio" name="slides" id="slide-6"/>
                        <ul className={cl.carousel__slides}>
                            <li className={cl.carousel__slide}>
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1041/800/450" alt=""/>
                                    </div>
                                    <figcaption>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <span className={cl.credit}>Photo: Tim Marshall</span>
                                    </figcaption>
                                </figure>
                            </li>
                            <li className={cl.carousel__slide}>
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1043/800/450" alt=""/>
                                    </div>
                                    <figcaption>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <span className={cl.credit}>Photo: Christian Joudrey</span>                            
                                    </figcaption>
                                </figure>
                            </li>
                            <li className={cl.carousel__slide}>
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1044/800/450" alt=""/>
                                    </div>
                                    <figcaption>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <span className={cl.credit}>Photo: Steve Carter</span>                            
                                    </figcaption>
                                </figure>
                            </li>
                            <li className={cl.carousel__slide}>
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1045/800/450" alt=""/>
                                    </div>
                                    <figcaption>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <span className={cl.credit}>Photo: Aleksandra Boguslawska</span>                            
                                    </figcaption>
                                </figure>
                            </li>
                            <li className={cl.carousel__slide}>
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1049/800/450" alt=""/>
                                    </div>
                                    <figcaption>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <span className={cl.credit}>Photo: Rosan Harmens</span>                            
                                    </figcaption>
                                </figure>
                            </li>
                            <li className={cl.carousel__slide}>
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1052/800/450" alt=""/>
                                    </div>
                                    <figcaption>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <span className={cl.credit}>Photo: Annie Spratt</span>                            
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>    
                        <ul className={cl.carousel__thumbnails}>
                            <li>
                                <label htmlFor="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""/></label>
                            </li>
                            <li>
                                <label htmlFor="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt=""/></label>
                            </li>
                            <li>
                                <label htmlFor="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt=""/></label>
                            </li>
                            <li>
                                <label htmlFor="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt=""/></label>
                            </li>
                            <li>
                                <label htmlFor="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt=""/></label>
                            </li>
                            <li>
                                <label htmlFor="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""/></label>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Container>
    );
};
 
export default CoruselFBP;