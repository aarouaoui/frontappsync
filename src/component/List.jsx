import React , {Component} from "react";

class List extends Component {

    render() {
 
        const elts = this.props.elements.map((element) => 
        {
            let classCard = 'card mt-md-3 mb-md-5' 
            let cardBodyClass = 'card-body'
            if(element.type ===  "Alert" ) {
                classCard += " border-danger "
                cardBodyClass += " bg-danger"
            }

            
        
        return <div class={classCard}>
                <div class={cardBodyClass}>
                <h5 class="card-title">{ element.title == null ? 'Info le parisien' : element.title }</h5>
                <p class="card-text">{ element.content }</p>
                </div>
                <div class="card-footer">
                <small class="text-muted">{element.author}</small>
                </div>
            </div>   
        }
      )

        

        return (
            <ul>
                {elts}
            </ul>
        )
    }
}

export default List;