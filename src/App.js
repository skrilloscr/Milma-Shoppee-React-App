import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import {
  Favorite,
  HomeRounded,
  PriceChange,
  Settings,
} from "@mui/icons-material";
import BannerName from "./Components/BannerName";
import MenuCard from "./Components/MenuCard";
import { MenuItems, Items } from "./Components/Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import SubMenuContainer from "./Components/SubMenuContainer";
import CartItem from "./Components/CartItem";
import { useStateValue } from "./Components/StateProvider";
import delimg from '../src/Assets/Take Away-rafiki.png';
import wishlist from '../src/Components/Wishlist'
function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "Dairy01")
  );

  const [{ cart, total }] = useStateValue();
  const [totalPrice] = useState(0);

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    console.log("Total:", total);

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart, total, totalPrice]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      <Header />
      {/* Left menu */}
      <div className="leftMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
          {/* prettier-ignore */}
          <MenuContainer link={'/wishlist'} icon={<Favorite />} isWishlist />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"User"} discount={"300"} more={"#"} />
            <img src={delimg} alt="no img" className="deliveryPic" />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === "1" ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
          {!cart ? (
            <div className="addSomeItem">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTZvjjzdukSfHPrH6es4I_zRHAFVcKdsRWnKaSpactnLY7S9HkKk2aB-tqh90TT-G3PI&usqp=CAU"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <SubMenuContainer />
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"0"}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>Rs </span> {total}
                </p>
              </div>
              <button className="checkOut">Check Out</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
