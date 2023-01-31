import { icon } from "../assets/svg/types"

type RouteT = {
    link:{full:string,base:string},
    label?:string,
    svgName?:icon,
    name?:string
}

export const links = {
    registration: '/registration',
    hashTags: {
        full:'/hash-tags?page=1&orderFieldName=questionsNumber&orderValue=ASC',
        base:'/hash-tags'
    },
    questions:{
        full:'/questions?page=1&orderFieldName=createdAt&orderValue=DESC&search=&hashTags=&onlyAnswered=false',
        base:'/questions'
    },
    users:{
        full:'/users?page=1&orderFieldName=rating&orderValue=ASC',
        base:'/users'
    },
    communities:{
        full:'/communities?page=1&orderFieldName=membersNumber&orderValue=ASC&search=&hashTags=',
        base:'/communities'
    },
    createQuestion:'/create-question',
    cabinetLinks:{
        edit:'?dir=edit',
        profile:'?dir=profile',
        activity:'?dir=activity&subdir=summary',
        editDirSubDirs:{
            editProfile:'&subdir=edit-profile',
            deleteProfile:'&subdir=delete-profile',
        },
        activityDirSubDirs:{
            summary:'&subdir=summary',
            tags:'&subdir=tags',
            questions:'&subdir=questions',
            answers:'&subdir=answers',
        }
    }
}

export const activityDirSubDirs:RouteT[] = [
    {
        label:'Summary',
        link:{
            full:links.cabinetLinks.activityDirSubDirs.summary,
            base:links.cabinetLinks.activityDirSubDirs.summary,
        },
        name:'summary',
    },
    {
        label:'Questions',
        link:{
            full:links.cabinetLinks.activityDirSubDirs.questions,
            base:links.cabinetLinks.activityDirSubDirs.questions,
        },
        name:'questions',
    },
    {
        label:'Answers',
        link:{
            full:links.cabinetLinks.activityDirSubDirs.answers,
            base:links.cabinetLinks.activityDirSubDirs.answers,
        },
        name:'answers',
    },
    {
        label:'Tags',
        link:{
            full:links.cabinetLinks.activityDirSubDirs.tags,
            base:links.cabinetLinks.activityDirSubDirs.tags,
        },
        name:'tags',
    },
]

export const cabinetRoutes:RouteT[] = [
    {
        label:'Profile',
        link:{
            full:links.cabinetLinks.profile,
            base:links.cabinetLinks.profile,
        },
        name:'profile'
    },
    {
        label:'Activity',
        link:{
            full:links.cabinetLinks.activity,
            base:links.cabinetLinks.activity,
        },
        name:'activity'
    },
]

export const editDirSubDirs:RouteT[] = [
    {
        label:'Edit profile',
        link:{
            full:links.cabinetLinks.editDirSubDirs.editProfile,
            base:links.cabinetLinks.editDirSubDirs.editProfile,
        },
        name:'edit-profile'
    },
    {
        label:'Delete profile',
        link:{
            full:links.cabinetLinks.editDirSubDirs.deleteProfile,
            base:links.cabinetLinks.editDirSubDirs.deleteProfile,
        },
        name:'delete-profile'
    },
] 


export const sideBarRoutes:RouteT[] = [
    {
        link:{
            full:links.hashTags.full,
            base:links.hashTags.base,
        },
        label:'Tags',
        svgName:'hash-tag'
    },
    {
        link:{
            full:links.questions.full,
            base:links.questions.base,
        },
        label:'Questions',
        svgName:'question'
    },
    {
        link:{
            full:links.users.full,
            base:links.users.base,
        },
        label:'Users',
        svgName:'user'
    },
    {
        link:{
            full:links.communities.full,
            base:links.communities.base,
        },
        label:'Communities',
        svgName:'communities'
    },
]
