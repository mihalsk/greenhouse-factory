import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useRef, useState, useEffect } from "react"
import { useCookies } from 'react-cookie';
import axios from 'axios';
import MainMenu from './components/MainMenu';
import Btn from './components/Btn';
import Request from './components/Request';
import ModalWindow from './components/ModalWindow';
import YaMap from './components/YaMap';
import AdvItem from './components/AdvItem';
import Card from './components/Card';
import WhyItem from './components/WhyItem';
import ReviewCard from './components/ReviewCard';
function App() {
  const catalogRef = useRef(null)
  const requestRef = useRef(null)
  const partnersRef = useRef(null)
  const reviewsRef = useRef(null)

  var menuDict = {
    "Каталог": () => catalogRef.current.scrollIntoView(),
    "Расчет стоимости": () => requestRef.current.scrollIntoView(),
    "Партнеры": () => partnersRef.current.scrollIntoView(),
    "Отзывы": () => reviewsRef.current.scrollIntoView(),
  };
  
  const [cookies, setCookie] = useCookies(['user']);

  const [cityid, setCityId] = useState(cookies.cityid === undefined ? 1 : cookies.cityid);
  const [city, setCity] = useState(null);

  const [cities, setCities] = useState([]);
  const [citiesErrored, setCitiesErrored] = useState(false);
  const [citiesLoading, setCitiesLoading] = useState(true);

  const [goods, setGoods] = useState([]);
  const [goodsErrored, setGoodsErrored] = useState(false);
  const [goodsLoading, setGoodsLoading] = useState(true);

  const [reviews, setReviews] = useState([]);
  const [reviewsErrored, setReviewsErrored] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const cityChanged = e => {
    setCookie('cityid', e.target.value, { path: '/' });
    setCity(cities.filter(obj => { return obj.id == e.target.value })[0])
  }

  const [isConsultationModalVisible, setIsConsultationModalVisible] = useState(false);
  const openConsultationModal = () => {
    setIsConsultationModalVisible(true)
  }
  const closeConsultationModal = () => {
    setIsConsultationModalVisible(false)
  }
  
  const [isCityModalVisible, setIsCityModalVisible] = useState(false);
  const openCityModal = () => {
    setIsCityModalVisible(true)
  }
  const closeCityModal = () => {
    setIsCityModalVisible(false)
  }

  const [isPhoneModalVisible, setIsPhoneModalVisible] = useState(false);
  const openPhoneModal = () => {
    setIsPhoneModalVisible(true)
  }
  const closePhoneModal = () => {
    setIsPhoneModalVisible(false)
  }
  

  const [isPreviewModalVisible, setIsPreviewModalVisible] = useState(false);
  const [currentPreviewSrc, setCurrentPreviewSrc] = useState(`${process.env.PUBLIC_URL}/not-found.jpg`);
  const openPreviewModal = () => {
    setIsPreviewModalVisible(true)
  }
  const closePreviewModal = () => {
    setIsPreviewModalVisible(false)
  }
  const imgClick = (e) => {
    setCurrentPreviewSrc(`${e.target.src.replace('T-crab','T-crab@2x')}`)
    setIsPreviewModalVisible(true);
  }

  useEffect(() => {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    var host = `${process.env.REACT_APP_API_HOST}:8000`
    console.log(host)
    axios
      .get(`http://${host}/cities`)
      .then((response) => {
        setCities(response.data)
      })
      .catch(error => {
        console.log(error);
        setCitiesErrored(true)
      })
      .finally(() => (setCitiesLoading(false)));

      axios
      .get(`http://${host}/goods`)
      .then(response => {
        setGoods(response.data);
      })
      .catch(error => {
        console.log(error);
        setGoodsErrored(true);
      })
      .finally(() => (setGoodsLoading(false)));

      axios
      .get(`http://${host}/reviews`)
      .then(response => {
        setReviews(response.data);
        
      })
      .catch(error => {
        console.log(error);
        setReviewsErrored(true);
      })
      .finally(() => (setReviewsLoading(false)));
    return () => {
        
    }
}, [])
useEffect(() => {
  setCity(cities.filter(obj => { return obj.id == cityid })[0])
}, [cities])

  return (
    <div className="App">
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" /> */}
      
      <div className="header w-100 flex-column d-flex justify-content-center align-items-center">
        <div className="w-100 row d-flex justify-content-center align-items-center">
          <div className="container row">
            <MainMenu menuDict={ menuDict } 
                      showModalCity={openCityModal}
                      showModalPhone={openPhoneModal}
                      cityName={ city != null ? city.name : '' } 
                      phone={ city != null ? city.phone : '' }>
            </MainMenu>
            <ModalWindow 
                isModalVisible={ isCityModalVisible } 
                handlerClose={ closeCityModal }
                body={
                <div>
                  <select onChange={ cityChanged } value={ Number(cookies.cityid) }>
                    {
                        Object.keys(cities).map((i) => ( 
                          <option key={ cities[i].id } value={ cities[i].id }>
                            { cities[i].name }
                          </option>
                        ))
                    }
                  </select>
                </div> 
              }>
            </ModalWindow>

            <ModalWindow 
                isModalVisible={ isPhoneModalVisible } 
                handlerClose={ closePhoneModal }
                body={<div>ЗВОНОК</div> }>
            </ModalWindow>
          </div>
        </div>
        
      </div>

      <div className="cons w-100 flex-column d-flex justify-content-center align-items-center">
        <div className="w-100 flex-column d-flex justify-content-center align-items-center">
          <div className="container">
            <div className='row'>
              <div className="col-md-4 flex-column d-flex justify-content-left p-5">
                <div className="row font-weight-bold h3 m-0">КРАБ-СИСТЕМА</div>
                <div className="row m-0"><p>Для быстровозводимых<br/>каркасных конструкций</p></div>
                <Btn title="Получить консультацию" action={ openConsultationModal }/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="advantages w-100 flex-column d-flex justify-content-center align-items-center">
          <div className="text-center font-weight-bold h3">ПРЕИМУЩЕСТВА СИСТЕМЫ</div>
          <div className="column">
              <div className="container row">
                <AdvItem className="col-md" srcLink="bodybuilding.svg"
                  text={
                    <div>
                      <p className="h6 font-weight-bold">Высокая прочность, жёсткость и надёжность</p>
                      <p>По прочности  соединение с помощью краб-системы ничем не уступает сварке</p>
                    </div>
                    }>
                </AdvItem>
                <AdvItem className="col-md" srcLink="piggy.svg"
                  text={
                    <div>
                      <p className="h6 font-weight-bold">Низкая стоимость</p>
                      <p>Цена конструкции относительна низка, так как:<br/>
                          -Вам не нужно использовать сварочный аппарат<br/>
                          -Работу Вы можете сделать своими руками
                      </p>
                    </div>
                    }>
                </AdvItem>
              </div>
            <div className="container row">
                <AdvItem className="col-md" srcLink="cycle.svg"
                  text={
                    <div>
                      <p className="h6 font-weight-bold">Возможность многоразового использования</p>
                      <p>Система соединения позволяет перестроить конструкцию - уменьшить, увеличить размеры</p>
                    </div>
                    }>
                </AdvItem>
                <AdvItem className="col-md" srcLink="montage.svg"
                  text={
                    <div>
                      <p className="h6 font-weight-bold">Простота монтажа</p>
                      <p>Для выполнения работ Вам не требуется специальных знаний, Краб-система закрепляется при помощи болтов и гаек</p>
                    </div>
                    }>
                </AdvItem>
            </div>
          </div>
      </div>

      <div  ref={ catalogRef } className="catalog w-100 d-flex justify-content-center align-items-center flex-column">
      <div className="text-center font-weight-bold h3">ВСЕГДА В НАЛИЧИИ</div>
      <div className="d-flex justify-content-center align-items-center flex-row">
        <div className="container row">
          {
              Object.keys(goods).slice(0, 4).map((i) => (
                <Card className="col-md" 
                      imgClick={imgClick} 
                      srcLink={goods[i].photo} 
                      name={goods[i].name}
                      price={goods[i].price} 
                      measure="комп." 
                      btnText="Заказать" 
                      key={goods[i].id}>
                </Card>
              ))
          }
        </div>
      </div>
    </div>

    <div className="why w-100 d-flex justify-content-center align-items-center flex-column">
      <div className="text-center h3">ПОЧЕМУ МЫ?</div>
      <div className="">
        <div className="container row">
          <WhyItem className="col-md" srcLink="factory.svg"
            text={
              <div>
                <p className="h6 font-weight-bold">Собственное производство</p>
                <p>Мы изготавливаем элементы краб-системы на собственном производстве в Вологде, уделяя особое внимание качеству.</p>
              </div>
            }>
           </WhyItem>
           <WhyItem className="col-md" srcLink="truck.svg"
            text={
              <div>
                <p className="h6 font-weight-bold">Доставка по всей России</p>
                <p>Мы осуществляем доставку нашей продукции по всей России.</p>
              </div>
            }>
           </WhyItem>
           <WhyItem className="col-md" srcLink="rub.svg"
            text={
              <div>
                <p className="h6 font-weight-bold">Доступные цены</p>
                <p>Так как мы являемся производителем, мы предлагаем нашу продукцию без лишних наценок.</p>
              </div>
            }>
           </WhyItem>
           <WhyItem className="col-md" srcLink="like.svg"
            text={
              <div>
                <p className="h6 font-weight-bold">Гарантия качества</p>
                <p>Мы уделяем особое внимание качеству нашей продукции и дорожим нашими клиентами.</p>
              </div>
            }>
           </WhyItem>
        </div>
      </div>
    </div>

    <div className="factory w-100 flex-column d-flex justify-content-center align-items-center">
      <div className="container column">
        <div className="text-center font-weight-bold h3 col-md">НАШЕ ПРОИЗВОДСТВО</div>
        <video className="col-md" src={require('./assets/vid.mp4')} poster={require('./assets/rectangle-1.png')} controls loop>
          Извините, Ваш браузер не поддерживает просмотр встроенного видео,
          но вы можете скачать его по <a href={require('./assets/vid.mp4')}>ссылке</a>
          и посмотреть в Вашем плейере!
        </video>
      </div>
    </div>

    <div ref={ requestRef } className="request w-100 flex-column d-flex justify-content-center align-items-center">
      <div className="container row flex-row-reverse">
        <Request className="col-md-4 p-2" action="showRequestModal"></Request>
      </div>
    </div>

    <div ref={ partnersRef } className="partners w-100 flex-column d-flex justify-content-center align-items-center">
      <div className="text-center font-weight-bold h3">НАШИ ПАРТНЁРЫ</div>
      <div className="container align-items-center">
        <div className="row align-items-center">
          <img className="col-md-4" src={require('./assets/15efa96f4377a473c718553f02721b59 1.png')} 
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src=require('./assets/not-found.jpg');
                }}/>
          <img className="col-md-4" src={require('./assets/Лого_старый шрифт 1.png')} 
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src=require('./assets/not-found.jpg');
                }}/>
          <img className="col-md-4" src={require('./assets/logo_gf1 1.png')} 
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src=require('./assets/not-found.jpg');
                }}/>
        </div>
      </div>
    </div>

    <div ref={ reviewsRef } className="reviews w-100 flex-column d-flex justify-content-center align-items-center">
      <div className="text-center font-weight-bold h3">ОТЗЫВЫ КЛИЕНТОВ</div>
      <div className="container row">
        <div className="col-md-2 d-none d-md-flex"></div>
        {
              Object.keys(reviews).slice(0, 3).map((i) => (
                <ReviewCard className="col-md" 
                      text={reviews[i].text}  
                      srcLink={reviews[i].photo} 
                      name={reviews[i].Author_name}
                      key={reviews[i].id}>
                </ReviewCard>
              ))
          }
        <div className="col-md-2 d-none d-md-flex"></div>
      </div>
    </div>

    <div className="map w-100 flex-column d-flex justify-content-center align-items-center">
      <div className="container-fluid justify-content-center p-0 m-0">
        <div className="container-fluid d-block p-0 m-0 justify-content-center">
          <div className="col-md text-center font-weight-bold h3 p-0 m-0">МЫ НА КАРТЕ</div>
          <YaMap className="col-md p-0 m-0" city={ city }></YaMap>
        </div>
      </div>
    </div>

    <div className="footer w-100 row d-flex justify-content-center align-items-center">
      <div className="container row flex-nowrap">
        <div id="brand" className="col-md-2"><img src={require("./assets/Logo 1.svg").default}/></div>
        <div className="col-md-4 d-none d-md-block"></div>
        <div className="col-md-3 d-none d-md-flex h6 font-weight-bold justify-content-center container">       
          <div className='row'>
            <img className="img" src={require('./assets/map-marker.svg').default}/>
            <div className="align-self-center">{ city != null ? city.name : '' }</div>
          </div>
        </div>
        <div className="col-md-3 h6 font-weight-bold justify-content-center container">
          <div className='row justify-content-end'>
            <img className="img" src={require('./assets/phone.svg').default}/>
            <div className="align-self-center">{ city != null ? city.phone : '' }</div>
          </div>
        </div>
      </div>
    </div>

    <ModalWindow
      isModalVisible={isConsultationModalVisible}
      handlerClose={ closeConsultationModal }
      body = {
        <div>
          ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
        </div>
      }>
    </ModalWindow>
    <ModalWindow
      isModalVisible={isPreviewModalVisible}
      handlerClose={ closePreviewModal }
      body = {
        <div>
          <img className="col-md align-self-center" src={currentPreviewSrc}/>
        </div>
      }>
    </ModalWindow>
    </div>
  );
}

export default App;
