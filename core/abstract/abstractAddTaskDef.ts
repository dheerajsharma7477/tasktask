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
    public menuList=[
        {
            name:'On QA',
            param:'QA',
            color:'ebe0ff',
            icon:'rowing'
        },
        {
            name:'Will go on Prod On QA',
            param:'WILLGOPRODONQA',
            color:'e5ffe5',
            icon:'done'
        },
        {
            name:'Will go on Prod',
            param:'WILLGOPROD',
            color:'e5ffe5',
            icon:'done'
        },
        {
            name:'On Prod',
            param:'prod',
            color:'e5ffe5',
            icon:'done_all'
        },
        {
            name:'On Hold',
            param:'hold',
            color:'818181',
            icon:'done_all'
        },
        {
            name:'remove',
            param:'remove',
            color:'f4bebe',
            icon:'remove_circle_outline'
        },
        {
            name:'Update',
            param:'Update',
            color:'d4d4d4',
            icon:'update'
        },
        {
            name:'Copy to today',
            param:'copyToday',
            color:'afafaf',
            icon:'file_copy'
        }
    ]
    constructor(){}
}