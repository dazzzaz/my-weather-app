import React, { Component } from 'react';

class Bgphoto extends Component {

        state={
          Ybg1: true, 
          Ygb2: false, 
          Ybg3: false 
      }

      componentDidMount() {
        document.addEventListener('scroll', (event) => {
            
            if (window.pageYOffset < 300 ){
                this.setState({Ybg1: true, Ybg2: false, Ybg3: false})
            }
            else if (window.pageYOffset >= 300 && window.pageYOffset < 700){
                this.setState({Ybg1: false, Ybg2: true, Ybg3: false})
            }
            else if (window.pageYOffset >= 700 ){
                this.setState({Ybg1: false,Ybg2: false, Ybg3: true})
            }
        });
    }

    componentWillUnmount() {
    }

      render() {
        return (
            <div>
                <div className={this.state.Ybg1 ? "homebg1" : this.state.Ybg2 ? "homebg2" : "homebg3"}></div>
            </div>
        );
    }
}

export default Bgphoto;
