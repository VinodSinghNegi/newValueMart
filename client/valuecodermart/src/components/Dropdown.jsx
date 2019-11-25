import React from 'react';
import './style.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
       options:[
        {
            "id": 1,
            "name": "Aaaaaa",
            "count": 1
        },
        {
            "id": 2,
            "name": "Bbbbbb",
            "count": 1

        },
        {
            "id": 3,
            "name": "Cccccc",
            "count": 1

        },
        {
            "id": 4,
            "name": "Dddddd",
            "count": 1
        }
    ]
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: !this.state.displayMenu })
  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"blue",width:"200px"}} >
	        <div className="button" id="b1" onClick={this.showDropdownMenu}> Select Items</div>
        

          { this.state.displayMenu ? (
            
            this.state.options.map((item,i)=>(   
            
                <li key={i}>
                  {item.name}{" "}
                  <div >
                  <input type="number" defaultValue="0" min="0" max="10"/>
                  </div>
                </li>
             
             ))
            

          
       
        ):
        (
          null
        )
        }

	      </div>

    );
  }


}


export default Dropdown;
