import React from 'react';

export class ActivityRules extends React.Component {
    constructor(){
        super();
        this.state = {
            activities: [],
            rules: [],
            checkeds: {},
            stateMap: ['', 'Selecionado','Desativo','Ativo']
        }
    }

    componentWillMount() {
        let names = {};

        this.props.activities.map((item) => {
            names[item.id] = item.name
        })

        this.setState({
            activities: this.props.activities,
            rules: this.props.rules ? this.props.rules : [],
            names: names
        })
    }

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    onEditRule(rule) {
        this.setState({
            editRule: rule,
            checkeds: rule
        })
    }

    onAddRule() {
        let rules = this.state.rules;
        let ruleValues = [];
        let stopPropagation = false;
        let checkeds = this.state.checkeds;

        if (this.state.editRule) {
            rules.map((item, i) => {
                if (_.isEqual(item, this.state.editRule)) {
                    rules[i] = checkeds
                }
            })
        } else {
            rules.map((item, i) => {
                if (_.isEqual(item, checkeds)) {
                    alert('Regra já existente')
                    stopPropagation = true;
                    return false;
                }
            })

            if (stopPropagation) {
                return false;
            }

            rules.unshift(checkeds)
        }

        this.setState({
            rules: rules,
            newRule: false, 
            editRule: false
        })

        this.props.onSaveRules(rules)

        return false;
    }

    showNewRule() {
        let checkeds = {};

        this.state.activities.map((item) => {
            checkeds[item.id] = 3;
        });

        this.setState({
            newRule: true,
            editRule: false,
            checkeds: checkeds
        });
    }

    removeRule(rule, e) {
        e.stopPropagation();
        let rules = this.state.rules;

        rules.map((item, i) => {
            if (_.isEqual(item, rule)) {
                rules.splice(i, 1)
            }
        })

        this.setState({
            rules: rules,
            newRule: false,
            editRule: false,
            checkeds: {}
        });
    }

    onCheckStatus(id, val) {
        let checkeds = this.state.checkeds;

        checkeds[id] = val;

        this.setState({
            checkeds: checkeds
        });
    }

    toggleLegend() {
        let showLegend = this.state.showLegend ? false : true;

        this.setState({
            showLegend: showLegend
        })
    }

    render() {
        let s = this.state;

        return (
            <div className="activity-rules row">
                <div className="col-md-6" >
                    <div onClick={this.showNewRule.bind(this)} className="rule-box rule-box-add">
                        <span>Nova Regra</span>
                        <div className="close-btn">
                            <i className="fa fa-plus-circle" style={{color: "#ff5a00", fontSize: 20}} aria-hidden="true"></i>
                        </div>
                    </div>
                    {s.rules.map((item,i) => {
                        let label = '';
                        Object.keys(item).map((item1) => {
                            label = label + ' ' + this.state.names[item1] + ': ' + this.state.stateMap[item[item1]]
                        });
                        return (
                            <div key={'rule' + i}>
                                <div onClick={this.onEditRule.bind(this, item)} className="rule-box">
                                    <span>{label}</span>
                                    <div className="close-btn" onClick={this.removeRule.bind(this, item)}>
                                        <i className="fa fa-times-circle" style={{fontSize: 20}} aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-md-6" >
                    {(s.newRule || s.editRule) ? 
                        (<div className="activity-rule-group">
                            <div className={s.showLegend ? "scrollable-content-wrapper active-legend" : "scrollable-content-wrapper"}>
                                <div className={s.showLegend ? "scrollable-content active-legend" : "scrollable-content"} style={s.activities.length > 6 ? {overflowY: 'scroll'} : {}}>
                                    <form ref="rulesForm">
                                        <table>
                                            <tbody>
                                            {s.activities.map((act, i) => {
                                                if (s.checkeds[act.id] == 1) {
                                                    return (
                                                        <tr onClick={this.onCheckStatus.bind(this, act.id, 2)} className="activity-list" key={i}>
                                                            <td style={{textAlign: 'center', width: 30}}>
                                                                <i className="fa fa-check-circle" style={{color: '#4fb8ad', fontSize: 22}} aria-hidden="true"></i>
                                                            </td>
                                                            <td>{act.name}</td>
                                                        </tr>
                                                    )    
                                                } else if (s.checkeds[act.id] == 2) {
                                                    return (
                                                        <tr onClick={this.onCheckStatus.bind(this, act.id, 3)} className="activity-list" key={i}>
                                                            <td style={{textAlign: 'center', width: 30}}>
                                                                <i className="fa fa-times-circle" style={{color: '#ff5e5e', fontSize: 22}} aria-hidden="true"></i>
                                                            </td>
                                                            <td>{act.name}</td>
                                                        </tr>
                                                    )
                                                } else {
                                                    return (
                                                        <tr onClick={this.onCheckStatus.bind(this, act.id, 1)} className="activity-list" key={i}>
                                                            <td style={{textAlign: 'center', width: 30}}>
                                                                <i className="fa fa-circle-o" style={{color: '#949494', fontSize: 22}} aria-hidden="true"></i>
                                                            </td>
                                                            <td>{act.name}</td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                                <div className="floater-button">
                                    <i onClick={this.onAddRule.bind(this)} className="fa fa-check-circle" style={{color: '#ff5900', fontSize: 50}} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={s.showLegend ? "subtitle-box active" : "subtitle-box"}>
                                <div className="subtitle-header">
                                    <span>Legenda</span>
                                    <i onClick={this.toggleLegend.bind(this)} className={s.showLegend ? "fa fa-angle-down" : "fa fa-angle-up"} style={{color: '#949494', fontSize: 22}} aria-hidden="true"></i>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{textAlign: 'center', width: 40}}>
                                                <i className="fa fa-check-circle" style={{color: '#4fb8ad', fontSize: 22}} aria-hidden="true"></i>
                                            </td>
                                            <td>
                                                <span>Selecionado</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'center', width: 40}}>
                                                <i className="fa fa-circle-o" style={{color: '#949494', fontSize: 22}} aria-hidden="true"></i>
                                            </td>
                                            <td>
                                                <span>Ativo</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: 'center', width: 40}}>
                                                <i className="fa fa-times-circle" style={{color: '#ff5e5e', fontSize: 22}} aria-hidden="true"></i>
                                            </td>
                                            <td>
                                                <span>Desativo</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>)
                    : 
                        (<div className="activity-rule-group"></div>)
                    }
                </div>
            </div>

        )
    }
}