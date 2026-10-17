const fs = require('fs');
const vm = require('vm');
const source = fs.readFileSync(__dirname + '/app.js', 'utf8');
const start = source.indexOf('const APP_VIEWS =');
const end = source.indexOf('\nfunction renderSchedule()', start);
if (start < 0 || end < 0) throw new Error('Navigation module not found');
const code = source.slice(start, end);
function node(id, extra={}) {
  const classes = new Set();
  return Object.assign({
    id, value:'', hidden:false, textContent:'', dataset:{}, attrs:{}, style:{}, classList:{
      add(c){classes.add(c)}, remove(c){classes.delete(c)}, contains(c){return classes.has(c)},
      toggle(c,on){if(on)classes.add(c);else classes.delete(c);return !!on}
    },
    setAttribute(k,v){this.attrs[k]=String(v)}, getAttribute(k){return this.attrs[k] ?? null}, removeAttribute(k){delete this.attrs[k]},
    focus(){this.focused=true}, className:'',
  }, extra);
}
const ids = {};
const views = ['command','tasks','projects','planner','habits','weekly','schedule','training','timer','checklist','notes','test','macros','lifeos','system'];
for(const v of views){ids['view-'+v]=node('view-'+v);ids['nav-'+v]=node('nav-'+v);}
ids['nav-more']=node('nav-more'); ids['nav-more'].attrs['aria-expanded']='false';
ids['sectionMenuBackdrop']=node('sectionMenuBackdrop'); ids['sectionMenuBackdrop'].classList.add('hidden');
ids['sectionMenuSearch']=node('sectionMenuSearch'); ids['sectionMenuEmpty']=node('sectionMenuEmpty');
const itemData=[['command','command home dashboard'],['tasks','tasks actions priorities'],['projects','projects milestones'],['planner','planner calendar time block'],['schedule','schedule timetable'],['habits','habits routines'],['weekly','weekly review reflection'],['timer','focus timer pomodoro'],['notes','knowledge notes search biology chemistry maths'],['test','test quiz exam questions'],['checklist','checklist specification coverage'],['training','training workout strength boxing willie bag'],['lifeos','life os finance meals nutrition routines reading decisions analytics'],['macros','macros nutrition protein calories'],['system','system backup restore settings offline']];
const items=itemData.map(([view,label])=>{const n=node('item-'+view,{dataset:{menuLabel:label},textContent:view,getAttribute(k){return k==='onclick'?`navigateFromMenu('${view}')`:null},setAttribute(k,v){this.attrs[k]=v},attrs:{}});return n;});
const groupNames=['Plan','Study','Health','System'];
const groups=groupNames.map((g,i)=>node('group-'+g,{querySelectorAll(){const ranges=[[0,8],[8,11],[11,14],[14,15]][i];return items.slice(...ranges)}}));
const listeners={};
const document={getElementById(id){return ids[id]||null},querySelectorAll(selector){if(selector==='.section-menu-item')return items;if(selector==='.section-menu-group')return groups;return []},addEventListener(name,fn){listeners[name]=fn}};
const window={scrollTo(){}};
const context={document,window,console,Math,Number,String,Array,Set,setTimeout:(fn)=>fn(),confirm:()=>true,alert:()=>{},renderCommandCentre(){},renderTasks(){},renderProjects(){},renderPlanner(){},renderHabits(){},renderWeeklyReview(){},showTrainingPanel(){},localISODate(){return '2026-10-17'},updateWillieMapping(){},renderFocusTaskOptions(){},refreshDataStatus(){},lifeRenderAll(){}};
vm.createContext(context); vm.runInContext(code,context);
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
context.openSectionMenu(); assert(!ids.sectionMenuBackdrop.classList.contains('hidden'),'menu did not open'); assert(ids['nav-more'].attrs['aria-expanded']==='true','expanded state not set');
context.filterSectionMenu('life os'); assert(items.find(x=>x.id==='item-lifeos').hidden===false,'matching Life OS item hidden'); assert(items.filter(x=>!x.hidden).length===1,'search did not filter to one result'); assert(groups[0].hidden===true && groups[2].hidden===false,'group visibility incorrect');
context.navigateFromMenu('lifeos'); assert(ids['view-lifeos'].classList.contains('hidden')===false,'selected view not shown'); assert(ids.sectionMenuBackdrop.classList.contains('hidden'),'menu did not close after navigation'); assert(ids['nav-more'].classList.contains('tab-active'),'More tab not active for secondary section');
context.showView('tasks'); assert(!ids['view-tasks'].classList.contains('hidden'),'primary view not shown'); assert(ids['nav-tasks'].classList.contains('tab-active'),'primary active tab missing'); assert(!ids['nav-more'].classList.contains('tab-active'),'More should not be active for primary view');
const before=ids['view-tasks'].classList.contains('hidden');context.showView('not-a-view');assert(ids['view-tasks'].classList.contains('hidden')===before,'invalid view changed current state');
context.openSectionMenu();listeners.keydown({key:'Escape',ctrlKey:false,metaKey:false,preventDefault(){}});assert(ids.sectionMenuBackdrop.classList.contains('hidden'),'Escape did not close menu');
console.log('PASS: navigation unit tests (open/close, search, group filtering, route selection, active state, invalid route guard, Escape)');
