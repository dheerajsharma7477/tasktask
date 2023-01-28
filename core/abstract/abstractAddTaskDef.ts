export class AbstractAddTaskDef{
    public searchValue='system errro 001'
    public status =['ALL','QA','WILLGOPRODONQA','WILLGOPROD','prod','inProgress','hold']
    public selectedStatus='ALL'
    public dragPosition = {x: 300, y: 100};
    public copyTaskArray=[]
    public branchlist=[]
    public searchModel:any
    public todayDate:any
    public branchstate:any
    public isBranchSearch:boolean
    public dragList:any
    public dragListdata:any
    public isdragStart:boolean
    public desn=[]

    public menuList=[
        {
            name:'Copy',
            param:'copyTask',
            color:'fff',
            icon:'file_copy',
            show:"IP,QA,WILLGOPROD,prod"
        },
        {
            name:'Assign To',
            param:'assign',
            color:'fff',
            icon:'assignment_ind',
            show:"IP,QA,WILLGOPROD,prod"
        },
        {
            name:'In progress',
            param:'inProgress',
            color:'fff',
            icon:'schedule',
            show:"IP,QA,WILLGOPROD,prod"
        },
        {
            name:'On QA',
            param:'QA',
            color:'ebe0ff',
            icon:'rowing',
            show:"IP,WILLGOPROD,prod"
        },
        {
            name:'Will go on Prod On QA',
            param:'WILLGOPRODONQA',
            color:'e5ffe5',
            icon:'done',
            show:"QA,IP"
        },
        {
            name:'Will go on Prod',
            param:'WILLGOPROD',
            color:'e5ffe5',
            icon:'done',
            show:"QA,IP"
        },
        {
            name:'On Prod',
            param:'prod',
            color:'e5ffe5',
            icon:'done_all',
            show:"QA,IP,WILLGOPROD"
        },
        {
            name:'On Hold',
            param:'hold',
            color:'818181',
            icon:'done_all',
            show:"QA,IP,WILLGOPROD,prod"
        },
        {
            name:'remove',
            param:'remove',
            color:'f4bebe',
            icon:'remove_circle_outline',
            show:"QA,IP,WILLGOPROD,prod"
        },
        {
            name:'Update',
            param:'Update',
            color:'d4d4d4',
            icon:'update',
            show:"QA,IP,WILLGOPROD,prod"
        },
        {
            name:'Copy to today',
            param:'copyToday',
            color:'afafaf',
            icon:'file_copy',
            show:"IP"
        }
    ]
    constructor(){}
}