import React from 'react';

export class SKUSelect extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedSKUs: [],
            visibleSKUs: []
        }
    }

    componentWillMount() {
    	this.setState({
    		skuList: this.props.skuList,
    		visibleSKUs: this.props.skuList,
            selectedSKUs: this.props.skuSelecteds ? this.props.skuSelecteds : []
    	})
    }

    searchTerm(eventInput) {
		let term = eventInput.target.value;
		
		let newSKUs = this.state.skuList.filter((item) => {
			return item.Product.toLowerCase().includes(term.toLowerCase());
		})

		this.setState({
			visibleSKUs: newSKUs
		})
	}

	selectSKU(id) {
		let selectedSKUs = this.state.selectedSKUs;

		if (selectedSKUs.indexOf(id) >= 0) {
			selectedSKUs.splice(selectedSKUs.indexOf(id), 1);
		} else {
			selectedSKUs.push(id);
		}

		this.setState({
			selectedSKUs: selectedSKUs
		});	
	}

	saveSKUList() {
        this.props.onSaveSKUs(this.props.skuQuestion.PerguntaId, this.state.selectedSKUs);
        this.props.onCloseModal();
	}

    render() {
        let s = this.state;

        return (
            <div className="sampleSurveySKU">
            	<p>A resposta selecionada está associada a uma lista de SKUs.</p>
            	<p>Selecione quais deles serão auditados pela pesquisa amostral.</p>
            	<div className="actionsHeader">
            		<div className="form-group">
						<input type="text" className="form-control" placeholder="Buscar" onChange={this.searchTerm.bind(this)} />
					</div>
            	</div>
                <div className="SKUList">
                    {s.visibleSKUs.map((sku, i) => {
                    	return (
                    		<div className="SKUSelectItem" key={'skus-' + i}>
                    			{s.selectedSKUs.includes(sku.Id) && <i className="fa fa-check"></i>}
								<span 
									onClick={this.selectSKU.bind(this, sku.Id)} 
									className={s.selectedSKUs.includes(sku.Id) ? "text selected" : "text"}>
									{sku.Product}
								</span>
							</div>
                    	)
                    })}
                </div>
                <div className="buttonHolder">
                	<button onClick={() => {this.props.onCloseModal()}} type="button" className="btn btn-labeled btn-default">
						<label><span>Fechar</span></label>
					</button>
					<button onClick={this.saveSKUList.bind(this)} type="button" className="btn btn-labeled btn-primary">
						<label><span>Salvar</span></label>
					</button>
                </div>
            </div>

        )
    }
}