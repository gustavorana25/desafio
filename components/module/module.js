import React, { Component } from 'react'
import './style.scss'

class Module extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
        }
    }

    toogleShow(){
        this.setShowDetails(!this.state.showDetail);    
    }

    setShowDetails(val){
        this.setState({ showDetail: val});
    }
  
    render() {
        const { nome, conteudos } = this.props.module;
        return (
            <div className="classes-list">
                <div onClick={()=>this.toogleShow()} className="box-module">
                    <h3>{nome}</h3>
                    {this.props.newModule && <h5 className="newModule">Novo</h5>}
                </div>

                <div className={"classes-info " + (this.state.showDetail ? 'active' : '')}>
                    <div onClick={()=>this.setShowDetails(false)} className="close-btn">x</div>
                    {conteudos.map(conteudo=>(
                        <h4 key={conteudo.id}>{conteudo.titulo}</h4>
                    ))}
                </div>
            </div>
        )
    }
}


export default Module
