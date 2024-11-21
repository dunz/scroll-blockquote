import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <section className='grid'>
                <div></div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, commodi inventore aliquam
                        odio excepturi eum repellat quas necessitatibus velit reiciendis eaque dolores, voluptatibus
                        ratione. Eos quisquam nesciunt veniam dolores quia.</p>
                    <p>Accusamus porro accusantium recusandae nulla ea nemo incidunt praesentium facere! Esse atque
                        inventore cumque aperiam provident ad est culpa omnis enim totam? Provident ipsa accusantium
                        fuga ipsam asperiores, officia tempora.</p>
                    <p>Iure eius asperiores quia? A distinctio officia voluptates necessitatibus, fugiat voluptatum
                        officiis fugit ducimus consequuntur totam error enim quos. Architecto cupiditate nam cumque
                        placeat autem atque sapiente iste facilis consequuntur!</p>
                    <p>Alias deserunt laudantium, quam accusantium quos nulla consequatur rerum dolorem enim praesentium
                        aut officia quod error eligendi quis assumenda reiciendis quasi? Laudantium quod provident hic
                        dolor alias. Nostrum, provident ex.</p>
                    <p>Voluptatem, eum? Possimus magni suscipit delectus sed corrupti porro ea neque fuga? In pariatur
                        omnis labore atque hic rem officiis reprehenderit iste nihil, quae accusantium inventore
                        obcaecati corrupti quis eaque.</p>
                    <p>Et neque excepturi laudantium quisquam est deleniti dolore aliquid nobis placeat impedit ducimus
                        saepe omnis, libero in voluptates debitis unde odio. Rerum illo adipisci deserunt, delectus
                        ratione quam atque alias!</p>
                    <p>Praesentium fugiat iste dolorem. Reiciendis voluptatum natus vel pariatur consequuntur
                        perspiciatis quaerat dolorem nisi. Dignissimos eaque ipsa commodi amet, corrupti earum eos
                        voluptatibus atque nulla labore aspernatur architecto cumque quaerat.</p>
                    <p>Molestias earum aliquam accusamus pariatur. Veniam eum, dolorem quaerat totam illo ipsum
                        quibusdam doloribus soluta incidunt odio odit explicabo sunt nostrum, commodi esse ducimus
                        voluptates quam architecto perferendis quia error.</p>
                </div>
            </section>

            <section className='grid has-pullquote'>
                <div>
                    <blockquote>
                        Passersby were amazed by the unusually large amounts of blood.
                    </blockquote>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, commodi inventore aliquam
                        odio excepturi eum repellat quas necessitatibus velit reiciendis eaque dolores, voluptatibus
                        ratione. Eos quisquam nesciunt veniam dolores quia.</p>
                    <p>Accusamus porro accusantium recusandae nulla ea nemo incidunt praesentium facere! Esse atque
                        inventore cumque aperiam provident ad est culpa omnis enim totam? Provident ipsa accusantium
                        fuga ipsam asperiores, officia tempora.</p>
                    <p>Iure eius asperiores quia? A distinctio officia voluptates necessitatibus, fugiat voluptatum
                        officiis fugit ducimus consequuntur totam error enim quos. Architecto cupiditate nam cumque
                        placeat autem atque sapiente iste facilis consequuntur!</p>
                    <p>Alias deserunt laudantium, quam accusantium quos nulla consequatur rerum dolorem enim praesentium
                        aut officia quod error eligendi quis assumenda reiciendis quasi? Laudantium quod provident hic
                        dolor alias. Nostrum, provident ex.</p>
                    <p>Voluptatem, eum? Possimus magni suscipit delectus sed corrupti porro ea neque fuga? In pariatur
                        omnis labore atque hic rem officiis reprehenderit iste nihil, quae accusantium inventore
                        obcaecati corrupti quis eaque.</p>
                    <p>Et neque excepturi laudantium quisquam est deleniti dolore aliquid nobis placeat impedit ducimus
                        saepe omnis, libero in voluptates debitis unde odio. Rerum illo adipisci deserunt, delectus
                        ratione quam atque alias!</p>
                    <p>Praesentium fugiat iste dolorem. Reiciendis voluptatum natus vel pariatur consequuntur
                        perspiciatis quaerat dolorem nisi. Dignissimos eaque ipsa commodi amet, corrupti earum eos
                        voluptatibus atque nulla labore aspernatur architecto cumque quaerat.</p>
                    <p>Molestias earum aliquam accusamus pariatur. Veniam eum, dolorem quaerat totam illo ipsum
                        quibusdam doloribus soluta incidunt odio odit explicabo sunt nostrum, commodi esse ducimus
                        voluptates quam architecto perferendis quia error.</p>
                </div>
            </section>

            <section className='grid'>
                <div></div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, commodi inventore aliquam
                        odio excepturi eum repellat quas necessitatibus velit reiciendis eaque dolores, voluptatibus
                        ratione. Eos quisquam nesciunt veniam dolores quia.</p>
                    <p>Accusamus porro accusantium recusandae nulla ea nemo incidunt praesentium facere! Esse atque
                        inventore cumque aperiam provident ad est culpa omnis enim totam? Provident ipsa accusantium
                        fuga ipsam asperiores, officia tempora.</p>
                    <p>Iure eius asperiores quia? A distinctio officia voluptates necessitatibus, fugiat voluptatum
                        officiis fugit ducimus consequuntur totam error enim quos. Architecto cupiditate nam cumque
                        placeat autem atque sapiente iste facilis consequuntur!</p>
                    <p>Alias deserunt laudantium, quam accusantium quos nulla consequatur rerum dolorem enim praesentium
                        aut officia quod error eligendi quis assumenda reiciendis quasi? Laudantium quod provident hic
                        dolor alias. Nostrum, provident ex.</p>
                    <p>Voluptatem, eum? Possimus magni suscipit delectus sed corrupti porro ea neque fuga? In pariatur
                        omnis labore atque hic rem officiis reprehenderit iste nihil, quae accusantium inventore
                        obcaecati corrupti quis eaque.</p>
                    <p>Et neque excepturi laudantium quisquam est deleniti dolore aliquid nobis placeat impedit ducimus
                        saepe omnis, libero in voluptates debitis unde odio. Rerum illo adipisci deserunt, delectus
                        ratione quam atque alias!</p>
                    <p>Praesentium fugiat iste dolorem. Reiciendis voluptatum natus vel pariatur consequuntur
                        perspiciatis quaerat dolorem nisi. Dignissimos eaque ipsa commodi amet, corrupti earum eos
                        voluptatibus atque nulla labore aspernatur architecto cumque quaerat.</p>
                    <p>Molestias earum aliquam accusamus pariatur. Veniam eum, dolorem quaerat totam illo ipsum
                        quibusdam doloribus soluta incidunt odio odit explicabo sunt nostrum, commodi esse ducimus
                        voluptates quam architecto perferendis quia error.</p>
                </div>
            </section>
        </div>
    );
}

export default App;
