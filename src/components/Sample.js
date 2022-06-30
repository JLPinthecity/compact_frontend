import React from "react";
import { Link } from "react-router-dom";
import noodle from "../images/noodle.svg";
import camp from "../images/camp.jpg";
import "./Items/Items.css";
import "./Items/Item.css";
import "./Sample.css";

const Sample = () => {
  return (
    <div className="gear-list-container">
      <div className="gear-list-flex">
        <div className="gear-list-grid">
          <div className="gear-grid-item">
            Your backpack currently weighs 10.9125 pounds or 174.6 ounces.
          </div>

          <div className="gear-grid-item">
            <img
              className="gear-grid-item"
              alt="yellow corner graphic"
              src={noodle}
            />
          </div>
        </div>
      </div>

      <div className="filler-section">
        <img className="camp" alt="blue blob j-shaped curve" src={camp} />
      </div>

      <div className="gear-title">Your Sample Backpack</div>

      <div className="list-main">
        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn.shopify.com/s/files/1/3004/4846/products/hyperlite-mountain-gear-packs-3400-southwest-s-black-29737440837677.jpg?v=1649240556"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Hyperlite Mountain Gear 3400 SOUTHWEST
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://www.rei.com/media/24b0ca25-7cd1-4c71-906e-a83b467d06f6?size=784x588"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Big Agnes Tiger Wall UL 2 Solution-Dyed Tent
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://ugqoutdoor.com/wp-content/uploads/2021/03/Ready-e1616094203453.png"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  UGQ Outdoor BANDIT Quilt
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn.shopify.com/s/files/1/2467/2501/products/ComfortPlusInsulatedAirSleeping_psd-2048.jpg?v=1628196771&width=1200"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sea To Summit Comfort Plus Insulated Sleep Mat
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn.shopify.com/s/files/1/2467/2501/products/573-49_AerosUltralightPillow_Regular_SeaFoam_01_ForWeb_2048x.progressive.jpg?v=1571610197"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sea To Summit AEROS™ Ultralight Pillow
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn.shopify.com/s/files/1/2467/2501/products/Premium_Silk_Travel_Liner_Traveler_with_Pillow_Insert_Navy_Blue.jpg?v=1626989227&width=1200"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  SEA TO SUMMIT PREMIUM SILK TRAVEL LINER
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://www.tarptent.com/wp-content/uploads/2015/11/product_tyvek-450x450.jpg"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  TARPTENT TYVEK GROUNDSHEET
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://images.squarespace-cdn.com/content/v1/5d669456f79b840001f70776/1570568132584-CA2H7T1AUPFVH44D3QB4/ke17ZwdGBToddI8pDm48kBL7y0DpH_e0bbX7enFn0u57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4ke-2faLbDJ2EQYXZquaaYAmln24LeHvojPJ-RAjfURBpFeAJxHLqEa5Otf4mhGw/Waymark+-+Fanny+-+Slate+Gray.jpg?format=500w"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  WAYMARK ZIPP PACK
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn.shopify.com/s/files/1/1487/5048/products/10668-TenaciousTape-NylonStrip-ODGreen-Comp_500x.jpg?v=1620664699"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Gear Aid Tenacious Tape Repair Tape
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://assets-global.website-files.com/61549f9352f3558157a226ea/61549f9352f3553b26a23376_SP131-01-40.jpg"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sawyer Squeeze Filter
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn.shopify.com/s/files/1/1449/7578/products/POT-750-01_1024x1024.jpg?v=1478903965"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  TOAKS Titanium 750ml Pot
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://m.media-amazon.com/images/I/41O45nDTVeL._AC_.jpg"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  BRS 3000T Stove Backpacking Stove Camping Stove Ultralight
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdni.llbean.net/is/image/wim/282446_30_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sea to Summit Tek Towel
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://media.bootstrapadventure.com/wp-content/uploads/2019/11/24095852/LiteAF_Ditty_Bag.001_1024x1024.jpeg"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Diddy Bag (Dry Bag) by LiteAF
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://static.garmincdn.com/en/products/010-01735-10/v/cf-lg.jpg"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Garmin inReach Explorer®+
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn11.bigcommerce.com/s-hgn1l9sh63/images/stencil/1000w/attribute_rule_images/9667_source_1616223517.png"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Black Diamond Spot Headlamp
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="http://cdn.shopify.com/s/files/1/0035/8311/5333/products/Trowel_1200x1200.gif?v=1543902217"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  TheTentLab The Deuce #2 UL Backcountry Trowel
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn.shopify.com/s/files/1/0067/1029/6691/products/Yosemite2_540x.jpg?v=1622937765"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Kula Cloth Reusable Antimicrobial Pee Cloth
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://www.rei.com/media/a8f45188-fe6f-4264-9ac9-79e9a827b582?size=512x682"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Arcteryx Zeta SL Rain Jacket
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw9e5d688b/images/hi-res/84070_BLK.jpg?sw=1000&sh=1000&sfrm=png&q=90&bgcolor=f6f6f6"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Patagonia Womens Micro Puff® Jacket
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://content.backcountry.com/images/items/900/PAT/PAT02Q6/TAIRISWHI_D2.jpg"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Patagonia Tropic Comfort Hooded Shirt
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn.shopify.com/s/files/1/0068/9206/0724/products/1004_FRONT_1720x.jpg?v=1649364142"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Welly assorted flex bandages
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="simplified-item-container">
          <div className="simplified-item-main">
            <div className="simplified-image-left">
              <img
                alt="hiking-gear"
                src="https://cdn.shopify.com/s/files/1/0074/4747/8385/products/media_eaa5e83e-b2ca-4185-b841-7f9ca2bd9519_540x.png?v=1578096959"
              />
            </div>

            <div className="simplified-product-info-right">
              <h3 className="simplified-item-name">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Thinksport Safe Sunscreen SPF 50+ (3oz)
                </Link>
              </h3>

              <Link to="/signup">
                <button className="btn">Edit item</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="filler-section-end">
        <div className="prompt">
          Create your thru-hike pack.{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Sign up.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sample;
