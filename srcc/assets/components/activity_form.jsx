import React from 'react';
let selectizeInput;

export class ActivityForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            forms: [],
            selectedForms: []
        }
    }

    componentWillMount() {
        let items = [];

        console.log(this.props)
        if (this.props.activity) {
            items = this.props.activity.forms
        }

        this.setState({
            name: this.props.activity ? this.props.activity.name : '',
            forms: this.props.forms
        })

        if (this.props.forms.length > 1) {
            let optGroups = [];

            this.props.forms.map((item) => {
                
                if (optGroups.filter((group) => { return group.name === item.FormGroup }).length === 0) {
                    optGroups.push({
                        id: item.FormGroup,
                        name: item.FormGroup
                    })
                }
            })

            setTimeout(() => {
                let SelectInput = $('#select-forms').selectize({
                    plugins: ['remove_button'],
                    options: this.props.forms,
                    labelField: 'Name',
                    searchField: ['Name'],
                    valueField: 'FormId',
                    sortField: 'Name',
                    items: items,
                    maxItems: 400,
                    optgroups: optGroups,
                    optgroupField: 'FormGroup',
                    optgroupLabelField: 'name',
                    optgroupValueField: 'name'
                });
                selectizeInput = SelectInput[0].selectize;
            }, 500)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.activity && this.props.activity) {
            if (prevProps.activity.id !== this.props.activity.id) {
                selectizeInput.destroy();
                this.fillComponent();
            }
        }
    }

    fillComponent() {
        let items = [];

        if (this.props.activity) {
            items = this.props.activity.forms
        }


        this.setState({
            name: this.props.activity ? this.props.activity.name : '',
            forms: this.props.forms
        })

        if (this.props.forms.length > 1) {
            let optGroups = [];

            this.props.forms.map((item) => {
                
                if (optGroups.filter((group) => { return group.name === item.FormGroup }).length === 0) {
                    optGroups.push({
                        id: item.FormGroup,
                        name: item.FormGroup
                    })
                }
            })

            setTimeout(() => {

                let SelectInput = $('#select-forms').selectize({
                    plugins: ['remove_button'],
                    options: this.props.forms,
                    labelField: 'Name',
                    searchField: ['Name'],
                    valueField: 'FormId',
                    sortField: 'Name',
                    items: items,
                    maxItems: 400,
                    optgroups: optGroups,
                    optgroupField: 'FormGroup',
                    optgroupLabelField: 'name',
                    optgroupValueField: 'name'
                });
                selectizeInput = SelectInput[0].selectize;
            }, 500)
        }
    }

    onCancel(item) {

    }

    onSaveActivity() {
        let activity = {}

        if (this.props.activity) {
            activity = this.props.activity
        }

        if (!activity.id) {
            activity.id = Math.floor(Math.random() * 1000000);
        }

        activity.name = $(this.refs.activityName).val();
        activity.forms = $(this.refs.selectizeElement).val();

        if (activity.name.trim(" ") == "") {
            alert('fail');
            return false;
        }

        this.props.onSaveActivity(activity)
    }

    onChangeName(event) {
        this.setState({
            name:event.target.value
        })
    }

    render() {
        let s = this.state;

        return (
            <div className="activity-form">
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="activity-label" ref="activityName" value={s.name} onChange={this.onChangeName.bind(this)} placeholder='Nova atividade' />
                    </div>
                    <div className="col-md-offset-2 col-md-7">
                        <select id="select-forms" ref="selectizeElement">
                            <option value="">Vincular formulários a essa atividade:</option>
                        </select>
                    </div>
                </div>
                <button onClick={this.onSaveActivity.bind(this)} type="button" className="btn btn-flat pull-right">
                    Salvar Atividade
                </button>
                <button onClick={this.props.onCancelActicvity} type="button" className="btn btn-flat btn-flat-grey pull-right">
                    Cancelar
                </button>
                <div className="clearfix" ></div>
            </div>

        )
    }
}