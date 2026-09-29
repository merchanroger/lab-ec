const exams=[
['Ácido úrico','$3,30'],['Albúmina','$3,30'],['Amilasa','$4,00'],['Aglutinaciones febriles','$7,00'],['ASTO - Antiestreptolisina','$8,80'],['Alfa feto proteínas - AFP','$13,28'],['Ácido fólico','$13,00'],['ACTIN F. IgA / ACTIN','$28,60'],['ACTIN IgG','$28,60'],['ANCA C-P','$40,00'],['ASCA IgG','$25,50'],['ASCA IgA','$25,50'],['Antitrombina','$39,61'],['Apolipoproteína A1','$15,40'],['Apolipoproteína B','$9,36'],['BUN (incluye urea)','$6,09'],['Creatinina','$3,30'],['Colesterol total','$3,30'],['Colesterol HDL','$5,50'],['Colesterol LDL','$5,60'],['Coprocultivo (heces)','$22,00'],['Calcio','$4,00'],['CA 125 (ovario, útero)','$15,40'],['Ceruloplasmina','$35,07'],['Calprotectina','$36,40'],['Calcio iónico','$8,00'],['Cloro','$3,38'],['Cardiolipina IgG','$24,44'],['Cardiolipina IgM','$24,44'],['CK MB-CPK','$13,52'],['Creatinina (orina)','$6,09'],['Colinesterasa','$4,40'],['Interleukina 6','$34,00'],['Insulina plasmática en ayunas','$14,30'],['IgG por nefelometría','$16,00'],['IgM por nefelometría','$17,00'],['IgA por nefelometría','$17,00'],['IgE total','$16,00'],['Influenza A/B/H1N1 por PCR GeneXpert','$188,37'],['Influenza A/B antígeno','$28,00'],['Insulina 2h post prandial','$34,00'],['KOH','$13,20'],['Kappa (orina)','$27,63'],['Kappa 24h','$28,60'],['Lipasa','$4,40'],['LDH (deshidrogenasa láctica)','$4,40'],['Linfocitos B (CD19-CD20)','$80,00'],['Linfocitos NK (CD16-CD56)','$48,30'],['Lipoproteína A','$16,00'],['Litio','$16,00'],['Lactoferrina','$20,00'],['Norovirus','$40,00'],['Osmolalidad','$14,49'],['Osteocalcina','$50,72'],['Oxalato urinario','$46,20'],['Opiáceos cuantitativa','$11,59'],['Plaquetas','$6,00'],['Prueba de Coombs directa','$9,00'],['Prueba de Coombs indirecta','$9,00'],['Parasitoscópico concentración (heces)','$6,00'],['PSA total','$16,93'],['PSA libre','$25,30'],['Potasio','$4,00'],['Pro-BNP','$65,00'],['Procalcitonina','$74,38'],['Prealbúmina','$30,00'],['Prolactina','$12,00'],['Progesterona','$12,00'],['Rotavirus','$13,00'],['R. de Widal y Weill Felix','$7,00'],['Factor reumatoideo por nefelometría','$16,00'],['RPR','$5,00'],['Rubeola IgG','$16,72'],['Rubeola IgM','$16,72'],['Sangre oculta - HB humana','$7,10'],['Sodio','$4,00'],['Sodio (orina)','$4,00'],['Strept-A','$13,20'],['Salmonella antígeno','$14,00'],['Urea','$3,30'],['Urocultivo (orina)','$18,00'],['Urea 24h','$6,30'],['V.D.R.L.','$5,50'],['Vitamina B12','$13,00'],['VLDL colesterol','$6,30'],['V.D.R.L. cuantitativo','$9,00'],['Varicela zóster IgG','$28,00'],['Varicela zóster IgM','$21,25'],['Vitamina D total','$32,00'],['Vitamina E','$65,10'],['Virus sincitial respiratorio','$36,75'],['Ziehl Neelsen','$7,20'],['Zinc','$35,00'],['Zika virus IgG','$100,49'],['Zika virus IgM','$75,74']
].map(([name,price])=>({name,price}));


const notes=[
{title:'El estrés: Un enemigo silencioso que afecta nuestra salud física y mental',date:'07 Nov 2024',tag:'SALUD',body:'La Organización Mundial de la Salud (OMS) define el estrés como cualquier tipo de cambio que provoca agotamiento físico, emocional o psicológico. LABS publicó esta nota como contenido de orientación para pacientes.'},
{title:'Hígado, el «filtro» natural del cuerpo',date:'05 Sep 2024',tag:'HÍGADO · LABS',body:'Mantenerlo sano a través de una buena alimentación es vital. LABS explica el papel del hígado en la actividad metabólica, la producción de bilis, el procesamiento de la sangre y el almacenamiento de nutrientes. También aborda la insuficiencia hepática y la prueba de función hepática.'},
{title:'Riñones: los héroes ocultos de nuestro cuerpo',date:'23 Jul 2024',tag:'EXÁMENES · SALUD',body:'LABS aborda el cuidado de los riñones y destaca la importancia de la hidratación, el ejercicio y una alimentación baja en sal.'},
{title:'4 síntomas que debes saber sobre el dengue',date:'05 Mar 2024',tag:'SALUD',body:'Nota de salud publicada por LABS sobre síntomas que deben conocerse en relación con el dengue.'},
{title:'Perdiendo peso, ¿qué exámenes de laboratorio necesito?',date:'05 Feb 2024',tag:'EXÁMENES · SALUD',body:'Contenido de LABS sobre los exámenes de laboratorio que pueden formar parte de la evaluación relacionada con la pérdida de peso.'},
{title:'7 exámenes básicos que debes realizarte en el año',date:'19 Jan 2024',tag:'EXÁMENES · SALUD',body:'Contenido educativo de LABS sobre exámenes básicos de laboratorio y su utilidad como parte del cuidado de la salud.'},
{title:'¿Cómo los exámenes revelan el impacto del estrés en tu salud?',date:'11 Jan 2024',tag:'EXÁMENES · SALUD',body:'LABS explica la relación entre el estrés y la información que pueden aportar determinados exámenes de laboratorio.'},
{title:'Cáncer de mama, la tercera causa de muerte en mujeres',date:'18 Oct 2023',tag:'SALUD',body:'Contenido de salud publicado por LABS sobre cáncer de mama.'},
{title:'Intolerancias vs. comportamientos, ¿qué relación existe?',date:'06 Oct 2023',tag:'SALUD',body:'Nota publicada por LABS sobre intolerancias y comportamientos relacionados con la salud.'},
{title:'Exámenes para detectar hígado graso',date:'08 Sep 2023',tag:'LABS · SALUD',body:'Contenido de LABS sobre pruebas de laboratorio relacionadas con la detección de hígado graso.'},
{title:'¿Mareos y dolor de cabeza? Puedes ser hígado graso.',date:'01 Sep 2023',tag:'LABS · SALUD',body:'Nota publicada por LABS sobre síntomas y su posible relación con el hígado graso.'},
{title:'Virus sincitial, el camaleón de un resfriado común',date:'01 Jul 2022',tag:'SALUD',body:'Contenido educativo de LABS sobre el virus sincitial.'},
{title:'¿Cómo prevenir enfermedades del riñón con exámenes rutinarios?',date:'28 Mar 2022',tag:'LABS',body:'LABS aborda la prevención y el valor de los exámenes rutinarios relacionados con la salud renal.'}
];

const locations={
  guayaquil:{city:'Guayaquil',label:'Sede principal',address:'Av. Abel Romeo Castillo y Juan Tanca Marengo, Torre Médica 2, piso 4, consultorios 417 y 418.',hours:'LUN–VIE 06h30–18h00 · SAB 06h30–12h00'},
  quito:{city:'Quito',address:'Av. Mariana de Jesús OE7-02 y Nuño de Valderrama. Edificio CITIMED, Planta Baja Local 7.',hours:'LUN–VIE 07h00–16h00'},
  manta:{city:'Manta',address:'Edificio Umiñamed, planta baja (misma sede de EndoscopyNet Manta).',hours:'LUN–VIE 07h00–15h40'},
  'santo-domingo':{city:'Santo Domingo',address:'Av. Quito, entre Latacunga e Ibarra.',hours:'LUN–VIE 07h30–16h10'},
  milagro:{city:'Milagro',address:'Calle 17 de Septiembre, entre Calle Esmeraldas y Guayas, frente a CNEL.',hours:'LUN–VIE 08h00–16h00'}
};

const nav=document.querySelector('#mainNav');
const menu=document.querySelector('.menubtn');

// Navegación móvil: abre/cierra y se cierra automáticamente al elegir una sección.
menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('#mainNav a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
}));

// Sedes: solo se muestra la información de la sede seleccionada.
const tabs=document.querySelector('#locationTabs');
const detail=document.querySelector('#locationDetail');
const locationKeys=Object.keys(locations);
function showLocation(key){
  const x=locations[key];
  if(!x||!tabs||!detail)return;
  tabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.key===key));
  detail.innerHTML=`<h3>${x.city}</h3>${x.label?`<p class="locationLabel">${x.label}</p>`:''}<p>${x.address}</p><div class="hours"><b>${currentLang==='en'?'Hours':'Horario'}</b><br>${x.hours}</div><p><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(x.address)}" target="_blank" rel="noopener">${currentLang==='en'?'Open in Google Maps →':'Ver ubicación en Google Maps →'}</a></p>`;
}
if(tabs){
  tabs.innerHTML=locationKeys.map(k=>`<button type="button" data-key="${k}" aria-label="${locations[k].city}">${locations[k].city}</button>`).join('');
  tabs.addEventListener('click',e=>{const b=e.target.closest('button');if(b)showLocation(b.dataset.key)});
}

// Notas de salud: tarjetas compactas y lectura completa en modal.
const noteGrid=document.querySelector('#noteGrid');
const noteModal=document.querySelector('#noteModal');
function renderNotes(){
  if(!noteGrid)return;
  noteGrid.innerHTML=notes.slice(0,6).map((n,i)=>`<button class="noteCard" type="button" data-note="${i}"><small>${n.date} · ${n.tag}</small><h3>${n.title}</h3><span>${currentLang==='en'?'Read note →':'Leer nota →'}</span></button>`).join('');
}
function openNote(i){
  const n=notes[i];
  if(!n||!noteModal)return;
  document.querySelector('#noteModalTitle').textContent=n.title;
  document.querySelector('#noteModalDate').textContent=n.date+' · '+n.tag;
  document.querySelector('#noteModalBody').textContent=n.body;
  noteModal.classList.add('show');
  noteModal.setAttribute('aria-hidden','false');
}
if(noteGrid){noteGrid.addEventListener('click',e=>{const b=e.target.closest('[data-note]');if(b)openNote(Number(b.dataset.note))});}
document.querySelector('#closeNote')?.addEventListener('click',()=>{noteModal?.classList.remove('show');noteModal?.setAttribute('aria-hidden','true')});

// Cotizador: catálogo cerrado por defecto, búsqueda, selección, resumen, total y envío por correo.
const modal=document.querySelector('#quoteModal');
const items=document.querySelector('#quoteItems');
const totalEl=document.querySelector('#quoteTotal');
const selectedItems=document.querySelector('#selectedItems');
const selectedCount=document.querySelector('#selectedCount');
const quoteCount=document.querySelector('#quoteCount');
const examSearch=document.querySelector('#examSearch');
const clearExamSearch=document.querySelector('#clearExamSearch');
const quoteMsg=document.querySelector('#quoteMsg');
const selected=new Set();
let quoteFilter='';

function filteredExams(){
  const q=quoteFilter.trim().toLowerCase();
  return q?exams.filter(x=>x.name.toLowerCase().includes(q)):exams;
}
function priceNumber(value){return Number(value.replace('$','').replace(',','.').trim())||0;}
function formatMoney(value){return `$${value.toFixed(2).replace('.',',')}`;}
function updateTotal(){
  const sum=[...selected].reduce((total,i)=>total+priceNumber(exams[i].price),0);
  if(totalEl)totalEl.textContent=formatMoney(sum);
  if(selectedCount)selectedCount.textContent=String(selected.size);
}
function renderSelected(){
  if(!selectedItems)return;
  if(!selected.size){
    selectedItems.innerHTML=`<p>${currentLang==='en'?'No tests selected yet.':'Aún no has seleccionado exámenes.'}</p>`;
    updateTotal();
    return;
  }
  selectedItems.innerHTML=[...selected].map(i=>`<div class="selectedItem"><span>${exams[i].name}<b>${exams[i].price}</b></span><button type="button" data-remove="${i}" aria-label="${currentLang==='en'?'Remove':'Quitar'} ${exams[i].name}">×</button></div>`).join('');
  updateTotal();
}
function renderQuote(){
  if(!items)return;
  const visible=filteredExams();
  items.innerHTML=visible.length?visible.map(x=>{
    const i=exams.indexOf(x);
    return `<label class="quoteItem"><input type="checkbox" data-i="${i}" ${selected.has(i)?'checked':''}><span>${x.name}<b>${x.price}</b></span></label>`;
  }).join(''):`<div class="quoteEmpty">${currentLang==='en'?'No tests match your search.':'No se encontraron exámenes con esa búsqueda.'}</div>`;
  items.querySelectorAll('input[data-i]').forEach(c=>c.addEventListener('change',e=>{
    const i=Number(e.target.dataset.i);
    if(e.target.checked)selected.add(i);else selected.delete(i);
    renderSelected();
  }));
  if(quoteCount)quoteCount.textContent=currentLang==='en'?`${visible.length} tests available`:`${visible.length} exámenes disponibles`;
  renderSelected();
}
function openQuote(){
  modal?.classList.add('show');
  modal?.setAttribute('aria-hidden','false');
  quoteMsg.textContent='';
  renderQuote();
  setTimeout(()=>examSearch?.focus(),50);
}
function closeQuote(){
  modal?.classList.remove('show');
  modal?.setAttribute('aria-hidden','true');
}
document.querySelector('#openQuote')?.addEventListener('click',openQuote);
document.querySelector('#closeQuote')?.addEventListener('click',closeQuote);
selectedItems?.addEventListener('click',e=>{
  const b=e.target.closest('[data-remove]');
  if(!b)return;
  selected.delete(Number(b.dataset.remove));
  renderQuote();
});
examSearch?.addEventListener('input',e=>{quoteFilter=e.target.value;renderQuote()});
clearExamSearch?.addEventListener('click',()=>{quoteFilter='';if(examSearch)examSearch.value='';renderQuote();examSearch?.focus()});
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m){m.classList.remove('show');m.setAttribute('aria-hidden','true')}}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal.show').forEach(m=>{m.classList.remove('show');m.setAttribute('aria-hidden','true')});nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')}});

document.querySelector('#quoteForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  if(!selected.size){quoteMsg.textContent=currentLang==='en'?'Select at least one test before continuing.':'Selecciona al menos un examen antes de continuar.';return;}
  const data=new FormData(e.target);
  const names=[...selected].map(i=>`${exams[i].name} (${exams[i].price})`).join(', ');
  const total=totalEl.textContent;
  const subject=currentLang==='en'?'LABS test quote request':'Solicitud de cotización de exámenes LABS';
  const body=(currentLang==='en'?`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')||'Not provided'}\n\nTests: ${names}\nEstimated total: ${total}`:`Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\nTeléfono: ${data.get('phone')||'No indicado'}\n\nExámenes: ${names}\nTotal estimado: ${total}`);
  quoteMsg.textContent=currentLang==='en'?'Your email application will open to send the request to LABS.':'Se abrirá tu aplicación de correo para enviar la solicitud a LABS.';
  window.location.href=`mailto:info@labs.ec?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const translations={
es:{
  skipContent:'Ir al contenido',navHome:'Inicio',navAbout:'Nosotros',navServices:'Servicios',navQuote:'Cotiza y consulta',navLocations:'Sedes',navNotes:'Notas de salud',navContact:'Contacto',
  heroEyebrow:'DIAGNÓSTICO CLÍNICO · ECUADOR',heroTitle:'Resultados que ayudan a cuidar lo que más importa.',heroLead:'Servicios de laboratorio clínico confiables, oportunos y orientados a apoyar las decisiones médicas y el bienestar de nuestros pacientes.',quoteExam:'Cotizar exámenes',findLocation:'Encontrar una sede',labMini:'LABORATORIO CLÍNICO',heroCardTitle:'Precisión<br>en cada muestra.',heroCardList:'Hematología · Química clínica · Hormonas · Uroanálisis',
  aboutTag:'HUMANLABS MEDICINA DIAGNÓSTICA',aboutTitle:'Su laboratorio de confianza.',missionTitle:'Misión',missionText:'Otorgamos servicios de análisis y diagnósticos clínicos confiables, oportunos con altos niveles de ética y calidad, apoyando a médicos y empresas para buscar soluciones tempranas que ayuden al bienestar del paciente.',visionTitle:'Visión',visionText:'Ampliar la cartera de exámenes clínicos, aumentar la satisfacción de nuestros pacientes y llegar a ser un laboratorio referente a nivel nacional con presencia en puntos estratégicos del país.',scopeTitle:'Alcance',scopeText:'Procesos preanalíticos, analíticos y postanalíticos en hematología, coagulación, química clínica, hormonas, uroanálisis y parasitología aplicados al Laboratorio Central.',qualityTitle:'Política de calidad',qualityText:'Calidad, calidez, puntualidad, confidencialidad, personal capacitado, mejora continua e información clínicamente útil para la toma de decisiones médicas.',
  servicesTag:'SERVICIOS',servicesTitle:'Atención y diagnóstico.',servicesIntro:'Servicios de laboratorio clínico orientados a una atención confiable y oportuna.',service1Title:'Exámenes de laboratorio',service1Text:'Análisis clínicos en hematología, coagulación, química clínica, hormonas, uroanálisis y parasitología.',service2Title:'Toma de muestras',service2Text:'Toma y procesamiento de muestras con procesos preanalíticos, analíticos y postanalíticos.',service3Title:'Toma de muestras a domicilio',service3Text:'Servicio a domicilio disponible en Guayaquil y Durán; para otras ciudades, consulta con la sucursal.',service4Title:'Atención al usuario',service4Text:'Encuentra opciones de atención y canales de contacto para resolver tus consultas.',service4Link:'Ver contacto →',
  quoteTag:'COTIZADOR',quoteTitle:'Consulta y cotiza tus exámenes.',quoteIntro:'Un solo punto para buscar, revisar y seleccionar los exámenes disponibles.',catalogLabel:'CATÁLOGO DE EXÁMENES',catalogTitle:'Consulta todos los exámenes disponibles',catalogText:'Haz clic en el botón para desplegar el catálogo completo, buscar un examen y seleccionar los que deseas cotizar.',quoteSelected:'Cotizar y consultar exámenes →',quoteModalTag:'COTIZACIÓN',quoteModalTitle:'Busca y selecciona tus exámenes',quoteModalIntro:'Busca por nombre, marca los exámenes que necesitas y revisa tu selección antes de solicitar la cotización.',examSearchPlaceholder:'Buscar examen',clearSearch:'Limpiar',selectedTitle:'Tu selección',emptySelection:'Aún no has seleccionado exámenes.',quoteTotalLabel:'Total estimado',prepareRequest:'Solicitar cotización por correo →',namePlaceholder:'Nombre completo',emailPlaceholder:'Correo electrónico',phonePlaceholder:'Teléfono',
  notesTitle:'Información de salud publicada por LABS.',notesIntro:'Contenido educativo publicado por LABS para pacientes y familias.',locationsTag:'SEDES',locationsTitle:'Encuentra una sede.',locationsIntro:'Selecciona una sede para consultar únicamente su dirección y horario.',contactTag:'CONTACTO',contactTitle:'Estamos para ayudarte.',contactAddress:'Av. Abel Romeo Castillo y Juan Tanca Marengo, Torre Médica 2, piso 4, consultorios 417 y 418.',whatsappLink:'Escribir por WhatsApp →',contactPanelBrand:'LABS · MEDICINA DIAGNÓSTICA',contactPanelTitle:'Atención al usuario',contactPanelText:'Para consultas generales, utiliza los canales oficiales de LABS.',locationsHint:'También puedes consultar la sede que necesitas en la sección Sedes.',viewLocations:'Ver sedes →',footerExplore:'EXPLORA',footerLabs:'LABS',footerAbout:'Quiénes somos',footerQuality:'Calidad',footerLocations:'Sedes',footerServices:'Servicios',footerContact:'CONTACTO',workWithUs:'Trabaja con nosotros',copyright:'© 2026 HUMANLABS. Todos los derechos reservados.'
},
en:{
  skipContent:'Skip to content',navHome:'Home',navAbout:'About us',navServices:'Services',navQuote:'Quote tests',navLocations:'Locations',navNotes:'Health notes',navContact:'Contact',
  heroEyebrow:'CLINICAL DIAGNOSTICS · ECUADOR',heroTitle:'Results that help care for what matters most.',heroLead:'Reliable and timely clinical laboratory services designed to support medical decisions and patient wellbeing.',quoteExam:'Quote tests',findLocation:'Find a location',labMini:'CLINICAL LABORATORY',heroCardTitle:'Precision<br>in every sample.',heroCardList:'Hematology · Clinical chemistry · Hormones · Urinalysis',
  aboutTag:'HUMANLABS DIAGNOSTIC MEDICINE',aboutTitle:'Your trusted laboratory.',missionTitle:'Mission',missionText:'We provide reliable and timely clinical analysis and diagnostic services with high standards of ethics and quality, supporting physicians and companies in seeking early solutions that contribute to patient wellbeing.',visionTitle:'Vision',visionText:'Expand the clinical test portfolio, increase patient satisfaction and become a nationally recognized laboratory with a presence in strategic locations.',scopeTitle:'Scope',scopeText:'Pre-analytical, analytical and post-analytical processes in hematology, coagulation, clinical chemistry, hormones, urinalysis and parasitology applied to the Central Laboratory.',qualityTitle:'Quality policy',qualityText:'Quality, warmth, punctuality, confidentiality, trained staff, continuous improvement and clinically useful information for medical decision-making.',
  servicesTag:'SERVICES',servicesTitle:'Care and diagnostics.',servicesIntro:'Clinical laboratory services focused on reliable and timely care.',service1Title:'Laboratory tests',service1Text:'Clinical analysis in hematology, coagulation, clinical chemistry, hormones, urinalysis and parasitology.',service2Title:'Sample collection',service2Text:'Sample collection and processing through pre-analytical, analytical and post-analytical processes.',service3Title:'Home sample collection',service3Text:'Home service available in Guayaquil and Durán; for other cities, check with the branch.',service4Title:'Patient support',service4Text:'Find patient support options and official contact channels for your questions.',service4Link:'View contact →',
  quoteTag:'QUOTE',quoteTitle:'Search and quote your tests.',quoteIntro:'One place to search, review and select available tests.',catalogLabel:'TEST CATALOG',catalogTitle:'Browse available tests',catalogText:'Click the button to open the full catalog, search for a test and select the ones you want to quote.',quoteSelected:'Quote and search tests →',quoteModalTag:'QUOTE',quoteModalTitle:'Search and select your tests',quoteModalIntro:'Search by name, select the tests you need and review your selection before requesting a quote.',examSearchPlaceholder:'Search test',clearSearch:'Clear',selectedTitle:'Your selection',emptySelection:'No tests selected yet.',quoteTotalLabel:'Estimated total',prepareRequest:'Request quote by email →',namePlaceholder:'Full name',emailPlaceholder:'Email address',phonePlaceholder:'Phone',
  notesTitle:'Health information published by LABS.',notesIntro:'Educational content published by LABS for patients and families.',locationsTag:'LOCATIONS',locationsTitle:'Find a location.',locationsIntro:'Select a location to view only its address and hours.',contactTag:'CONTACT',contactTitle:'We are here to help.',contactAddress:'Av. Abel Romeo Castillo y Juan Tanca Marengo, Torre Médica 2, 4th floor, offices 417 and 418.',whatsappLink:'Write on WhatsApp →',contactPanelBrand:'LABS · DIAGNOSTIC MEDICINE',contactPanelTitle:'Patient support',contactPanelText:'For general questions, use LABS official channels.',locationsHint:'You can also select the location you need in the Locations section.',viewLocations:'View locations →',footerExplore:'EXPLORE',footerLabs:'LABS',footerAbout:'About us',footerQuality:'Quality',footerLocations:'Locations',footerServices:'Services',footerContact:'CONTACT',workWithUs:'Work with us',copyright:'© 2026 HUMANLABS. All rights reserved.'
}
};
function setLanguage(lang){
  currentLang=lang;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.dataset.i18n;
    if(translations[lang][k])el.innerHTML=translations[lang][k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const k=el.dataset.i18nPlaceholder;
    if(translations[lang][k])el.placeholder=translations[lang][k];
  });
  document.querySelectorAll('#languageToggle,#footerLanguage').forEach(b=>b.textContent=lang==='es'?'ES | EN':'EN | ES');
  localStorage.setItem('labs-language',lang);
  renderNotes();
  if(modal?.classList.contains('show'))renderQuote();
  const active=tabs?.querySelector('button.active');
  showLocation(active?.dataset.key||'guayaquil');
}
let currentLang=localStorage.getItem('labs-language')||'es';
document.querySelector('#languageToggle')?.addEventListener('click',()=>setLanguage(currentLang==='es'?'en':'es'));
document.querySelector('#footerLanguage')?.addEventListener('click',()=>setLanguage(currentLang==='es'?'en':'es'));
renderNotes();
setLanguage(currentLang);
showLocation('guayaquil');
