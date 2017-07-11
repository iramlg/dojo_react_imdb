import React from 'react';
import { FrontMeasurementAnswer } from './front_measurement_answer.jsx'

export class ContainerLogic extends React.Component {
    constructor(){
        super();
        this.state = {
            skuGroups: [],
            answers: [],
            shelfCollect: [],
            showNewSkuGroup: false
        }
    }

    componentWillMount() {
        // here you should get current saveds shelfCollect
        setTimeout(() => {
            this.setState({
                shelfCollect: []
            })
        }, 1500)
    }

    addActivity() {
        this.setState({
            showEditActivity: false,
            showNewActivity: true
        })
    }

    componentWillUnmount() {
        
    }

    editActivityClick(item) {
        this.setState({
            showEditActivity: item,
            showNewActivity: false
        })
    }

    removeActivity(data, e) {
        e.stopPropagation();
        let activities = this.state.activities;

        activities.map((item, i) => {
            if (item.id === data.id) {
                activities.splice(i, 1)
            }
        })

        this.setState({
            activities: activities,
            showEditActivity: false,
            showNewActivity: false        
        });
    }

    returnActivityForm(data) {
        let atc = this.state.activities;

        if (atc.filter((item) => { return (data.name.trim(' ') === item.name.trim(' ') && data.id !== item.id)}).length > 0) {
            alert('Mais de uma atividade com o mesmo nome.')
            return false;
        }

        if (atc.filter((item) => { return data.id === item.id }).length === 0) {
            atc.push(data);
        } else {
            atc.map((item, i) => {
                if (item.id === data.id) {
                    atc[i] = data;
                }
            })
        }

        this.setState({
            activities: atc,
            showNewActivity: false,
            showEditActivity: false
        })
    }

    onAddAnswer(competitor) {
        let answers = this.state.answers;

        answers.push({
            name: '',
            shelfCollect: [],
            competitor: competitor
        })

        this.setState({
            answers: answers
        })
    }

    onAddSkuGroup(item) {
        let skuGroups = this.state.skuGroups;

        skuGroups.push(item);

        this.setState({
            skuGroups: skuGroups
        })
    }

    onSelectSkuGroup(item, selected) {
        let skuGroups = this.state.skuGroups;

        skuGroups.map((sku) => {
            if (item === sku.Id) {
                sku.disabled = selected;
            }
        });

        this.setState({
            skuGroups: skuGroups
        })
    }

    saveForm() {
        console.log(this.state)
    }

    render() {
        let s = this.state;

        return (
            <div className="formConfig">
                <legend>
                    <span>Configurações da Resposta</span>
                </legend>
                <div id="divRespostas" className="frontMeasurement">
                    <h4>Seus Produtos</h4>
                    <div>
                        {s.answers.map((item, i) => {
                            if (item.competitor) {return }
                            return <FrontMeasurementAnswer 
                                key={i} 
                                skuGroups={s.skuGroups}
                                onAddSkuGroup={this.onAddSkuGroup.bind(this)}
                                onSelectSkuGroup={this.onSelectSkuGroup.bind(this)}
                            />
                        })}
                        <button onClick={this.onAddAnswer.bind(this, 0)} type="button" className="btn btn-labeled btn-primary pull-right">
                            <label><i className="fa fa-check"></i> <span>Adicionar resposta</span></label>
                        </button>
                    </div>
                    <div className="clearfix" ></div>
                    <h4 className="competitor">Produtos de concorrentes</h4>
                    <div>
                        {s.answers.map((item, i) => {
                            if (!item.competitor) {return }
                            return <FrontMeasurementAnswer 
                                key={i} 
                                skuGroups={s.skuGroups}
                                onAddSkuGroup={this.onAddSkuGroup.bind(this)}
                                onSelectSkuGroup={this.onSelectSkuGroup.bind(this)}
                            />
                        })}
                        <button onClick={this.onAddAnswer.bind(this, 1)} type="button" className="btn btn-labeled btn-primary pull-right">
                            <label><i className="fa fa-check"></i> <span>Adicionar resposta</span></label>
                        </button>
                    </div>
                </div>
                <div className="clearfix" ></div>
                <div>
                    <button onClick={this.saveForm.bind(this)} type="button" className="btn btn-labeled btn-primary pull-right">
                        <label><i className="fa fa-check"></i> <span>Testar save</span></label>
                    </button>
                </div>
            </div>
        )
    }
}