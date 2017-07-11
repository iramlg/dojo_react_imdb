import React from 'react';
import { ActivityForm } from './activity_form.jsx'
import { ActivityRules } from './activity_rules.jsx'
import { Modal } from './modal_component.jsx'

export class ContainerLogic extends React.Component {
    constructor(){
        super();
        this.state = {
            campaigns: [],
            forms: [],
            activities: [],
            activitiesLimit: 10,
            rules: [],
            showEditActivity: false
        }
    }

    componentWillMount() {
        // Get the campaigns here
        setTimeout(() => {
            this.setState({
                campaigns: [{"id":91,"description":"-1007087820","selected":false},{"id":202,"description":"2000","selected":false},{"id":8,"description":"AA Homolog","selected":false},{"id":22,"description":"Ação Círio Nazaré","selected":false},{"id":49,"description":"AS 2.0 -  SÃO PAULO SEM MOBILE","selected":false},{"id":47,"description":"AS 2.0 - SÃO PAULO","selected":false},{"id":48,"description":"AS 2.0 LIGHT SÃO PAULO","selected":false},{"id":44,"description":"AUDITORES - LOJA IDEAL","selected":false},{"id":27,"description":"Auditores - Preço e Ruptura","selected":false},{"id":37,"description":"Auditoria GDA - RJ","selected":false},{"id":36,"description":"Auditoria GDA - SP","selected":false},{"id":17,"description":"BRF CN","selected":false},{"id":13,"description":"BRF Coordenadores","selected":false},{"id":18,"description":"BRF NE","selected":false},{"id":29,"description":"BRF PROMOTORES LIGHT CN","selected":false},{"id":30,"description":"BRF PROMOTORES LIGHT NE","selected":false},{"id":31,"description":"BRF PROMOTORES LIGHT SE","selected":false},{"id":32,"description":"BRF PROMOTORES LIGHT SP","selected":false},{"id":33,"description":"BRF PROMOTORES LIGHT SUL","selected":false},{"id":38,"description":"BRF PROMOTORES SEM MOBILE CN","selected":false},{"id":39,"description":"BRF PROMOTORES SEM MOBILE NE","selected":false},{"id":40,"description":"BRF PROMOTORES SEM MOBILE SE","selected":false},{"id":41,"description":"BRF PROMOTORES SEM MOBILE SP","selected":false},{"id":42,"description":"BRF PROMOTORES SEM MOBILE SUL","selected":false},{"id":16,"description":"BRF SE","selected":false},{"id":15,"description":"BRF SP","selected":false},{"id":14,"description":"BRF SUL","selected":false},{"id":10,"description":"BRF Supervisores","selected":false},{"id":6,"description":"Campanha Piloto- Levantamento Estoque e Preço","selected":false},{"id":118,"description":"Campanha Teste Coaching e Avaliação de Loja 05/01","selected":false},{"id":119,"description":"Campanha Teste Issue 1117","selected":false},{"id":190,"description":"campanha1493","selected":false},{"id":11,"description":"Homolog","selected":false},{"id":12,"description":"Homolog Global","selected":false},{"id":51,"description":"roteiro teste","selected":false},{"id":115,"description":"Roteiro Teste Coaching","selected":false},{"id":34,"description":"TESTE ","selected":false},{"id":185,"description":"Teste 2202","selected":false},{"id":117,"description":"Teste Mobile","selected":false},{"id":142,"description":"Teste Nova Pergunta","selected":false},{"id":144,"description":"Teste SPT","selected":false},{"id":19,"description":"TradeForce","selected":false},{"id":46,"description":"Trade-Force","selected":false},{"id":192,"description":"Wesley ","selected":false}]
            })
        }, 1000)

        // I am seting the forms here, but I should get them only when needed!
        setTimeout(() => {
            this.setState({
                forms: [{"FormId":557,"FormGroup":"ALERTAS","Name":"Ciclo de Alta Performance - Promotores","LineAdded":false,"Active":false,"QuestionsCount":1,"CreationDate":"/Date(1446048707000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":845,"FormGroup":"ALERTAS","Name":"NOVIDADE - SALAMITOS","LineAdded":false,"Active":false,"QuestionsCount":1,"CreationDate":"/Date(1451310175000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5902,"FormGroup":"ALERTAS","Name":"Observações sobre PDV","LineAdded":false,"Active":true,"QuestionsCount":3,"CreationDate":"/Date(1482411435000)/","Required":true,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5924,"FormGroup":"ALERTAS","Name":"abcd1234","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1483643402000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5945,"FormGroup":"ALERTAS","Name":"teste andrews","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1485277393000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5946,"FormGroup":"ALERTAS","Name":"teste abcd2","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1485287530000)/","Required":true,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5947,"FormGroup":"ALERTAS","Name":"form alert teste2","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1485290334000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5957,"FormGroup":"ALERTAS","Name":"teste123","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1486664876000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5987,"FormGroup":"ALERTAS","Name":"aaaaaaaa","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1489427693000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5991,"FormGroup":"ALERTAS","Name":"teste form 13/03","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1489430482000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5998,"FormGroup":"ALERTAS","Name":"teste123456","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1489512851000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":6015,"FormGroup":"ALERTAS","Name":"Teste 2903","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1490815210000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5970,"FormGroup":"ALERTAS","Name":"teste 09/03","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1489076377000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5978,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"Execução em Loja  - 2017 copia","LineAdded":false,"Active":true,"QuestionsCount":4,"CreationDate":"/Date(1489170766000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5949,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"Avaliação de Loja 1340","LineAdded":false,"Active":true,"QuestionsCount":2,"CreationDate":"/Date(1486397566000)/","Required":true,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5926,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"Formulario com 80 caracteres abcdadhdakajdakhfdksahfhskshjdfkshjskshskshskshkkkk","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1483730632000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5917,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"Avaliacao de loja 04/01","LineAdded":false,"Active":true,"QuestionsCount":3,"CreationDate":"/Date(1483559792000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5918,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"Teste avaliação de loja 05/01","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1483632659000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5919,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"asasas","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1483632873000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5920,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"abcd","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1483632965000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5908,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"Avaliacao de loja Teste","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1483376176000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5912,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"Execução em Loja  - 2017","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1483441008000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5914,"FormGroup":"AVALIAÇÃO DE LOJA","Name":"Sortimento - Teste","LineAdded":false,"Active":false,"QuestionsCount":1,"CreationDate":"/Date(1483449901000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5913,"FormGroup":"COACHING","Name":"Coaching Supervisor","LineAdded":false,"Active":true,"QuestionsCount":14,"CreationDate":"/Date(1483441063000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5910,"FormGroup":"COACHING","Name":"Teste 2 Form","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1483387724000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5911,"FormGroup":"COACHING","Name":"Coaching BR - 2017","LineAdded":false,"Active":true,"QuestionsCount":15,"CreationDate":"/Date(1483440769000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5922,"FormGroup":"COACHING","Name":"Formulário de Coaching 1","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1483636318000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5916,"FormGroup":"COACHING","Name":"Teste Leo Coaching","LineAdded":false,"Active":true,"QuestionsCount":2,"CreationDate":"/Date(1483476162000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5906,"FormGroup":"COACHING","Name":"Teste Form Coaching","LineAdded":false,"Active":true,"QuestionsCount":3,"CreationDate":"/Date(1483122936000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5927,"FormGroup":"COACHING","Name":"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1483738766000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5928,"FormGroup":"COACHING","Name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1483738819000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5973,"FormGroup":"COACHING","Name":"Coaching ","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1489095504000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5974,"FormGroup":"COACHING","Name":"Coaching  Teste2","LineAdded":false,"Active":true,"QuestionsCount":2,"CreationDate":"/Date(1489095587000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5903,"FormGroup":"COACHING ENCERRAMENTO","Name":"Teste coaching encerramento","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1483122106000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":1416,"FormGroup":"COACHING ENCERRAMENTO","Name":"Coaching do Supervisor Finalização","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1459550744000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":1414,"FormGroup":"COACHING INICIAL","Name":"Coaching do Supervisor Inicial","LineAdded":false,"Active":true,"QuestionsCount":2,"CreationDate":"/Date(1459549626000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":1510,"FormGroup":"COACHING INICIAL","Name":"Coaching nulo","LineAdded":false,"Active":false,"QuestionsCount":7,"CreationDate":"/Date(1461950815000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":1511,"FormGroup":"COACHING INICIAL","Name":"Coaching Supervisor - V2","LineAdded":false,"Active":true,"QuestionsCount":14,"CreationDate":"/Date(1461951677000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":1512,"FormGroup":"COACHING INICIAL","Name":"Coaching Supervisor - V2 Inativo","LineAdded":false,"Active":false,"QuestionsCount":18,"CreationDate":"/Date(1461959096000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5904,"FormGroup":"COACHING INICIAL","Name":"Teste coaching incial","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1483122187000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5905,"FormGroup":"COACHING LOJAS","Name":"Teste coaching lojas","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1483122291000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":1415,"FormGroup":"COACHING LOJAS","Name":"Coaching do Supervisor - Execução Loja","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1459550253000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":882,"FormGroup":"CONSOLIDADO","Name":"Assinatura do encarregado","LineAdded":false,"Active":false,"QuestionsCount":1,"CreationDate":"/Date(1456170641000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":1402,"FormGroup":"CONSOLIDADO","Name":"Formulário Consolidado [2016]","LineAdded":false,"Active":true,"QuestionsCount":2,"CreationDate":"/Date(1458585184000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":819,"FormGroup":"CONSOLIDADO","Name":"Form Teste Consolidado Final","LineAdded":false,"Active":false,"QuestionsCount":2,"CreationDate":"/Date(1448568716000)/","Required":true,"CustomerName":"Trade Force","TotalRows":0},{"FormId":1413,"FormGroup":"CONSOLIDADO","Name":"Formulário Consolidado [2016] V2","LineAdded":false,"Active":true,"QuestionsCount":2,"CreationDate":"/Date(1459546535000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5925,"FormGroup":"EXECUÇÃO","Name":"TESTE - Fri Jan 06 10:36:36 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1483706192000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5923,"FormGroup":"EXECUÇÃO","Name":"Teste Issue 1117 Form 1","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1483639672000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5909,"FormGroup":"EXECUÇÃO","Name":"TESTE - Mon Jan 02 16:33:10 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1483381977000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5907,"FormGroup":"EXECUÇÃO","Name":"TESTE - Mon Jan 02 11:30:38 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1483363839000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5884,"FormGroup":"EXECUÇÃO","Name":"[PASSO - 6] - GABARITO DE EXECUÇÃO - COMEMORATIVOS","LineAdded":false,"Active":false,"QuestionsCount":17,"CreationDate":"/Date(1480354799000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5563,"FormGroup":"EXECUÇÃO","Name":"[PASSO 6] - Presença DEMAIS SKUS - [SP] - 12.09","LineAdded":false,"Active":false,"QuestionsCount":3,"CreationDate":"/Date(1473710910000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5564,"FormGroup":"EXECUÇÃO","Name":"[PASSO 6] - Pesquisa de Preço e Ruptura - [SP] 12.09","LineAdded":false,"Active":true,"QuestionsCount":9,"CreationDate":"/Date(1473710954000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5898,"FormGroup":"EXECUÇÃO","Name":"TESTE - Tue Dec 20 11:17:18 BRST 2016","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1482239822000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5899,"FormGroup":"EXECUÇÃO","Name":"TESTE - Wed Dec 21 14:58:28 BRST 2016","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1482339507000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5900,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Dec 22 10:40:26 BRST 2016","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1482410422000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5929,"FormGroup":"EXECUÇÃO","Name":"Teste Multipla Escolha %","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1483990925000)/","Required":false,"CustomerName":"BRF","TotalRows":0},{"FormId":5935,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Jan 19 17:17:00 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1484853419000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5936,"FormGroup":"EXECUÇÃO","Name":"Execução Issue 1340","LineAdded":false,"Active":false,"QuestionsCount":1,"CreationDate":"/Date(1484919649000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5933,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Jan 12 14:25:01 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1484238299000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5948,"FormGroup":"EXECUÇÃO","Name":"TESTE - Tue Jan 31 11:07:37 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1485868037000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5939,"FormGroup":"EXECUÇÃO","Name":"Teste Issue 1340 - Execução","LineAdded":false,"Active":true,"QuestionsCount":4,"CreationDate":"/Date(1485275630000)/","Required":true,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5965,"FormGroup":"EXECUÇÃO","Name":"form1493","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1488477885000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5966,"FormGroup":"EXECUÇÃO","Name":"Teste wesley","LineAdded":false,"Active":true,"QuestionsCount":0,"CreationDate":"/Date(1488480903000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5967,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Mar 02 18:08:07 BRT 2017","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1488488876000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5968,"FormGroup":"EXECUÇÃO","Name":"Teste pergunta Range","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1488826815000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5969,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Mar 09 13:15:37 BRT 2017","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1489076103000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5951,"FormGroup":"EXECUÇÃO","Name":"Teste Nova Pergunta","LineAdded":false,"Active":true,"QuestionsCount":3,"CreationDate":"/Date(1486486047000)/","Required":true,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5952,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Feb 09 16:06:47 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1486663605000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5953,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Feb 09 16:08:14 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1486663694000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5954,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Feb 09 16:10:16 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":2,"CreationDate":"/Date(1486663817000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5955,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Feb 09 16:11:37 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1486663897000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5956,"FormGroup":"EXECUÇÃO","Name":"TESTE - Thu Feb 09 16:13:38 BRST 2017","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1486664016000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5959,"FormGroup":"EXECUÇÃO","Name":"Coordenadas geográficas","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1487003935000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5960,"FormGroup":"EXECUÇÃO","Name":"Teste Sku ","LineAdded":false,"Active":true,"QuestionsCount":1,"CreationDate":"/Date(1487787774000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5961,"FormGroup":"EXECUÇÃO","Name":"Teste Uzias 1","LineAdded":false,"Active":true,"QuestionsCount":19,"CreationDate":"/Date(1488455455000)/","Required":false,"CustomerName":"Trade Force","TotalRows":0},{"FormId":5825,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - Atacados","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5826,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - Atacados LIGHT","LineAdded":false,"Active":true,"QuestionsCount":7,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5827,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo - Centro Norte","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5828,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo - Nordeste","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5829,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo - São Paulo","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5830,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo - Sudeste","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5831,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo - Sul","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5832,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo light - Centro Norte","LineAdded":false,"Active":true,"QuestionsCount":7,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5833,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo light - Nordeste","LineAdded":false,"Active":true,"QuestionsCount":7,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5834,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo light - São Paulo","LineAdded":false,"Active":true,"QuestionsCount":7,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5835,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo light - Sudeste","LineAdded":false,"Active":true,"QuestionsCount":7,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5836,"FormGroup":"EXECUÇÃO","Name":"Preço e ruptura - varejo light - Sul","LineAdded":false,"Active":true,"QuestionsCount":7,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5837,"FormGroup":"EXECUÇÃO","Name":"Presença - Atacados","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5838,"FormGroup":"EXECUÇÃO","Name":"Presença - Atacados LIGHT","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5839,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo - Centro Norte","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5840,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo - Nordeste","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5841,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo - São Paulo","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5842,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo - Sudeste","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5843,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo - Sul","LineAdded":false,"Active":true,"QuestionsCount":5,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5844,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo light - Centro Norte","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5845,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo light - Nordeste","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5846,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo light - São Paulo","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5847,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo light - Sudeste","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0},{"FormId":5848,"FormGroup":"EXECUÇÃO","Name":"Presença - varejo light - Sul","LineAdded":false,"Active":true,"QuestionsCount":6,"CreationDate":"/Date(1475679486000)/","Required":true,"CustomerName":"BRF","TotalRows":0}]
            })
        }, 1500)

        // here you should get activities for this flow
        setTimeout(() => {
            this.setState({
                activities: []
            })
        }, 1500)
    }

    componentDidMount() {
        
    }

    componentWillUpdate(nextProps, nextState) {
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.campaigns.length !==  prevState.campaigns.length) {
            $('#select-animal').selectize({
                options: this.state.campaigns,
                labelField: 'description',
                searchField: ['description'],
                valueField: 'id',
                sortField: 'description'
            });
        }
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

    onCancelActicvity() {
        this.setState({
            showNewActivity: false,
            showEditActivity: false
        })
    }

    onSaveRules(rules) {
        this.setState({
            rules: rules
        })
    }

    saveFlow() {
        let data = {
            name: $(this.refs.name).val(),
            campaignId: $(this.refs.campaignId).val(),
            rules: this.state.rules,
            activities: this.state.activities
        }

        console.log(data)
        // console.log(data)
        console.log(JSON.stringify(data.rules))
    }

    render() {
        let s = this.state;

        return (
            <div className="formConfig">
                <legend>
                    <span>Configuração do Fluxo</span>
                </legend>
                <div>
                    <div className=" row">
                        <input type="text" className="col-md-3" ref="name" placeholder='Nome do fluxo' />
                        <select className="col-md-offset-2 col-md-3" ref="campaignId" id="select-animal">
                            <option value="">Selecione uma campanha</option>
                        </select>
                        <div className="col-md-offset-2 col-md-2">
                            <button className="btn btn-tf-default" onClick={() => { this.setState({showRules: true}) }}>Regras de atividades</button>
                        </div>
                    </div>
                </div>
                <div className="activities-wrapper row">
                    {s.activities.map((item, i) => {
                        return (
                            <div className="col-md-3" key={i}>
                                <div onClick={this.editActivityClick.bind(this, item)} className={s.showEditActivity.id == item.id ? "activity-box active" : "activity-box"}>
                                    <span>{item.name}</span>

                                    <div className="close-btn" onClick={this.removeActivity.bind(this, item)}>
                                        <i className="fa fa-times-circle" style={{fontSize: 20}} aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {s.showNewActivity && (
                        <div className="col-md-3">
                            <div className="activity-box active">
                                <span>Nova atividade</span>
                            </div>
                        </div>
                    )}
                    {(s.activities.length < s.activitiesLimit) &&
                        (<div className="col-md-3">
                            <div className="activity-box activity-box-add" onClick={this.addActivity.bind(this)} >
                                <span>Nova Atividade</span>
                                <div className="close-btn">
                                    <i className="fa fa-plus-circle" style={{fontSize: 20}} aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>)
                    }
                    <div className="clearfix" ></div>
                    {s.showEditActivity && <ActivityForm 
                        forms={s.forms}
                        activity={s.showEditActivity}
                        onSaveActivity={this.returnActivityForm.bind(this)} 
                        onCancelActicvity={this.onCancelActicvity.bind(this)}
                    />}
                    <div className="clearfix" ></div>
                    {s.showNewActivity && <ActivityForm 
                        forms={s.forms}
                        onSaveActivity={this.returnActivityForm.bind(this)} 
                        onCancelActicvity={this.onCancelActicvity.bind(this)}
                    />}

                </div>
                <div>
                    <button onClick={this.saveFlow.bind(this)} type="button" className="btn btn-labeled btn-primary pull-right">
                        <label><i className="fa fa-check"></i> <span>Salvar Fluxo</span></label>
                    </button>
                </div>
                {s.showRules && 
                    <Modal
                        title="Regras"
                        onCloseModal={() => {this.setState({showRules:false})}}
                    >
                        <ActivityRules
                            activities={s.activities}
                            onSaveRules={this.onSaveRules.bind(this)}
                            rules={this.state.rules}
                        />
                    </Modal>
                }
            </div>

        )
    }
}