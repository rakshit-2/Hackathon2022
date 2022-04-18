import React from "react";
import FormCard from "../form-card/form-card.component";
import './form.styles.scss';

class Form extends React.Component{
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "skin",
          imageUrl: "https://media.allure.com/photos/5f42ce93fb4b596aa31dc1c1/master/pass/hyaluronic-acid-lede.jpg",
          id: 1,
          linkUrl: "info/skin",
        },
        {
          title: "lungs",
          imageUrl: "https://www.a1adsupport.com/wp/wp-content/uploads/2019/01/lungs2.png",
          id: 2,
          linkUrl: "info/lungs",
        },
        {
          title: "pain",
          imageUrl: "https://www.mcgill.ca/newsroom/files/newsroom/channels/image/pain-points-smaller.jpg",
          id: 3,
          linkUrl: "info/pain",
        },
        {
          title: "women",
          imageUrl: "https://thumbs.dreamstime.com/b/abstract-thoughtful-doubting-woman-question-mark-girl-solves-problem-chooses-solution-concept-doubt-ignorance-167617958.jpg1",
          id: 4,
          linkUrl: "info/womens",
        },
        {
          title: "kidney",
          imageUrl: "https://cdn.mos.cms.futurecdn.net/i9gCoZGQHoCSTXRxoYAPQ6.jpg",
          id: 5,
          linkUrl: "info/kidney",
        },
        {
            title: "heart",
            imageUrl: "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2017/02/HeartMuscle-625147262-770x533-1-650x428.jpg",
            id: 6,
            linkUrl: "info/heart",
        },
        {
            title: "stomach",
            imageUrl: "https://virinchihospitals.com/wp-content/uploads/2019/02/stomachpain-1200x900.jpg",
            id: 7,
            linkUrl: "info/stomach",
        },
        {
            title: "oral cavity",
            imageUrl: "https://media.istockphoto.com/vectors/anatomy-human-open-mouth-vector-id891089664?k=20&m=891089664&s=612x612&w=0&h=x-ZrT2-0drVyy3x3Z_-pzjzcZraL9fkkeFb6thaxc_8=",
            id: 8,
            linkUrl: "info/oral_cavity",
        },
        {
            title: "brain",
            imageUrl: "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/brain/brain-anatomy-teaser.ashx",
            id: 9,
            linkUrl: "info/brain",
        },
        {
            title: "legs",
            imageUrl: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2129484.jpg",
            id: 10,
            linkUrl: "info/legs",
        },
        {
            title: "others",
            imageUrl: "https://selecthealth.org/-/media/selecthealth/blogs/post/2020/02/human_image_blog_lg.ashx",
            id: 11,
            linkUrl: "info/others",
        }
      ],
    };
  }
  render(){
      return (
        <div className="form-menu">
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <FormCard key={id} { ...otherSectionProps } />
                ))
            }
        </div>
      )
  }
}

export default Form;