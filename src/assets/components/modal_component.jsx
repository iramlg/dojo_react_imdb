import React from 'react';

export class Modal extends React.Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    render() {
        let s = this.state;
        let p = this.props;

        return (
            <div className="modal fade in" id="modalEditGroup" aria-hidden="false" style={{display: 'block', paddingRight: 15}}>
                <div className="modal-backdrop fade in" style={{height: 784}} onClick={() => {this.props.onCloseModal()}}></div>
                <div className="modal-dialog modal-scores" style={{width: 650}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close waves-effect waves-float" data-dismiss="modal" aria-hidden="true" onClick={() => {this.props.onCloseModal()}} >×</button>
                            <h4 className="modal-title" data-resource-text="BusinessTerms.FormGroup">{p.title}</h4>
                        </div>
                        <div className="modal-body">
                            {p.children}
                        </div>
                        <div className="clear"></div>
                        {p.footer && (
                            <div className="modal-footer">
                                <button id="btnBackGroup" type="button" data-dismiss="modal" className="btn btn-default pull-left waves-effect waves-float">Fechar</button>
                                <a className="btn btn-primary salvar-cadastro next-step-edit-group waves-effect waves-float" id="showModalEditForms">Salvar</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        )
    }
}























