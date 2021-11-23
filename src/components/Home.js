// import productData from '../data/data.js';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Recommend({id, name, price, image}){
    return(
        <div className="recommend-box">
            <img src={image} />
            <h3><Link to={{
                pathname: '/product/'+ id,
                state: {
                    name,
                    price,
                    image
                }
            }}>{name}</Link></h3>
            <p>{price}</p>
        </div>
    )
}

function VisualBn(){
    return(
        <div className="visualBn">
            <div className="visual-box">
                <ul>
                    <li><img src="/images/mainRolling-01.jpg" /></li>
                    <li><img src="/images/mainRolling-02.jpg" /></li>
                </ul>
            </div>
        </div>
    )
}

function Home(){
    let productData = useSelector((state) => state);
    const [visual, setVisual] = useState(0);
    return(
        <main>
            <VisualBn></VisualBn>

            <div className="recommend">
            {productData.map((item, i)=>(
                <Recommend key={i} id={item.id} name={item.name} price={item.price} image={item.image} />
            ))}
            </div>
            <div className="recommend">

            </div>

        </main> 
    )
}

export default Home;