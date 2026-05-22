class Product {
  type;
  idProduct;
  nameProduct;
  imageProduct;
  rate;
  price;
  discount;
  nums;
  status;
  constructor(
    type,
    idProduct,
    nameProduct,
    imageProduct,
    rate,
    price,
    discount,
    nums,
    status,
  ) {
    this.type = type;
    this.idProduct = idProduct;
    this.nameProduct = nameProduct;
    this.imageProduct = imageProduct;
    this.rate = rate;
    this.price = price;
    this.discount = discount;
    this.nums = nums;
    this.status = status;
  }

  changeStatus() {
    if (this.nums === 0) this.status = false;
  }
}

const E01 = new Product(
  "E",
  "E01",
  "Samsung Galaxy S26 Ultra",
  "/image/SamsungGalaxyS26Ultra.jpg",
  "5.0",
  30490000,
  0.2,
  40,
  true,
);
const E02 = new Product(
  "E",
  "E02",
  "OPPO Find X9s",
  "/image/OppoFindX9s.jpg",
  "4.9",
  23990000,
  0.3,
  47,
  true,
);
const E03 = new Product(
  "E",
  "E03",
  "Máy tính bảng Lenovo Yoga Tab",
  "/image/LenovoYogaTab.jpg",
  "4.5",
  17090000,
  0.3,
  12,
  true,
);
const E04 = new Product(
  "E",
  "E04",
  "Xiaomi Pad Mini",
  "/image/XiaomiPadMini.jpg",
  "4.1",
  13990000,
  0.2,
  28,
  true,
);
const E05 = new Product(
  "E",
  "E05",
  "Laptop ASUS Vivobook S 14 FLIP",
  "/image/LaptopASUSVivobookS14FLIP.jpg",
  "4.6",
  20990000,
  0,
  23,
  true,
);
const E06 = new Product(
  "E",
  "E06",
  "Laptop HP OmniBook 7",
  "/image/LaptopOmniBook7.jpg",
  "4.1",
  26590000,
  0,
  11,
  true,
);
const E07 = new Product(
  "E",
  "E07",
  "Laptop Acer Gaming Nitro Lite 16",
  "/image/LaptopAcerGamingNitroLite16.jpg",
  "4.5",
  26190000,
  0.3,
  10,
  true,
);
const E08 = new Product(
  "E",
  "E08",
  "Smart Tivi Samsung QLED 4K 43 inch",
  "/image/SmartTiviSamSungQLED.jpg",
  "4.2",
  8990000,
  0,
  19,
  true,
);
const E09 = new Product(
  "E",
  "E09",
  "Smart Tivi Samsung UHD 4K 65 inch",
  "/image/SmartTiViSamsungUHD.jpg",
  "4.5",
  10990000,
  0.2,
  11,
  true,
);
const E10 = new Product(
  "E",
  "E10",
  "Samsung Tivi LG UHD 4K 55 inch",
  "/image/SmartTiviLGUHD.jpg",
  "4.3",
  10990000,
  0.1,
  10,
  true,
);
const C01 = new Product(
  "C",
  "C01",
  "Áo đấu Manchester City",
  "/image/ManCityHomeKit.jpg",
  "4.0",
  2200000,
  0.1,
  84,
  true,
);
const C02 = new Product(
  "C",
  "C02",
  "Áo đấu InterMiami (dành cho fan M10)",
  "/image/InterMiami.jpg",
  "4.3",
  2200000,
  0.2,
  49,
  true,
);
const C03 = new Product(
  "C",
  "C03",
  "Áo đấu Paris Saint German",
  "/image/ParisSaintGerman.jpg",
  "4.6",
  2200000,
  0,
  90,
  true,
);
const C04 = new Product(
  "C",
  "C04",
  "Áo đấu Barcalona (dành cho các Culers)",
  "/image/Barcalona.jpg",
  "4.7",
  2200000,
  0,
  14,
  true,
);
const C05 = new Product(
  "C",
  "C05",
  "Áo đấu Real Madrid",
  "/image/RealMadrid.jpg",
  "4.6",
  2200000,
  0.7,
  124,
  true,
);
const C06 = new Product(
  "C",
  "C06",
  "Áo đấu Aletico Madrid",
  "/image/AleticoMadrid.jpg",
  "4.1",
  2200000,
  0.1,
  68,
  true,
);
const C07 = new Product(
  "C",
  "C07",
  "Áo đấu Manchester United",
  "/image/ManchesterUnited.jpg",
  "4.5",
  2200000,
  0,
  78,
  true,
);
const C08 = new Product(
  "C",
  "C08",
  "Áo đấu Arsenal",
  "/image/Arsenal.jpg",
  "4.0",
  2200000,
  0,
  56,
  true,
);

const C09 = new Product(
  "C",
  "C09",
  "Áo đấu Chelsea",
  "/image/Chelsea.jpg",
  "4.6",
  2200000,
  0.3,
  37,
  true,
);
const C10 = new Product(
  "C",
  "C10",
  "Áo đấu Bayern Munich",
  "/image/BayernMunich.jpg",
  "4.7",
  2200000,
  0,
  39,
  true,
);
const S01 = new Product(
  "S",
  "S01",
  "Quả bóng đá World Cup 2022 Qatar",
  "/image/Football.jpg",
  "5.0",
  650000,
  0.1,
  10,
  true,
);
const S02 = new Product(
  "S",
  "S02",
  "Bóng chuyền FIV3 tiêu chuẩn quốc tế",
  "/image/Volleyball.jpg",
  "4.2",
  205000,
  0.1,
  34,
  true,
);
const S03 = new Product(
  "S",
  "S03",
  "Vợt cầu lông VS You Long rồng xanh chính hãng",
  "/image/Badminton.jpg",
  "5.0",
  1350000,
  0.1,
  23,
  true,
);
const S04 = new Product(
  "S",
  "S04",
  "Ống cầu lông Yonex AS30",
  "/image/Shuttlecock.jpg",
  "5.0",
  1239000,
  0.2,
  47,
  true,
);
const S05 = new Product(
  "S",
  "S05",
  "Găng tay thủ môn Adidas Predator GL League màu trắng xám",
  "/image/GoalkeeperHand.jpg",
  "4.5",
  1900000,
  0.1,
  12,
  true,
);
const S06 = new Product(
  "S",
  "S06",
  "Bóng rổ Jogarbola SB2000",
  "/image/Basketball.jpg",
  "4.6",
  628000,
  0.1,
  49,
  true,
);
const S07 = new Product(
  "S",
  "S07",
  "Vợt Pickleball Joola Ben Johns Hyperion 3",
  "/image/Pickleball.jpg",
  "4.3",
  4700000,
  0,
  12,
  true,
);
const S08 = new Product(
  "S",
  "S08",
  "Quả cầu đá thi đấu TLS",
  "/image/ShuttlecockKicking.jpg",
  "4.7",
  16500,
  0,
  179,
  true,
);
const S09 = new Product(
  "S",
  "S09",
  "Quả cầu mây kích thước 15cm",
  "/image/CauMay.jpg",
  "4.6",
  360000,
  0,
  167,
  true,
);
const B01 = new Product(
  "B",
  "B01",
  "Harry Potter và Hòn đá phù thủy",
  "/image/HarryPotter1.jpg",
  "5.0",
  1028000,
  0.3,
  49,
  true,
);
const B02 = new Product(
  "B",
  "B02",
  "Harry Potter và Phòng chứa bí mật",
  "/image/HarryPotter2.jpg",
  "5.0",
  1200000,
  0.2,
  51,
  true,
);
const B03 = new Product(
  "B",
  "B03",
  "Harry Potter và Tù nhân ngục Azkaban",
  "/image/HarryPotter3.jpg",
  "5.0",
  1239000,
  0.1,
  40,
  true,
);
const B04 = new Product(
  "B",
  "B04",
  "Harry Potter và Chiếc cốc lửa",
  "/image/HarryPotter4.jpg",
  "5.0",
  1459000,
  0.2,
  58,
  true,
);
const B05 = new Product(
  "B",
  "B05",
  "Harry Potter và Hội phượng hoàng",
  "/image/HarryPotter5.jpg",
  "5.0",
  1678000,
  0.1,
  47,
  true,
);
const B06 = new Product(
  "B",
  "B06",
  "Harry Potter và Hoàng tử lai",
  "/image/HarryPotter6.jpg",
  "5.0",
  1699000,
  0.1,
  50,
  true,
);
const B07 = new Product(
  "B",
  "B07",
  "Harry Potter và Bảo bối tử thần",
  "/image/HarryPotter7.jpg",
  "5.0",
  1799000,
  0.3,
  34,
  true,
);
const B08 = new Product(
  "B",
  "B08",
  "Tôi thấy hoa vàng trên cỏ xanh",
  "/image/toi-thay-hoa-vang-tren-co-xanh.jpg",
  "5.0",
  267000,
  0.2,
  90,
  true,
);
const B09 = new Product(
  "B",
  "B09",
  "Mắt biếc",
  "/image/mat-biec.jpg",
  "4.9",
  110000,
  0,
  88,
  true,
);
const B10 = new Product(
  "B",
  "B10",
  "Ra bờ suối ngắm hoa kèn hồng",
  "/image/ra-bo-suoi-ngam-hoa-ken-hong.jpg",
  "4.8",
  141000,
  0,
  79,
  true,
);
const B11 = new Product(
  "B",
  "B11",
  "Những cuộc phiêu lưu của Sherlock Holmes",
  "/image/SherlockHolmes.jpg",
  "4.5",
  133000,
  0.1,
  89,
  true,
);
const listOfElectronicDevices = [
  E01,
  E02,
  E03,
  E04,
  E05,
  E06,
  E07,
  E08,
  E09,
  E10,
];
const listOfClothes = [C01, C02, C03, C04, C05, C06, C07, C08, C09, C10];
const listOfSportEquipments = [S01, S02, S03, S04, S05, S06, S07, S08, S09];
const listOfBooks = [B01, B02, B03, B04, B05, B06, B07, B08, B09, B10, B11];
function countProduct() {
  const numberOfElectronicDevices = document.getElementById(
    "numberOfElectronicDevices",
  );
  const numberOfClothes = document.getElementById("numberOfClothes");
  const numberOfSportEquipments = document.getElementById(
    "numberOfSportEquipments",
  );
  const numberOfBooks = document.getElementById("numberOfBooks");
  numberOfElectronicDevices.textContent = listOfElectronicDevices.length;
  numberOfClothes.textContent = listOfClothes.length;
  numberOfSportEquipments.textContent = listOfSportEquipments.length;
  numberOfBooks.textContent = listOfBooks.length;
}
const listOfProduct = [
  ...listOfElectronicDevices,
  ...listOfClothes,
  ...listOfSportEquipments,
  ...listOfBooks,
];

function fillproductname() {
  for (let i = 0; i < listOfProduct.length; i++) {
    const productname = document.getElementById(
      listOfProduct[i].idProduct + "__name",
    );
    productname.textContent = listOfProduct[i].nameProduct;
  }
}

function fillproductimage() {
  for (let i = 0; i < listOfProduct.length; i++) {
    const productimage = document.getElementById(
      listOfProduct[i].idProduct + "__image",
    );
    productimage.src = listOfProduct[i].imageProduct;
  }
}

function fillproductlistprice() {
  for (let i = 0; i < listOfProduct.length; i++) {
    const productlistprice = document.getElementById(
      listOfProduct[i].idProduct + "__price--listprice",
    );
    const pricepartition = document.getElementById(
      listOfProduct[i].idProduct + "__partition",
    );
    if (listOfProduct[i].nums !== 0) {
      productlistprice.textContent =
        listOfProduct[i].price.toLocaleString("de-DE");
      if (listOfProduct[i].discount === 0) {
        pricepartition.style.display = "none";
      } else {
        pricepartition.style.display = "dafault";
        productlistprice.style.textDecoration = "line-through";
        productlistprice.style.opacity = "0.5";
      }
    } else {
      pricepartition.style.display = "none";
      productlistprice.textContent = "Đã hết hàng";
      productlistprice.style.color = "red";
    }
  }
}

function fillproductdiscountprice() {
  for (let i = 0; i < listOfProduct.length; i++) {
    const productdiscountprice = document.getElementById(
      listOfProduct[i].idProduct + "__price--discount",
    );
    if (listOfProduct[i].discount !== 0 && listOfProduct[i].nums !== 0) {
      productdiscountprice.textContent = (
        listOfProduct[i].price *
        (1 - listOfProduct[i].discount)
      ).toLocaleString("de-DE");
    }
  }
}

function selectProduct() {
  const Etype = document.getElementById("typeE");
  const Ctype = document.getElementById("typeC");
  const Stype = document.getElementById("typeS");
  const Btype = document.getElementById("typeB");

  function selectEtype() {
    for (let i = 0; i < listOfElectronicDevices.length; i++) {
      const Cproduct = document.getElementById(
        listOfElectronicDevices[i].idProduct,
      );
      Cproduct.style.display = "flex";
    }
    for (let i = 0; i < listOfClothes.length; i++) {
      const Cproduct = document.getElementById(listOfClothes[i].idProduct);
      Cproduct.style.display = "none";
    }
    for (let i = 0; i < listOfSportEquipments.length; i++) {
      const Sproduct = document.getElementById(
        listOfSportEquipments[i].idProduct,
      );
      Sproduct.style.display = "none";
    }
    for (let i = 0; i < listOfBooks.length; i++) {
      const Bproduct = document.getElementById(listOfBooks[i].idProduct);
      Bproduct.style.display = "none";
    }
  }

  function selectCtype() {
    for (let i = 0; i < listOfClothes.length; i++) {
      const Cproduct = document.getElementById(listOfClothes[i].idProduct);
      Cproduct.style.display = "flex";
    }
    for (let i = 0; i < listOfElectronicDevices.length; i++) {
      const Cproduct = document.getElementById(
        listOfElectronicDevices[i].idProduct,
      );
      Cproduct.style.display = "none";
    }
    for (let i = 0; i < listOfSportEquipments.length; i++) {
      const Sproduct = document.getElementById(
        listOfSportEquipments[i].idProduct,
      );
      Sproduct.style.display = "none";
    }
    for (let i = 0; i < listOfBooks.length; i++) {
      const Bproduct = document.getElementById(listOfBooks[i].idProduct);
      Bproduct.style.display = "none";
    }
  }

  function selectStype() {
    for (let i = 0; i < listOfSportEquipments.length; i++) {
      const Cproduct = document.getElementById(
        listOfSportEquipments[i].idProduct,
      );
      Cproduct.style.display = "flex";
    }
    for (let i = 0; i < listOfClothes.length; i++) {
      const Cproduct = document.getElementById(listOfClothes[i].idProduct);
      Cproduct.style.display = "none";
    }
    for (let i = 0; i < listOfElectronicDevices.length; i++) {
      const Sproduct = document.getElementById(
        listOfElectronicDevices[i].idProduct,
      );
      Sproduct.style.display = "none";
    }
    for (let i = 0; i < listOfBooks.length; i++) {
      const Bproduct = document.getElementById(listOfBooks[i].idProduct);
      Bproduct.style.display = "none";
    }
  }

  function selectBtype() {
    for (let i = 0; i < listOfBooks.length; i++) {
      const Cproduct = document.getElementById(listOfBooks[i].idProduct);
      Cproduct.style.display = "flex";
    }
    for (let i = 0; i < listOfClothes.length; i++) {
      const Cproduct = document.getElementById(listOfClothes[i].idProduct);
      Cproduct.style.display = "none";
    }
    for (let i = 0; i < listOfSportEquipments.length; i++) {
      const Sproduct = document.getElementById(
        listOfSportEquipments[i].idProduct,
      );
      Sproduct.style.display = "none";
    }
    for (let i = 0; i < listOfElectronicDevices.length; i++) {
      const Bproduct = document.getElementById(
        listOfElectronicDevices[i].idProduct,
      );
      Bproduct.style.display = "none";
    }
  }

  Etype.addEventListener("click", () => selectEtype());
  Ctype.addEventListener("click", () => selectCtype());
  Stype.addEventListener("click", () => selectStype());
  Btype.addEventListener("click", () => selectBtype());
}

function findProduct(id__product, listOfProduct) {
  for (let i = 0; i < listOfProduct.length; i++) {
    if (id__product === listOfProduct[i].idProduct) return listOfProduct[i];
  }
  return null;
}
function productdetail(id_product) {
  const idproduct = id_product.split("__")[0];
  const iddetail = document.getElementById("detail__id");
  const namedetail = document.getElementById("detail__name");
  const ratedetail = document.getElementById("detail__rate");
  const pricedetail = document.getElementById("detail__price");
  const statusdetail = document.getElementById("detail__status");
  const detail = document.getElementById("product__detail");

  const product = findProduct(idproduct, listOfProduct);
  if (product !== null) {
    iddetail.textContent = "Mã SP: " + product.idProduct;
    namedetail.textContent = "Tên SP: " + product.nameProduct;
    ratedetail.textContent = "Đánh giá người dùng: " + product.rate;
    pricedetail.textContent =
      "Giá tiền: " +
      (product.price * (1 - product.discount)).toLocaleString("de-DE");
    if (product.nums === 0)
      statusdetail.textContent = "Trạng thái: Đã hết hàng";
    else statusdetail.textContent = "Trạng thái: Còn hàng";
    detail.style.display = "block";
  }
}
function closedetail() {
  const detail = document.getElementById("product__detail");
  detail.style.display = "none";
}

countProduct();
fillproductname();
fillproductimage();
fillproductlistprice();
fillproductdiscountprice();
selectProduct();
