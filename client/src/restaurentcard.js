import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import '../src/card.scss'

const PostsData = [
  {
    restaurantID: "6317637",
    restaurantName: "Le Petit Souffle",
    cuisines: "French, Japanese, Desserts",
    averageCostForTwo: "1100",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.8",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "314",
  },

  {
    restaurantID: "6304287",
    restaurantName: "Izakaya Kikufuji",
    cuisines: "Japanese",
    averageCostForTwo: "1200",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.5",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "591",
  },
  {
    restaurantID: "6300002",
    restaurantName: "Heat - Edsa Shangri-La",
    cuisines: "Seafood, Asian, Filipino, Indian",
    averageCostForTwo: "4000",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.4",
    ratingColor: "green",
    ratingText: "Very Good",
    votes: "270",
  },
  {
    restaurantID: "6318506",
    restaurantName: "Ooma",
    cuisines: "Japanese, Sushi",
    averageCostForTwo: "1500",
    currency: "Botswana Pula(P)",
    hasTableBooking: "no",
    hasOnlineDelivery: "no",
    aggregateRating: "4.9",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "365",
  },
  {
    restaurantID: "6314302",
    restaurantName: "Sambo Kojin",
    cuisines: "Japanese, Korean",
    averageCostForTwo: "1500",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.8",
    ratingColor: "dark green",
    ratingText: "excellent",
    votes: "229",
  },
  {
    restaurantID: "18189371",
    restaurantName: "Din Tai Fung",
    cuisines: "Chinese",
    averageCostForTwo: "1000",
    currency: "Botswana Pula(P)",
    hasTableBooking: "no",
    hasOnlineDelivery: "no",
    aggregateRating: "4.4",
    ratingColor: "green",
    ratingText: "Very Good",
    votes: "336",
  },

  {
    restaurantID: "6300781",
    restaurantName: "Buffet 101",
    cuisines: "Asian, European",
    averageCostForTwo: "2000",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4",
    ratingColor: "green",
    ratingText: "Very Good",
    votes: "520",
  },
  {
    restaurantID: "6301290",
    restaurantName: "Vikings",
    cuisines: "Seafood, Filipino, Asian, European",
    averageCostForTwo: "2000",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.2",
    ratingColor: "green",
    ratingText: "Very Good",
    votes: "677",
  },
  {
    restaurantID: "6300010",
    restaurantName: "Spiral - Sofitel Philippine Plaza Manila",
    cuisines: "European, Asian, Indian",
    averageCostForTwo: "6000",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.9",
    ratingColor: " dark green",
    ratingText: "Excellent",
    votes: "621",
  },
  {
    restaurantID: "6314987",
    restaurantName: "Locavore",
    cuisines: "Filipino",
    averageCostForTwo: "1100",
    currency: "Botswana Pula(P)",
    hasTableBooking: "yes",
    hasOnlineDelivery: "no",
    aggregateRating: "4.8",
    ratingColor: "dark green",
    ratingText: "Very Good",
    votes: "336",
  },
];

class RestaurentCard extends Component {
    constructor() {
    super();
    
    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: PostsData
    });
  }
    render () {
        return(
            <div>
      <header className="app-header"></header>
      <Title />
      <div className="app-card-list" id="app-card-list" style={{display:'flex', flexDirection:"column" }}>
        {
          Object
          .keys(this.state.posts)
          .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
        }
    </div>
    </div>

        )

    }

}

class Title extends React.Component {
  render() {
    return <section className="app-title">
      <div className="app-title-content">
        <h3 style={{color:'green'}}>List of Restaurants</h3>

      </div>
    </section>
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }

}
class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader 
        restaurantID={this.props.details.restaurantID} 
        restaurantName={this.props.details.restaurantName} />
        

        <CardBody 
        cuisines={this.props.details.cuisines} 
        averageCostForTwo={this.props.details.averageCostForTwo}
        currency={this.props.details.currency}
        hasTableBooking={this.props.details.hasTableBooking}
        hasOnlineDelivery={this.props.details.hasOnlineDelivery}
        aggregateRating={this.props.details.aggregateRating}
        ratingColor={this.props.details.ratingColor}
        ratingText={this.props.details.ratingText}
        votes={this.props.details.votes}
         />

      </article>
    )
  }
}


class CardHeader extends React.Component {
  render() {
             //const { image, category } = this.props;
             const { restaurantID, restaurantName } = this.props;
             // var style = {
             //     backgroundImage: 'url(' + image + ')',
             // };

             return (
               <header className="card-header">
                 {/* <h4 className="card-header--title">{category}</h4> */}
                 <img
                   src="https://image.flaticon.com/icons/svg/227/227390.svg"
                   alt=""
                   style={{height:"100px", width:"90px"}}
                 />
                 <h4 className="card-header--title">
                   Restaurant ID : {restaurantID}
                 </h4>
                 <h4 className="card-header--title">
                   Restaurant Name: {restaurantName}
                 </h4>
               </header>
             );
           }
}


class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
 

        <p className="body-content">

        <div>
            Cuisines:{this.props.cuisines}
        </div>
            <div>
            Average Cost For Two: {this.props.averageCostForTwo}
            </div>
            <div>
              Currency:  {this.props.currency}
            </div>
            <div>
                Has table for Two? : {this.props.hasTableBooking}
            </div>
            <div>
                Has Online Delivery : {this.props.hasOnlineDelivery}
            </div>
            <div>
                AGGREGATE RATING : {this.props.aggregateRating}
            </div>
            <div>
                RATING COLOR : {this.props.ratingColor}
            </div>
            <div>
                RATING TEXT : { this.props.ratingText}
            </div>
            <div>
                VOTES : {this.props.votes}
            </div>
                
            
        </p>
        
        <Button />
      </div>
    )
  }
}
 export default RestaurentCard;