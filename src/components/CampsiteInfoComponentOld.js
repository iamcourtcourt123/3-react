import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component {

    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    {/* <CardImg top src={campsite.image} alt={campsite.name} /> */}
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    <div>
                    {comments.map(c => <div key={c.id}>{c.text} 
                    <br></br> -- {c.author},
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
                    </div>)}
      </div>
                        
                        
                        comments.map(c => c.text)

                    
                   
                </div>
            );
        }
    }

    render() {
        /*if (this.props.campsite != null && this.props.campsite != 'undefined')*/
        if (typeof this.props.campsite !== 'undefined' && this.props.campsite !== null) {
            return (
            <div className="container">
            <div class="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
            </div>
            </div>
            );
        }
        else {
            return (<div>  </div>);
        }
    }
}
export default CampsiteInfo;