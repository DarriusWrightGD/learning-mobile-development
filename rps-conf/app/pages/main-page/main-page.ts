import {EventData, Observable} from 'data/observable';
import {Page} from 'ui/page';


let page:Page;

var tempSessions = [
    {
        id:'0',
        title: 'session 1'
    },
    {
        id:'1',
        title: 'session 2'
    },
    {
        id:'2',
        title: 'session 3'
    },
]

export function pageLoaded(args: EventData){
    let page = <Page>args.object;
    page.bindingContext = new Observable({
        sessions:tempSessions
    });
    console.log("the page has loaded");
}