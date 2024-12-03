import { StaticImageData } from "next/image";
import serviceImg1 from "../../public/assets/img/service/service-img-st2-1.jpg";
import serviceImg2 from "../../public/assets/img/service/service-img-st2-2.jpg";
import serviceImg3 from "../../public/assets/img/service/service-img-st2-3.jpg";
import serviceImg4 from "../../public/assets/img/service/service-img-st2-4.jpg";

//home theree service image 
import serviceImg5 from "../../public/assets/img/service/service-3-img1.jpg";
import serviceImg6 from "../../public/assets/img/service/service-3-img2.jpg";
import serviceImg7 from "../../public/assets/img/service/service-3-img3.jpg";

//service icon
import iconImg from "../../public/assets/img/icon/s-icon1.png"; 
import iconImg2 from "../../public/assets/img/icon/s-icon2.png";
import iconImg3 from "../../public/assets/img/icon/s-icon3.png";
import iconImg4 from "../../public/assets/img/icon/feature-product-icon-1.png";
import iconImg5 from "../../public/assets/img/icon/feature-product-icon-2.png";
import iconImg6 from "../../public/assets/img/icon/feature-product-icon-3.png";
import iconImg7 from "../../public/assets/img/icon/feature-product-icon-4.png";
import iconImg8 from "../../public/assets/img/icon/s-icon4.png"; 
import iconImg9 from "../../public/assets/img/icon/s-icon5.png";
import iconImg10 from "../../public/assets/img/icon/s-icon6.png";


interface TServiceData{
    id:number;
    serviceImg?:StaticImageData;
    serviceIcon?:string;
    serviceIconImg?:StaticImageData;
    serviceTitle:string,
    serviceBadge:string
    serviceDesc:string,
    serviceBtn?:string
}

const ServicesList:TServiceData[] = [


    //home one service end
    {
        id:5,
        serviceImg:serviceImg1,
        serviceIconImg:iconImg,
        serviceTitle:'Hedge & Tree Trimming',
        serviceBadge:'',
        serviceDesc:'Enhance the beauty and health of your outdoor spaces with expert hedge and tree trimming services.',
        serviceBtn:'read more',
    },
    {
        id:6,
        serviceImg:serviceImg2,
        serviceIconImg:iconImg2,
        serviceTitle:'Lawn Mowing',
        serviceBadge:'',
        serviceDesc:'Enjoy a perfectly manicured lawn with our reliable and professional mowing services tailored to your needs',
        serviceBtn:'read more',
    },
    {
        id:7,
        serviceImg:serviceImg3,
        serviceIconImg:iconImg3,
        serviceTitle:'Gardening Service',
        serviceBadge:'',
        serviceDesc:'Transform your garden with personalised care, including planting, weeding, and maintenance for a vibrant outdoor space.',
        serviceBtn:'read more',
    },
   
    //service page end
  ]
  
  export default ServicesList;