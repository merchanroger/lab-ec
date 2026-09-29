const exams=[
['Ácido úrico','$3,30'],['Albúmina','$3,30'],['Amilasa','$4,00'],['Aglutinaciones febriles','$7,00'],['ASTO - Antiestreptolisina','$8,80'],['Alfa feto proteínas - AFP','$13,28'],['Ácido fólico','$13,00'],['ACTIN F. IgA / ACTIN','$28,60'],['ACTIN IgG','$28,60'],['ANCA C-P','$40,00'],['ASCA IgG','$25,50'],['ASCA IgA','$25,50'],['Antitrombina','$39,61'],['Apolipoproteína A1','$15,40'],['Apolipoproteína B','$9,36'],['BUN (incluye urea)','$6,09'],['Creatinina','$3,30'],['Colesterol total','$3,30'],['Colesterol HDL','$5,50'],['Colesterol LDL','$5,60'],['Coprocultivo (heces)','$22,00'],['Calcio','$4,00'],['CA 125 (ovario, útero)','$15,40'],['Ceruloplasmina','$35,07'],['Calprotectina','$36,40'],['Calcio iónico','$8,00'],['Cloro','$3,38'],['Cardiolipina IgG','$24,44'],['Cardiolipina IgM','$24,44'],['CK MB-CPK','$13,52'],['Creatinina (orina)','$6,09'],['Colinesterasa','$4,40'],['Interleukina 6','$34,00'],['Insulina plasmática en ayunas','$14,30'],['IgG por nefelometría','$16,00'],['IgM por nefelometría','$17,00'],['IgA por nefelometría','$17,00'],['IgE total','$16,00'],['Influenza A/B/H1N1 por PCR GeneXpert','$188,37'],['Influenza A/B antígeno','$28,00'],['Insulina 2h post prandial','$34,00'],['KOH','$13,20'],['Kappa (orina)','$27,63'],['Kappa 24h','$28,60'],['Lipasa','$4,40'],['LDH (deshidrogenasa láctica)','$4,40'],['Linfocitos B (CD19-CD20)','$80,00'],['Linfocitos NK (CD16-CD56)','$48,30'],['Lipoproteína A','$16,00'],['Litio','$16,00'],['Lactoferrina','$20,00'],['Norovirus','$40,00'],['Osmolalidad','$14,49'],['Osteocalcina','$50,72'],['Oxalato urinario','$46,20'],['Opiáceos cuantitativa','$11,59'],['Plaquetas','$6,00'],['Prueba de Coombs directa','$9,00'],['Prueba de Coombs indirecta','$9,00'],['Parasitoscópico concentración (heces)','$6,00'],['PSA total','$16,93'],['PSA libre','$25,30'],['Potasio','$4,00'],['Pro-BNP','$65,00'],['Procalcitonina','$74,38'],['Prealbúmina','$30,00'],['Prolactina','$12,00'],['Progesterona','$12,00'],['Rotavirus','$13,00'],['R. de Widal y Weill Felix','$7,00'],['Factor reumatoideo por nefelometría','$16,00'],['RPR','$5,00'],['Rubeola IgG','$16,72'],['Rubeola IgM','$16,72'],['Sangre oculta - HB humana','$7,10'],['Sodio','$4,00'],['Sodio (orina)','$4,00'],['Strept-A','$13,20'],['Salmonella antígeno','$14,00'],['Urea','$3,30'],['Urocultivo (orina)','$18,00'],['Urea 24h','$6,30'],['V.D.R.L.','$5,50'],['Vitamina B12','$13,00'],['VLDL colesterol','$6,30'],['V.D.R.L. cuantitativo','$9,00'],['Varicela zóster IgG','$28,00'],['Varicela zóster IgM','$21,25'],['Vitamina D total','$32,00'],['Vitamina E','$65,10'],['Virus sincitial respiratorio','$36,75'],['Ziehl Neelsen','$7,20'],['Zinc','$35,00'],['Zika virus IgG','$100,49'],['Zika virus IgM','$75,74']
].map(([name,price])=>({name,price}));

const faqs=[
['¿Cómo descargo mis resultados?','LABS indica que los resultados se consultan mediante su aplicación. La información publicada señala que el usuario ingresa con el correo indicado por recepción y, si no modificó la clave, con su número de cédula; luego debe seleccionar “Mis resultados”.'],
['¿Necesito estar en ayunas para todos los exámenes de sangre?','No. LABS señala como ejemplos de pruebas que no requieren ayuno el hemograma, dímero D y pruebas de embarazo, salvo indicación médica.'],
['¿Qué pruebas requieren ayuno?','Entre las pruebas señaladas por LABS están colesterol total, HDL, LDL, VLDL, triglicéridos, glucosa, HOMA-IR y determinados test de aliento. Algunas pruebas pueden requerir preparación adicional.'],
['¿Debo agendar mis exámenes bajo una hora específica?','Depende del examen. LABS recomienda consultar telefónicamente para confirmar la preparación y horario correspondiente.'],
['¿Realizan servicio a domicilio?','Sí. La información publicada por LABS indica servicio a domicilio en Guayaquil y Durán; para otras ciudades recomienda consultar con la sucursal. Generalmente debe agendarse con anticipación.'],
['¿Cómo me preparo para un espermatograma?','LABS indica que no requiere ayuno, que debe existir abstinencia de 5 días y que la muestra debe tomarse en el laboratorio para preservar sus características.'],
['¿En qué tiempo se entrega el resultado del espermatograma?','La información publicada por LABS señala 2 días hábiles.'],
['¿Para qué sirve el espermatograma?','Evalúa características relacionadas con la cantidad y calidad del semen y los espermatozoides.'],
['¿Para qué sirve la hormona antimülleriana?','LABS explica que se utiliza para evaluar la reserva ovárica mediante una muestra de sangre y señala que no requiere ayuno.'],
['¿Qué se analiza en un hemograma?','LABS explica que evalúa el estado general de la sangre y componentes como glóbulos rojos, glóbulos blancos, hemoglobina, hematocrito y plaquetas, entre otros.'],
['¿Hasta qué hora puedo acercarme al laboratorio?','El horario depende de la ciudad y sucursal. Revisa la sección Sedes de esta página antes de acudir.'],
['¿En qué tiempo obtendré mis resultados?','El tiempo depende del examen. LABS indica que algunas pruebas se procesan en pocas horas y otras, como determinados cultivos, requieren más tiempo.'],
['¿Cuáles son los exámenes de tiroides?','LABS menciona TSH, T3 libre y total, y T4 libre y total como pruebas utilizadas para evaluar hormonas tiroideas.'],
['¿Cuáles son los exámenes de la enfermedad celíaca?','LABS menciona DQ2 y DQ8 como pruebas de sangre solicitadas para el diagnóstico de enfermedad celíaca y señala que no requieren ayuno.'],
['¿Cuáles son las formas de pago?','La información publicada por LABS menciona efectivo, tarjeta de crédito, débito, transferencia y cheque.'],
['¿Cómo recojo una muestra de orina de 24 horas?','LABS explica que debe recogerse toda la orina durante 24 horas: se desecha la primera muestra al iniciar y desde entonces se recoge todo hasta la misma hora del día siguiente. Ante dudas, recomienda consultar al laboratorio.']
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
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));

const examGrid=document.querySelector('#examGrid'), search=document.querySelector('#examSearch'), count=document.querySelector('#examCount');
function renderExams(term=''){const q=term.trim().toLowerCase();const list=exams.filter(x=>x.name.toLowerCase().includes(q));count.textContent=`${list.length} examen${list.length===1?'':'es'} disponible${list.length===1?'':'s'}`;examGrid.innerHTML=list.map(x=>`<div class="exam"><strong>${x.name}</strong><em>${x.price}</em></div>`).join('')||'<div class="exam"><strong>No encontramos ese examen.</strong><em>—</em></div>'}
renderExams(); search?.addEventListener('input',e=>renderExams(e.target.value)); document.querySelector('#clearSearch')?.addEventListener('click',()=>{search.value='';renderExams()});

const tabs=document.querySelector('#locationTabs'),detail=document.querySelector('#locationDetail');
const locationKeys=Object.keys(locations);
function showLocation(key){const x=locations[key];document.querySelectorAll('#locationTabs button').forEach(b=>b.classList.toggle('active',b.dataset.key===key));detail.innerHTML=`<p class="eyebrow">LABS · ${x.label||'SEDE'}</p><h3>${x.city}</h3><p>${x.address}</p><div class="hours"><b>Horario de atención</b><br>${x.hours}</div><p><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(x.address)}" target="_blank" rel="noopener">Ver ubicación en Google Maps →</a></p>`}
tabs.innerHTML=locationKeys.map(k=>`<button data-key="${k}">${locations[k].city}</button>`).join(''); tabs.addEventListener('click',e=>{const b=e.target.closest('button');if(b)showLocation(b.dataset.key)});showLocation('guayaquil');

const faqList=document.querySelector('#faqList');faqList.innerHTML=faqs.map((f,i)=>`<details ${i===0?'open':''}><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
faqList.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)faqList.querySelectorAll('details').forEach(o=>{if(o!==d)o.removeAttribute('open')})}));

const modal=document.querySelector('#quoteModal'), items=document.querySelector('#quoteItems'), totalEl=document.querySelector('#quoteTotal');
let selected=new Set();
function renderQuote(){items.innerHTML=exams.map((x,i)=>`<label class="quoteItem"><input type="checkbox" data-i="${i}" ${selected.has(i)?'checked':''}> <span>${x.name}<br><b>${x.price}</b></span></label>`).join('');items.querySelectorAll('input').forEach(c=>c.addEventListener('change',e=>{const i=+e.target.dataset.i;e.target.checked?selected.add(i):selected.delete(i);updateTotal()}));updateTotal()}
function updateTotal(){const sum=[...selected].reduce((a,i)=>a+Number(exams[i].price.replace('$','').replace(',','.')),0);totalEl.textContent=`$${sum.toFixed(2).replace('.',',')}`}
document.querySelector('#openQuote')?.addEventListener('click',()=>{modal.classList.add('show');modal.setAttribute('aria-hidden','false');renderQuote()});document.querySelector('#closeQuote')?.addEventListener('click',()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true')});modal?.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('show')}});
document.querySelector('#quoteForm')?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);const names=[...selected].map(i=>exams[i].name).join(', ');document.querySelector('#quoteMsg').textContent=selected.size?`Solicitud preparada para ${data.get('name')}. Exámenes: ${names}. Total estimado: ${totalEl.textContent}. Para envío real, conecta este formulario con el backend de LABS.`:'Selecciona al menos un examen antes de continuar.'});
