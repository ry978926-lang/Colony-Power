const CACHE='colony-power-v13';
const SHELL=['./','index.html','i18n.js','supabase.js','sohan.jpg','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE&&k!=='cp-due').map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return; // never intercept Supabase or CDN requests
  // Network first so new versions always arrive; cached copy only when offline.
  e.respondWith(fetch(req,{cache:'no-cache'}).then(res=>{
    if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}
    return res;
  }).catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));
});

// Daily bill reminder (phones that allow background sync) and tapping a notification
async function dueReminder(){
  const c=await caches.open('cp-due');const r=await c.match('due.json');if(!r)return;
  const d=await r.json();if(!d||!(d.due>0))return;
  let day;try{day=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kathmandu'}).format(new Date())}catch(e){day=new Date().toISOString().slice(0,10)}
  let hr=6;try{hr=Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kathmandu',hour:'2-digit',hour12:false}).format(new Date()))}catch(e){}
  if(d.notifiedDay===day||hr<5)return;
  await self.registration.showNotification('Electricity bill due',{body:'You have to pay NPR '+Number(d.due).toLocaleString('en-IN')+' for your electricity bill.',tag:'due',icon:'icon-192.png',badge:'icon-192.png'});
  d.notifiedDay=day;await c.put('due.json',new Response(JSON.stringify(d)));
}
self.addEventListener('periodicsync',e=>{if(e.tag==='due-reminder')e.waitUntil(dueReminder())});
self.addEventListener('push',e=>{let d={};try{d=e.data?e.data.json():{}}catch(_){}e.waitUntil(self.registration.showNotification(d.title||'Colony Power',{body:d.body||'',tag:d.tag||'cp',icon:'icon-192.png',badge:'icon-192.png'}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{if(l.length)return l[0].focus();return self.clients.openWindow('./')}))});
