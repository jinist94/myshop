function Detail(props){
    const {location :{ state: { name, price, image } }} = props;
    return(
        <main>
            <div>
                <div>
                    <img src={image} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
                <div>
                    <button>구매하기</button>
                    <button>장바구니</button>
                </div>
            </div>
            <ul className="product-tab-list">
                <li>상품정보</li>
                <li>리뷰</li>
                <li>Q&amp;A</li>
                <li>주문정보</li>
            </ul>
            <div className="product-tab">

            </div>
        </main>
    )
}

export default Detail;
